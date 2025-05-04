import { Button } from "@/components/ui/button";
import { ResumeContext } from "@/context/ResumeContext";
import { Brain, Loader2 } from "lucide-react";
import { useContext, useState } from "react";
import {
    BtnBold,
    BtnBulletList,
    BtnClearFormatting,
    BtnItalic,
    BtnLink,
    BtnNumberedList,
    BtnRedo,
    BtnStyles,
    BtnUnderline,
    BtnUndo,
    Editor,
    EditorProvider,
    HtmlButton,
    Separator,
    Toolbar,
} from "react-simple-wysiwyg";
import { AIchatSession } from "../../../../service/AiModel";
import { toast } from "sonner";

const EXPERIENCE_PROMPT =
    `Forget everything from previous prompts. Provide a concise paragraph summarizing the experience titled “{positionTitle}” in 3–5 sentences. Use active voice, implied third-person, mention achievements and tools. Do not wrap in JSON, no curly braces, no quotation marks.`;

const RichTextEditor = ({
    onRichTextEditorChange,
    index,
    defaultValue,
    context = "experience",
}) => {
    const [value, setValue] = useState(defaultValue);
    const { resumeInfo } = useContext(ResumeContext);
    const [loading, setLoading] = useState(false);

    const GenerateSummaryFromAI = async () => {
        setLoading(true);

        let prompt;
        if (context === "education") {
            const edu = resumeInfo?.education?.[index] || {};
            prompt = `Generate an ATS-optimized 3–5 line education summary based on the following details: degree ${edu.degree || ""}, field of study ${edu.fieldOfStudy || ""}, university ${edu.school || ""}, graduation date ${edu.graduationDate || ""}. Write a single paragraph in active voice, implied third-person. No JSON, no curly braces, no quotation marks.`;
        } else {
            const title = resumeInfo?.experience?.[index]?.title;
            if (!title) {
                toast.error("Please add a position title first");
                setLoading(false);
                return;
            }
            prompt = EXPERIENCE_PROMPT.replace("{positionTitle}", title);
        }

        try {
            const result = await AIchatSession.sendMessage(prompt);
            const raw = await result.response.text();
            let cleaned = raw.trim();
            // If the response is JSON-wrapped, parse it
            if (/^[{[]/.test(cleaned)) {
                try {
                    const obj = JSON.parse(cleaned);
                    // if array, take first element
                    const data = Array.isArray(obj) ? obj[0] : obj;
                    // pick possible keys
                    const key = data.summary !== undefined ? 'summary' : data.education_summary !== undefined ? 'education_summary' : null;
                    if (key) {
                        cleaned = data[key];
                    }
                } catch (e) {
                    // fallback leave raw
                }
            }
            // strip any remaining quotes or braces
            cleaned = cleaned.replace(/^["{]+|["}]+$/g, '').trim();
            setValue(cleaned);
            onRichTextEditorChange({ target: { value: cleaned } });
        } catch (error) {
            toast.error("Error generating summary.");
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <div className="flex justify-between my-2">
                <label className="text-xs">Summary</label>
                <Button
                    onClick={GenerateSummaryFromAI}
                    variant="outline"
                    size="sm"
                    className="flex gap-2 border-primary text-primary"
                >
                    <Brain className="h-4 w-4" />
                    {loading ? <Loader2 className="animate-spin" /> : "Generate from AI"}
                </Button>
            </div>
            <EditorProvider>
                <Editor
                    value={value}
                    onChange={(e) => {
                        setValue(e.target.value);
                        onRichTextEditorChange(e);
                    }}
                >
                    <Toolbar>
                        <BtnUndo />
                        <BtnRedo />
                        <Separator />
                        <BtnBold />
                        <BtnItalic />
                        <BtnUnderline />
                        <Separator />
                        <BtnBulletList />
                        <BtnNumberedList />
                        <Separator />
                        <BtnLink />
                        <BtnClearFormatting />
                        <HtmlButton />
                        <Separator />
                        <BtnStyles />
                    </Toolbar>
                </Editor>
            </EditorProvider>
        </div>
    );
};

export default RichTextEditor;