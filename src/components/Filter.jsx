import React, { useState } from "react";

export default function Filter({ skills,updateT }) {
  const initialVal = skills.map((elem) => {
    return { title: elem, active: false };
  });
  const [list, setList] = useState(initialVal);
  function doUpdate(e, i) {
    list[i].active = e.target.checked;
    setList([...list]);
    updateT(list)
  }
  
  return (
    <div>
      <p>Let`s find teacher for you!</p>
      <div className="checkBoxes">
        {list.length > 0 &&
          list.map((elem, index) => (
            <label key={index}>
              <input type="checkbox" onChange={(e) => doUpdate(e, index)} />

              {elem.title}
            </label>
          ))}
      </div>
    </div>
  );
}
