import React from "react";
import "antd/dist/antd.css";
import "../styles/radio.css";

function Radio({ ios, data }) {
  return (
    <form>
      <div className="list-group">
        {data.map((item) => (
          <>
            <input
              type={`${ios ? "checkbox" : "radio"}`}
              name={`${ios ? "CheckBoxInputName" :"RadioInputName"}`}
              defaultValue={item.title}
              id={item.title}
            />
            <label className="list-group-item" htmlFor={item.title}>
              {item.title}
            </label>
          </>
        ))}
      </div>
    </form>
  );
}

export default Radio;
