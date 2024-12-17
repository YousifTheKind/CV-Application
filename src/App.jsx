import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import CV from "./components/CV";
import Edu from "./components/Edu";
import Work from "./components/Work";
function App() {
    const [cvData, setCVData] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    // const [childCount, setChildCount] = useState({
    //     eduChildCount: 1,
    //     workChildCount: 1,
    // });
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
        eduEntries.forEach((entry) => {
            const entryObject = {};
            const inputs = entry.querySelectorAll("input");
            inputs.forEach((input) => (entryObject[input.name] = input.value));
            newCVData.edu.push(entryObject);
        });
        workEntries.forEach((entry) => {
            const entryObject = {};
            const inputs = entry.querySelectorAll("input");
            inputs.forEach((input) => (entryObject[input.name] = input.value));
            newCVData.work.push(entryObject);
        });
        for (const element of e.target.elements) {
            if (element.className === "genInfoFieldset") {
                for (const field of element.elements) {
                    if (field.name) {
                        newCVData.genInfo[field.name] = field.value;
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

    // for (let i = 0; i < childCount.eduChildCount; i++) {
    //     if (childCount.eduChildCount < 10) {
    //         setEduChildren((eduChildren) => [
    //             ...eduChildren,
    //             <Edu
    //                 key={crypto.randomUUID()}
    //                 entryNumber={childCount.eduChildCount}
    //             />,
    //         ]);
    //         eduChildren.push(<Edu entryNumber={childCount.eduChildCount} />);
    //     }
    // }
    // for (let i = 0; i < childCount.workChildCount; i++) {
    //     if (childCount.workChildCount < 10) {
    //         workChildren.push(<Work />);
    //     }
    // }
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
