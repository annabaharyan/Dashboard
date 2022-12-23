import React, { useState } from "react";

export default function AddTeacher({ skills, addT, teachers }) {
  const initialValue = { name: "", age: "", skills: [] };
  const [teacher, setTeacher] = useState(initialValue);
  const [err, setErr] = useState("");
  function addTeacher(e) {
    e.preventDefault();
    if (!teacher.name.trim() || !teacher.age.trim()) {
      setErr("Fill all fields!");
    } else if (!Number.isInteger(+teacher.age)) {
      setErr("Age must be a number");
    } else if (teacher.skills.length <= 0) {
      setErr("Teacher should have minimum one skill");
    } else if (teachers.find(t=>t.name===teacher.name)) {
      setErr("This teacher exists, change name");
    } else {
      setErr("");
      addT(teacher);
      setTeacher(initialValue);
    }
  }
  function addSkill(skill) {
    let mySkills = teacher.skills;
    if (!mySkills.includes(skill)) {
      mySkills.push(skill);
    }
    setTeacher({ ...teacher, skills: mySkills });
  }

  return (
    <div>
      <h1>Add Teacher</h1>
      <p style={{ color: "red" }}>{err}</p>
      <form className="myForm" onSubmit={addTeacher}>
        <label>name</label>
        <input
          type="text"
          value={teacher.name}
          onChange={(e) => setTeacher({ ...teacher, name: e.target.value })}
        />
        <label>age</label>
        <input
          type="text"
          value={teacher.age}
          onChange={(e) => setTeacher({ ...teacher, age: e.target.value })}
        />
        <label>Skills</label>
        <select onChange={(e) => addSkill(e.target.value)}>
          {skills.map((skill, index) => (
            <option key={index}>{skill}</option>
          ))}
        </select>
        <button>Save</button>
      </form>
      <ul>
        {teacher.skills.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
