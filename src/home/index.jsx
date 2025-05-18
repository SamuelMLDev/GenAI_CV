import Header from "@/components/custom/Header";
import { useNavigate } from "react-router-dom";
import { Atom, Edit, Share2 } from "lucide-react";

const features = [
    {
        icon: <Atom className="h-10 w-10 mx-auto text-blue-600" />,
        title: "AI-Powered Summaries",
        description: "Automatically generate ATS-friendly bullet points and professional summaries tailored to your role.",
    },
    {
        icon: <Edit className="h-10 w-10 mx-auto text-blue-600" />,
        title: "Customizable Templates",
        description: "Choose from multiple modern resume layouts and personalize colors, fonts, and sections.",
    },
    {
        icon: <Share2 className="h-10 w-10 mx-auto text-blue-600" />,
        title: "Instant Download",
        description: "Export your polished resume as a PDF or share a unique link with recruiters instantly.",
    },
];

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col min-h-screen bg-white text-gray-900">
            <Header />

            {/* Hero Section */}
            <section className="flex flex-col-reverse lg:flex-row items-center justify-between px-8 py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
                <div className="w-full lg:w-1/2 mt-10 lg:mt-0 space-y-6">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
                        Build Your Resume <span className="text-yellow-300">Effortlessly</span>
                    </h1>
                    <p className="text-lg sm:text-xl">
                        Leverage cutting-edge AI to craft ATS-optimized resumes in minutes, not hours.
                    </p>
                    <button
                        onClick={() => navigate("/dashboard")}
                        className="inline-flex items-center px-8 py-4 bg-yellow-300 text-black font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition"
                    >
                        Get Started Now
                    </button>
                </div>

                <div className="w-full lg:w-1/2 flex justify-center">
                    <img
                        src="/3d-cv-resume-icon_165488-4908-removebg-preview.png"
                        alt="AI Resume Illustration"
                        className="w-64 h-64 sm:w-80 sm:h-80"
                    />
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 px-8 bg-gray-50">
                <div className="max-w-6xl mx-auto text-center mb-12">
                    <h2 className="text-3xl font-bold">How It Works</h2>
                    <p className="mt-4 text-gray-600">
                        Three simple steps to your dream job:
                    </p>
                </div>
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
                    {features.map((feature, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
                            <div>{feature.icon}</div>
                            <h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>
                            <p className="mt-2 text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-blue-600 text-white text-center">
                <div className="max-w-3xl mx-auto space-y-4">
                    <h2 className="text-3xl font-bold">Ready to Get Noticed?</h2>
                    <p className="text-lg">
                        Create, customize, and download your AI-powered resume today.
                    </p>
                    <button
                        onClick={() => navigate("/dashboard")}
                        className="px-8 py-3 bg-yellow-300 text-black font-semibold rounded-lg hover:bg-yellow-400 transition"
                    >
                        Start Building
                    </button>
                </div>
            </section>

            {/* Footer */}
            <footer className="mt-auto py-6 bg-gray-800 text-gray-400 text-center">
                <p>© {new Date().getFullYear()} GenCV. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Home;
