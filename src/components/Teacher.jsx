import React from "react";

export default function Teacher({ name, age, skills }) {

  return (
    <div className="teacher">
      <h2>
        {name}, {age} years old
      </h2>
      <p>{skills.join(",")}</p>
    </div>
  );
}
