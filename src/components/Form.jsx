import "../styles/Form.css";
import Input from "./Input";
export default function Form({
    handleSubmit,
    handleEdit,
    addChild,
    eduChildren,
    workChildren,
}) {
    return (
        <>
            <form action="" onSubmit={handleSubmit}>
                <fieldset className="genInfoFieldset">
                    <legend>General Information:</legend>
                    <div>
                        <Input label="Full Name:" id="name" />
                    </div>
                    <div>
                        <Input
                            label="Phone Number (Ex: 123-456-7890 ):"
                            type="tel"
                            id="phone"
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        />
                    </div>
                    <div>
                        <Input label="Email:" type="email" id="email" />
                    </div>
                </fieldset>
                <fieldset className="eduFieldset">
                    <legend>Educational Experience:</legend>

                    {eduChildren}
                    <button id="addEdu" onClick={addChild}>
                        +
                    </button>
                </fieldset>
                <fieldset className="workFieldset">
                    <legend>Work Experience:</legend>
                    {workChildren}
                    <button id="addWork" onClick={addChild}>
                        +
                    </button>
                </fieldset>

                <button type="submit">Submit</button>
                <button onClick={handleEdit}>Edit</button>
            </form>
        </>
    );
}
