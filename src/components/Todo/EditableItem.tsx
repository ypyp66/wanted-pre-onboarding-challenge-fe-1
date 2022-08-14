import React from "react";

type Props = {
  mode: "read" | "update";
  value: string;
  name: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function EditableItem({ mode, value, name, handleChange }: Props) {
  if (mode === "read") {
    return <span>{value}</span>;
  }

  if (mode === "update")
    return (
      <span>
        <input
          placeholder={name}
          name={name}
          value={value}
          onChange={handleChange}
        />
      </span>
    );

  return <></>;
}

export default EditableItem;
