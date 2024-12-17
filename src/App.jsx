import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import CV from "./components/CV";
import Edu from "./components/Edu";
import Work from "./components/Work";
function App() {
    const [cvData, setCVData] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [eduChildren, setEduChildren] = useState([<Edu key={0} />]);
    const [workChildren, setWorkChildren] = useState([<Work key={0} id={0} />]);

    function handleSubmit(e) {
        e.preventDefault();
        const newCVData = {
            genInfo: {},
            edu: [],
            work: [],
        };
        const eduEntries = document.querySelectorAll(".edu");
        const workEntries = document.querySelectorAll(".work");
        const genInfoEntry = document.querySelector(".genInfoFieldset");
        function createEntryObject(entry) {
            const entryObject = {};
            const inputs = entry.querySelectorAll("input");

            inputs.forEach((input) => (entryObject[input.name] = input.value));
            if (entry.className === "work") {
                const mainResponsibilitiesELement = entry.querySelector(
                    "#main-responsibilities"
                );
                console.log(mainResponsibilitiesELement.value);

                entryObject[mainResponsibilitiesELement.id] =
                    mainResponsibilitiesELement.value.split("\n");
            }
            return entryObject;
        }
        eduEntries.forEach((entry) => {
            newCVData.edu.push(createEntryObject(entry));
        });
        workEntries.forEach((entry) => {
            newCVData.work.push(createEntryObject(entry));
        });
        genInfoEntry
            .querySelectorAll("input")
            .forEach((input) => (newCVData.genInfo[input.name] = input.value));
        setCVData({ ...newCVData });
        setIsSubmitted(true);
        // e.target.reset();
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
            setEduChildren((eduChildren) => [
                ...eduChildren,
                <Edu key={eduChildren.length} />,
            ]);
        }

        if (e.target.id === "addWork") {
            setWorkChildren((workChildren) => [
                ...workChildren,
                <Work key={workChildren.length} id={eduChildren.length} />,
            ]);
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
