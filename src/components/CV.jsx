import "../styles/CV.css";
export default function CV({ cvData, display }) {
    if (!display) {
        return (
            <div className="cv">
                <h1>CV</h1>
            </div>
        );
    }
    return (
        <div className="cv">
            <h1>CV</h1>
            <h2>{cvData.name}</h2>
            <div>
                <span>{cvData.phone}</span>
                <span> {cvData.email}</span>
            </div>
            <div style={{ textAlign: "left" }}>
                <h3>Education:</h3>
                <div>
                    <h4>{cvData["school-name"]}</h4>
                    <div>
                        <p>{cvData.field}</p>
                        <p>{cvData["study-date"]}</p>
                    </div>
                </div>
                <h3>Work Experience:</h3>
                <h4>{cvData["company-name"]}</h4>
                <div>
                    <span>{cvData["position-title"]} </span>
                    <span>{cvData["start-date"]} </span>
                    <span>{cvData["end-date"]}</span>
                </div>
                <h4>{cvData["main-responsibilities"]}</h4>
            </div>
        </div>
    );
}
