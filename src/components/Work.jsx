import Input from "./Input";
export default function Work() {
    function compare() {
        const startValue = new Date(
            document.getElementById("start-date").value
        ).getTime();
        const endValue = new Date(
            document.getElementById("end-date").value
        ).getTime();

        const endDateElement = document.getElementById("end-date");

        if (startValue > endValue) {
            endDateElement.setCustomValidity(
                "End date must be after start date"
            );
        } else endDateElement.setCustomValidity("");
    }

    return (
        <div className="work">
            <div>
                <Input label="Company Name:" id="company-name" />
            </div>
            <div>
                <Input label="Position Title:" id="position-title" />
            </div>
            <div>
                <Input label="Start Date:" type="month" id="start-date" />
            </div>
            <div>
                <Input
                    label="End Date:"
                    type="month"
                    id="end-date"
                    onChange={compare}
                />
            </div>
            <div>
                <label htmlFor="main-responsibilities">
                    Main Responsibilities:
                    <textarea
                        name="main-responsibilities"
                        rows="5"
                        cols="33"
                        id="main-responsibilities"
                    ></textarea>
                </label>
            </div>
        </div>
    );
}
