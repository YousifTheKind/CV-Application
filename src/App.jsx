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
        e.target.reset();
    }
    function handleEdit(e) {
        e.preventDefault();
        for (const element of e.target.parentNode.elements) {
            if (cvData[element.name]) {
                element.value = cvData[element.name];
            }
        }
        setIsSubmitted(false);
    }
    document
        .querySelectorAll("fieldset")
        .forEach((field) => (field.disabled = isSubmitted));

    return (
        <>
            <Form handleEdit={handleEdit} handleSubmit={handleSubmit} />
            <CV cvData={cvData} display={isSubmitted} />
        </>
    );
}

export default App;
