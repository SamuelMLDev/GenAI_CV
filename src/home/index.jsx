import Header from "@/components/custom/Header";
import { AtomIcon, Edit, Share2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const handleGetStartedButton = () => {
        navigate("/dashboard");
    };

    return (
        <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
            <Header />

            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <div className="inline-flex items-center justify-center px-4 py-1 mb-6 bg-gray-100 text-sm font-medium text-gray-700 rounded-full dark:bg-gray-800 dark:text-white">
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold mr-3">
                            New
                        </span>
                        A Smarter Way to Create Resumes with AI
                    </div>

                    <h1 className="text-5xl font-extrabold tracking-tight leading-tight sm:text-6xl lg:text-7xl mb-6">
                        Build Your Resume <span className="text-blue-600">With AI</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-10">
                        Effortlessly craft a standout resume with our AI-powered builder tailored for modern job markets.
                    </p>

                    <button
                        onClick={handleGetStartedButton}
                        className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                    >
                        Get Started
                        <svg className="ml-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                fillRule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                </div>
            </section>

            {/* How it Works */}
            <section className="py-24 bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-4">How It Works</h2>
                    <p className="text-gray-500 dark:text-gray-400 text-lg mb-12">
                        Create your resume quickly and effortlessly in just 3 simple steps
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {[{
                            icon: <AtomIcon className="h-10 w-10 mx-auto" />,
                            title: "AI-Generated Resume Points",
                            desc: "Fill in your details and let the AI craft ATS-friendly summaries and job descriptions for you."
                        },
                        {
                            icon: <Edit className="h-10 w-10 mx-auto" />,
                            title: "Edit & Customize",
                            desc: "Fine-tune your resume, modify colors, and personalize AI content to suit your goals."
                        },
                        {
                            icon: <Share2 className="h-10 w-10 mx-auto" />,
                            title: "Download & Share",
                            desc: "Export your polished resume as a PDF and share it instantly—anytime, anywhere."
                        }].map((item, idx) => (
                            <div key={idx} className="p-8 rounded-2xl border bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 shadow-md hover:shadow-lg transition">
                                {item.icon}
                                <h3 className="mt-6 text-xl font-semibold">{item.title}</h3>
                                <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={handleGetStartedButton}
                        className="mt-16 inline-block px-10 py-4 bg-blue-600 text-white text-lg font-medium rounded-xl hover:bg-blue-700 transition"
                    >
                        Get Started Today
                    </button>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24 bg-gray-50 dark:bg-gray-800">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-6">
                        Why Choose Our Resume Builder?
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        Leverage cutting-edge AI to personalize your resume for every job you apply to. Build faster, smarter, and with more impact.
                    </p>
                </div>
            </section>

            {/* Feature Highlights */}
            <section className="py-24 bg-white dark:bg-gray-900">
                <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-16">
                    <div>
                        <h3 className="text-2xl font-bold mb-2">Optimized for ATS Systems</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            Resumes are structured and keyword-optimized to pass Applicant Tracking Systems and boost your chances of getting noticed.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-2">Instant PDF Downloads</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            After customization, download your resume instantly—without hassle or waiting.
                        </p>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20 bg-blue-600 text-white text-center">
                <div className="max-w-xl mx-auto px-4">
                    <h2 className="text-3xl font-extrabold mb-4">Ready to Land Your Dream Job?</h2>
                    <p className="text-lg mb-8">
                        Start building your AI-powered resume today and stand out from the crowd.
                    </p>
                    <button
                        onClick={handleGetStartedButton}
                        className="px-10 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition"
                    >
                        Build My Resume Now
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Home;
