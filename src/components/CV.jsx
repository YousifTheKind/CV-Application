import "../styles/CV.css";
export default function CV({ cvData, display }) {
    if (!display) {
        return (
            <div className="cv">
                <h3>Submit the form to generate the CV</h3>
                <h2>Name</h2>
                <div style={{ textAlign: "left" }}>
                    <h3>Education</h3>
                    <hr />
                    <h4>School Name</h4>
                    <div className="indent">
                        <i>
                            <p>Field of study</p>
                            <p>Graduation date</p>
                        </i>
                    </div>
                    <h3>Work Experience</h3>
                    <hr />
                    <h4>Company Name</h4>
                    <div className="indent">
                        <i>
                            <p>Position Title</p>
                            <p>Start & End Date</p>
                        </i>
                        <p>Main Responsibilities</p>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className="cv">
            <h2>{cvData.genInfo.name}</h2>
            <div>
                <span>{cvData.genInfo.phone}</span>
                <span> {cvData.genInfo.email}</span>
            </div>
            <div style={{ textAlign: "left" }}>
                <h3>Education</h3>
                <hr />
                <div>
                    {cvData.edu.map((entry) => {
                        return (
                            <>
                                <h4>{entry["school-name"]}</h4>
                                <div className="indent">
                                    <i>
                                        <p>{entry.field}</p>
                                        <p>{entry["graduation-date"]}</p>
                                    </i>
                                </div>
                            </>
                        );
                    })}
                </div>
                <h3>Work Experience</h3>
                <hr />

                <div>
                    {cvData.work.map((entry) => {
                        return (
                            <>
                                {" "}
                                <h4>{entry["company-name"]}</h4>
                                <div className="indent">
                                    <i>
                                        <p>{entry["position-title"]} </p>
                                        <span>
                                            {
                                                entry[
                                                    `${Object.keys(
                                                        entry
                                                    ).filter((key) =>
                                                        key.startsWith(
                                                            "start-date"
                                                        )
                                                    )}`
                                                ]
                                            }{" "}
                                        </span>
                                        -
                                        <span>
                                            {" "}
                                            {
                                                entry[
                                                    `${Object.keys(
                                                        entry
                                                    ).filter((key) =>
                                                        key.startsWith(
                                                            "end-date"
                                                        )
                                                    )}`
                                                ]
                                            }
                                        </span>
                                    </i>
                                    <p>
                                        {entry["main-responsibilities"].map(
                                            (item) => {
                                                return (
                                                    <>
                                                        {item}
                                                        <br />
                                                    </>
                                                );
                                            }
                                        )}
                                    </p>
                                </div>
                            </>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
