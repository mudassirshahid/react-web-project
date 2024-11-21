import React, { useState } from "react";

export default function CheckBoxList() {
  const [data, setData] = useState(["A", "B", "C"]);

  const handleDelete = (labelToRemove) => {
    setData((prevData) => prevData.filter((label) => label !== labelToRemove));
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      {data.map((label) => (
        <CheckBoxItem key={label} label={label} onDelete={() => handleDelete(label)} />
      ))}
    </div>
  );
}

function CheckBoxItem({ label, onDelete }) {
  const [checked, setChecked] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        margin: "5px 0",
      }}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
      <p style={{ margin: 0 }}>{label}</p>
      {checked && (
        <button onClick={onDelete} style={{ cursor: "pointer" }}>
          Delete
        </button>
      )}
    </div>
  );
}
