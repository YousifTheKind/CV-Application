import "../styles/Form.css";

export default function Form() {
    return (
        <>
            <form action="">
                <fieldset>
                    <legend>General Information:</legend>
                    <div>
                        <Input label="Name:" type="text" id="name" />
                    </div>
                    <div>
                        <Input
                            label="Phone Number (123-456-7890 ):"
                            type="tel"
                            id="phone"
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        />
                    </div>
                    <div>
                        <Input label="Email:" type="email" id="email" />
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Educational Experience:</legend>
                    <div>
                        <Input
                            label="School Name:"
                            type="text"
                            id="school-name"
                        />
                    </div>
                    <div>
                        <Input label="Field of study:" type="text" id="field" />
                    </div>
                    <div>
                        <Input
                            label="Date of study:"
                            type="date"
                            id="date-of-study"
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Work Experience:</legend>
                    <div>
                        <Input
                            label="Company Name:"
                            type="text"
                            id="company-name"
                        />
                    </div>
                    <div>
                        <Input
                            label="Position Title:"
                            type="text"
                            id="position-title"
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
                </fieldset>
            </form>
        </>
    );
}

function Input({ label, type, id, pattern }) {
    return (
        <label htmlFor={id}>
            {label}
            <input type={type} name={id} id={id} pattern={pattern} required />
        </label>
    );
}
