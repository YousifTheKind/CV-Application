import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import CV from "./components/CV";
import Edu from "./components/Edu";
import Work from "./components/Work";
function App() {
    const [cvData, setCVData] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [childCount, setChildCount] = useState({
        eduChildCount: 1,
        workChildCount: 1,
    });
    const eduChildren = [];
    const workChildren = [];

    function handleSubmit(e) {
        e.preventDefault();
        const newCVData = {
            genInfo: {},
            edu: [],
            work: [],
        };

        for (const element of e.target.elements) {
            if (element.className === "genInfoFieldset") {
                for (const field of element.elements) {
                    if (field.name) {
                        newCVData.genInfo[field.name] = field.value;
                    }
                }
            }
            if (element.className === "eduFieldset") {
                const entryObject = {};

                for (const field of element.elements) {
                    if (field.name) {
                        entryObject[field.name] = field.value;
                    }
                }
                newCVData.edu.push(entryObject);
            }
            if (element.className === "workFieldset") {
                for (const field of element.elements) {
                    if (field.name) {
                        newCVData.work[field.name] = field.value;
                    }
                }
            }
        }
        setCVData({ ...newCVData });
        setIsSubmitted(true);
        e.target.reset();
    }
    console.log(cvData);

    function handleEdit(e) {
        e.preventDefault();
        for (const element of e.target.parentNode.elements) {
            if (cvData[element.name]) {
                element.value = cvData[element.name];
            }
        }
        setIsSubmitted(false);
    }

    function addChild(e) {
        e.preventDefault();
        if (e.target.id === "addEdu") {
            setChildCount({
                ...childCount,
                eduChildCount: childCount.eduChildCount + 1,
            });
        }
        if (e.target.id === "addWork") {
            setChildCount({
                ...childCount,
                workChildCount: childCount.workChildCount + 1,
            });
        }
    }

    for (let i = 0; i < childCount.eduChildCount; i++) {
        if (childCount.eduChildCount < 10) {
            eduChildren.push(<Edu entryNumber={childCount.eduChildCount} />);
        }
    }
    for (let i = 0; i < childCount.workChildCount; i++) {
        if (childCount.workChildCount < 10) {
            workChildren.push(<Work />);
        }
    }
    document
        .querySelectorAll("fieldset")
        .forEach((field) => (field.disabled = isSubmitted));
    return (
        <>
            <Form
                handleEdit={handleEdit}
                handleSubmit={handleSubmit}
                addChild={addChild}
                eduChildren={eduChildren}
                workChildren={workChildren}
            ></Form>
            <CV cvData={cvData} display={isSubmitted} />
        </>
    );
}

export default App;
