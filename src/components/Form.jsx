import "../styles/Form.css";

export default function Form({ handleSubmit, handleEdit }) {
    return (
        <>
            <form action="" onSubmit={handleSubmit}>
                <h1>Application</h1>
                <fieldset>
                    <legend>General Information:</legend>
                    <div>
                        <Input label="Name:" id="name" value="Flan Alflany" />
                    </div>
                    <div>
                        <Input
                            label="Phone Number (123-456-7890 ):"
                            type="tel"
                            id="phone"
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                            value="123-456-7890"
                        />
                    </div>
                    <div>
                        <Input
                            label="Email:"
                            type="email"
                            id="email"
                            value="flan@flany.com"
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Educational Experience:</legend>
                    <div>
                        <Input
                            label="School Name:"
                            id="school-name"
                            value="UOP"
                        />
                    </div>
                    <div>
                        <Input
                            label="Field of study:"
                            id="field"
                            value="Computer Science"
                        />
                    </div>
                    <div>
                        <Input
                            label="Study Date:"
                            type="date"
                            id="study-date"
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Work Experience:</legend>
                    <div>
                        <Input
                            label="Company Name:"
                            id="company-name"
                            value="KFC"
                        />
                    </div>
                    <div>
                        <Input
                            label="Position Title:"
                            id="position-title"
                            value="a big deal"
                        />
                    </div>
                    <div>
                        <Input
                            label="Start Date:"
                            type="date"
                            id="start-date"
                        />
                    </div>
                    <div>
                        <Input label="End Date:" type="date" id="end-date" />
                    </div>
                    <div>
                        <label htmlFor="main-responsibilities">
                            Main Responsibilities:
                            <textarea
                                name="main-responsibilities"
                                rows="5"
                                cols="33"
                                id="main-responsibilities"
                                value="blah blah blah"
                            ></textarea>
                        </label>
                    </div>
                </fieldset>
                <button type="submit">Submit</button>
                <button onClick={handleEdit}>Edit</button>
            </form>
        </>
    );
}

function Input({ label, type = "text", id, pattern, value }) {
    return (
        <div className="input-grid">
            <label htmlFor={id}>{label}</label>
            <input
                type={type}
                name={id}
                id={id}
                pattern={pattern}
                value={value}
                required
            />
        </div>
    );
}
