import React, { useEffect, useState } from "react";
import AddTeacher from "./components/AddTeacher";
import Dashboard from "./components/Dashboard";
import SearchSkills from "./Lib";
import "./App.css";
export default function App() {
  const [teachers, setTeachers] = useState([]);
  const [result, setResult] = useState([]);
  function addT(teacher) {
    setTeachers([...teachers, teacher]);
  }
  useEffect(() => {
    fetch("teachers.json")
      .then((resp) => resp.json())
      .then((res) => {
        setTeachers(res.data);
        setResult(res.data);
      });
  }, []);
  function deleteResult() {
    setResult([]);
  }
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Angular",
    "Node.js",
    "C#",
    "OOP",
    "WPF",
    "SQL",
    "Algoritms",
    "Phyton",
    "Django",
    "Java",
    "C++",
    "PHP",
  ];
  const updateList = (list) => {
    list = list.filter((elem) => elem.active).map((elem) => elem.title);
    let data = SearchSkills(teachers, list);
    setResult(data);
  };
  return (
    <div className="App">
      <h1>
        Teaching App!{" "}
        {teachers.length > 0
          ? teachers.length +
            `${teachers.length > 1 ? " teachers are" : " teacher is"} here`
          : null}
      </h1>
      <div className="content">
        <AddTeacher skills={skills} addT={addT} teachers={teachers} />
        <Dashboard teachers={result} skills={skills} updateT={updateList} deleteResult={deleteResult} />
      </div>
    </div>
  );
}
