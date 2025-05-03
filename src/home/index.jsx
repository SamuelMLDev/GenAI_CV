import Header from "@/components/custom/Header";
import { AtomIcon, Edit, Share2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const handleGetStartedButton = () => {
        navigate("/dashboard");
    };

    return (
        <div>
            <Header />
            <section className="z-50">
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                    <div
                        className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
                        role="alert"
                    >
                        <span className="text-xs bg-blue-600 rounded-full text-white px-4 py-1.5 mr-3">
                            New
                        </span>{" "}
                        <span className="text-sm font-medium">
                            A Smarter Way to Create Resumes with AI
                        </span>
                        <svg
                            className="ml-2 w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </div>
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white transition duration-700 ease-in-out">
                        Build Your Resume <span className="text-blue-600">With AI</span>{" "}
                    </h1>
                    <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 transition-opacity duration-700 ease-in-out opacity-90">
                        Effortlessly Craft a Standout Resume with Our AI-Powered Builder
                    </p>
                    <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                        <div
                            onClick={handleGetStartedButton}
                            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 transition-transform hover:scale-105"
                        >
                            Get Started
                            <svg
                                className="ml-2 -mr-1 w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-8 bg-white z-50 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                <h2 className="font-bold text-3xl transition-transform duration-700 hover:scale-105">How it Works?</h2>
                <h2 className="text-md text-gray-500">Create your resume quickly and effortlessly in 3 Steps</h2>

                <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <div className="block rounded-xl border bg-white border-gray-200 p-8 shadow-xl hover:shadow-lg transition">
                        <AtomIcon className="h-10 w-10 m-auto" />
                        <h2 className="mt-4 text-xl font-bold text-black">
                            Fill in Details and Let the AI Generate for You
                        </h2>
                        <p className="mt-1 text-sm text-gray-600">
                            Fill in your details and allow the AI to generate ATS-friendly
                            points for your summary and job descriptions effortlessly.
                        </p>
                    </div>

                    <div className="block rounded-xl border bg-white border-gray-200 p-8 shadow-xl hover:shadow-lg transition">
                        <Edit className="h-10 w-10 m-auto" />
                        <h2 className="mt-4 text-xl font-bold text-black">Edit Your form</h2>
                        <p className="mt-1 text-sm text-gray-600">
                            Modify your form as per your requirements. Change colors,
                            customize AI-generated data, and tailor it to suit your needs.
                        </p>
                    </div>

                    <div className="block rounded-xl border bg-white border-gray-200 p-8 shadow-xl hover:shadow-lg transition">
                        <Share2 className="h-10 w-10 m-auto" />
                        <h2 className="mt-4 text-xl font-bold text-black">
                            Download & Share Your Resume
                        </h2>
                        <p className="mt-1 text-sm text-gray-600">
                            Download your resume in PDF format and easily share it with others.
                        </p>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <div className="inline-block rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-400">
                        Get Started Today
                    </div>
                </div>
            </section>

            {/* Additional Section 1 */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 mb-4 transition-transform duration-700 hover:scale-110">
                        Why Choose Our Resume Builder?
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Our tool leverages the latest AI technology to tailor your resume to specific job descriptions,
                        ensuring maximum impact and relevance.
                    </p>
                </div>
            </section>

            {/* Additional Section 2 */}
            <section className="py-16 bg-white">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="transition-opacity duration-1000 ease-in opacity-90">
                            <h3 className="text-2xl font-bold mb-2">Optimized for ATS Systems</h3>
                            <p className="text-gray-600">
                                Your resume will be structured and keyword-rich to pass through Applicant Tracking Systems seamlessly.
                            </p>
                        </div>
                        <div className="transition-opacity duration-1000 ease-in opacity-90">
                            <h3 className="text-2xl font-bold mb-2">Instant PDF Downloads</h3>
                            <p className="text-gray-600">
                                Download your resume instantly after editing—no delays, no hassle.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
