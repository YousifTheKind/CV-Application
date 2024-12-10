import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import CV from "./components/CV";
function App() {
    const [cvData, setCVData] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    function handleSubmit(e) {
        e.preventDefault();
        const newCVData = {};
        for (const element of e.target.elements) {
            if (element.name) {
                newCVData[element.name] = element.value;
            }
        }
        setCVData({ ...newCVData });
        setIsSubmitted(true);
    }
    function handleEdit(e) {
        e.preventDefault();
        setIsSubmitted(false);
    }
    document
        .querySelectorAll("fieldset")
        .forEach((field) => (field.disabled = isSubmitted));

    return (
        <>
            <Form handleEdit={handleEdit} handleSubmit={handleSubmit} />
            <CV cvData={cvData} />
        </>
    );
}

export default App;
