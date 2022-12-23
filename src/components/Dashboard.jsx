import React from "react";
import Filter from "./Filter";
import Teacher from "./Teacher";

export default function Dashboard({ teachers, skills, updateT, deleteResult }) {
  return (
    <div>
      <h2>Dashboard</h2>
      <Filter skills={skills} updateT={updateT} />
      {teachers.length > 0
        ? teachers.map((teacher, index) => <Teacher key={index} {...teacher} />)
        : "No teacher is available, add teacher"}
      <button onClick={deleteResult}>Clear All Teachers</button>
    </div>
  );
}
