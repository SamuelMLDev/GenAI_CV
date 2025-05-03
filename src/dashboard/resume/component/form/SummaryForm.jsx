import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ResumeContext } from "@/context/ResumeContext";
import { useContext, useEffect, useState } from "react";
import { toast } from "sonner";
import { Brain, Loader2 } from "lucide-react";
import { AIchatSession } from "../../../../../service/AiModel";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { app } from "@/utils/firebase_config";

const prompt = `
Given the job title "{jobTitle}", generate 3 concise and ATS-optimized professional summary suggestions.

Each summary must:
- Be 3–5 lines long
- Follow a third-person implied style (no "I" or "my")
- Begin with strong, active verbs (e.g., Led, Delivered, Spearheaded)
- Mention the candidate's years of experience (e.g., "5+ years")
- Emphasize core domain focus and major achievements
- Include specific tools, technologies, or methodologies related to the job title (e.g., "API documentation", "cloud-native apps", "UX writing")
- Include phrases from the job title directly to optimize for Applicant Tracking Systems (ATS)
- Remain human-readable, impact-driven, and professional in tone

Respond with a **JSON array** of 3 objects. Each object must contain:
- "experience_level": either "Fresher", "Mid-level", or "Experienced"
- "summary": the summary string (one paragraph, not bullet points)

Do not include any explanations—only return the array.
`;

const SummaryForm = ({ resumeId, email, enableNext }) => {
    const { resumeInfo, setResumeInfo } = useContext(ResumeContext);
    const [summary, setSummary] = useState(resumeInfo?.summary || "");
    const [loading, setLoading] = useState(false);
    const [aiGeneratedSummeryList, setAiGenerateSummeryList] = useState();

    useEffect(() => {
        if (summary) {
            setResumeInfo((prev) => ({
                ...prev,
                summary,
            }));
        }
    }, [summary]);

    const generateSummary = async () => {
        setLoading(true);
        try {
            const PROMPT = prompt.replace("{jobTitle}", resumeInfo?.personalDetail?.jobTitle || "your job title");
            const result = await AIchatSession.sendMessage(PROMPT);
            const rawResponse = await result.response.text();
            const wrappedResponse = rawResponse.startsWith("[") ? rawResponse : `[${rawResponse}]`;
            const parsedResponse = JSON.parse(wrappedResponse);
            setAiGenerateSummeryList(parsedResponse);
        } catch (error) {
            console.error("Error generating summaries:", error);
            toast.error("Failed to generate summaries");
        } finally {
            setLoading(false);
        }
    };

    const onSave = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const db = getFirestore(app);
            const resumeRef = doc(
                db,
                `usersByEmail/${email}/resumes`,
                `resume-${resumeId}`
            );
            await setDoc(resumeRef, { summary }, { merge: true });
            enableNext(true);
            toast.success("Details Updated");
        } catch (error) {
            console.error("Error updating document:", error);
            toast.error("Failed to update details");
        } finally {
            setLoading(false);
        }
    };

    const handleSuggestionClick = (summaryText) => {
        setSummary(summaryText);
    };

    return (
        <div>
            <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
                <h2 className="font-bold text-lg">Summary Detail</h2>
                <p>Add Summary for your job title</p>
                <form className="mt-7" onSubmit={onSave}>
                    <div className="flex justify-between items-end">
                        <label>Add Summary</label>
                        <Button
                            size="sm"
                            variant="outline"
                            className="border-primary text-primary flex gap-2"
                            type="button"
                            onClick={generateSummary}
                        >
                            <Brain className="h-4 w-4" />
                            Generate from AI
                        </Button>
                    </div>
                    <Textarea
                        className="mt-5"
                        required
                        onChange={(e) => setSummary(e.target.value)}
                        value={summary}
                        placeholder="Write your job summary here..."
                    />
                    <div className="mt-2 flex justify-end">
                        <Button disabled={loading} type="submit">
                            {loading ? <Loader2 className="animate-spin" /> : "Save"}
                        </Button>
                    </div>
                </form>
            </div>
            {aiGeneratedSummeryList && (
                <div className="my-5">
                    <h2 className="font-bold text-lg">Suggestions</h2>
                    {aiGeneratedSummeryList.map((item, index) => (
                        <div
                            key={index}
                            className="p-5 shadow-lg my-4 rounded-lg cursor-pointer"
                            onClick={() => handleSuggestionClick(item.summary)}
                        >
                            <h2 className="font-bold my-1 text-primary">
                                Level: <span className="text-red-500">{item.experience_level}</span>
                            </h2>
                            <p>{item.summary}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SummaryForm;