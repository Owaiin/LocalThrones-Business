import React from "react";

export default function FilterBadge(props: {
  isSelected?: boolean;
  text: string;
  onClick?: React.MouseEventHandler;
}) {
  return (
    <>
      <div
        onClick={props.onClick}
        className={`badge p-4  badge-outline ${
          props.isSelected && "bg-primary text-white"
        }`}
      >
        {props.text}
      </div>
    </>
  );
}
