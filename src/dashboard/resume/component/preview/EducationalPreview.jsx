/* eslint-disable react/prop-types */
const EducationalPreview = ({ resumeInfo }) => {
    const education = resumeInfo?.education || [];

    if (education.length === 0) {
        return (
            <div className="text-center text-gray-500 text-sm font-medium py-4">
                No educational data added.
            </div>
        );
    }

    return (
        <div className="my-6">
            <h2 className="text-center font-bold text-sm mb-2">
                Education
            </h2>
            <hr
                className="border-[1.5px] my-2"
                style={{ borderColor: resumeInfo?.themeColor || "rgb(107 114 128)" }}
            />
            {education.map((item, index) => {
                const city = item.city;
                const state = item.state;
                return (
                    <div key={index} className="my-5">
                        <h2 className="text-sm font-bold">
                            {item.school || "University Not Specified"}
                        </h2>
                        {(city || state) && (
                            <h3 className="text-xs text-gray-700">
                                {city}{city && state ? `, ${state}` : state}
                            </h3>
                        )}
                        <h2 className="text-xs flex justify-between">
                            {item.degree || "Degree not specified"} in {item.fieldOfStudy || "Field not specified"}
                            <span>{item.graduationDate || "Date not specified"}</span>
                        </h2>
                        <p className="text-xs my-2 text-justify">
                            {item.description || "No description provided."}
                        </p>
                    </div>
                );
            })}
        </div>
    );
};

export default EducationalPreview;