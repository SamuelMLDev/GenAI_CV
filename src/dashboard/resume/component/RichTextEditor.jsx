/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
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
    "Forget everything from previous prompts. Provide me 4–5 ATS-friendly one-line bullet points in HTML for experience titled “{positionTitle}”. Output only the HTML strings, no JSON or wrappers.";

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
            // dynamically build the education prompt using the current form values
            const edu = resumeInfo?.education?.[index] || {};
            prompt = `
education_summary: Generate an ATS-optimized, 3–5 line education summary based on:
degree ${edu.degree || ""}, field of study ${edu.fieldOfStudy || ""},
university ${edu.school || ""}, graduation year ${edu.graduationDate || ""}.
Write a single paragraph in active voice, implied third-person, no JSON or bullets.
      `.trim();
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
            const cleaned = raw
                .replace(/"\s*,\s*"/g, "\n")
                .replace(/"\s*\.\s*,/g, ".")
                .replace(/\.,/g, ".")
                .replace(/[{}\[\]"]/g, "")
                .trim();

            // update both the editor's internal state AND your form context in one go
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


