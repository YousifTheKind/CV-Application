import Input from "./Input";
export default function Work({ id }) {
    function compare() {
        console.log(`#start-date-${id}`);

        console.log(document.querySelector(`#start-date-${id}`));

        const startValue = new Date(
            document.querySelector(`#start-date-${id}`).value
        ).getTime();
        const endValue = new Date(
            document.querySelector(`#end-date-${id}`).value
        ).getTime();

        const endDateElement = document.querySelector(`#end-date-${id}`);

        if (startValue >= endValue) {
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
                <Input
                    label="Start Date:"
                    type="month"
                    id={`start-date-${id}`}
                />
            </div>
            <div>
                <Input
                    label="End Date:"
                    type="month"
                    id={`end-date-${id}`}
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
