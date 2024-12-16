import Input from "./Input";
export default function Edu({ entryNumber }) {
    return (
        <div className="edu" entry-number={entryNumber}>
            <div>
                <Input label="School Name:" id="school-name" />
            </div>
            <div>
                <Input label="Field of study:" id="field" />
            </div>
            <div>
                <Input
                    label="Graduation Date:"
                    type="month"
                    id="graduation-date"
                />
            </div>
        </div>
    );
}
