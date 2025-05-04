/* eslint-disable react/prop-types */
const ExperiencePreview = ({ resumeInfo }) => {
    const experience = resumeInfo?.experience || [];

    if (experience.length === 0) {
        return (
            <div className="text-center text-gray-500 text-sm font-medium py-4">
                No job experience data added.
            </div>
        );
    }

    return (
        <div className="my-6">
            <h2 className="text-center font-bold text-sm mb-2">
                Professional Experience
            </h2>
            <hr
                className="border-[1.5px] my-2"
                style={{ borderColor: resumeInfo?.themeColor || "rgb(107 114 128)" }}
            />
            {experience.map((exp, index) => {
                const city = exp.city || exp.location?.city;
                const state = exp.state || exp.location?.state;
                const startDate = exp.startDate || exp.duration?.startDate;
                const endDate = exp.endDate || exp.duration?.endDate;
                return (
                    <div key={index} className="my-5">
                        <h2 className="text-sm font-bold">
                            {exp.title || "Position title not provided"}
                        </h2>
                        <h2 className="text-xs flex justify-between">
                            <span>
                                {exp.companyName || "Company not specified"}
                                {city ? `, ${city}` : ""}
                                {state ? `, ${state}` : ""}
                            </span>
                            <span>
                                {startDate || "Start date not provided"} to {endDate || "End date not provided"}
                            </span>
                        </h2>
                        <p className="text-xs my-2 text-justify">
                            {exp.workSummery || "No work summary provided."}
                        </p>
                    </div>
                );
            })}
        </div>
    );
};

export default ExperiencePreview;