import React from "react";

const Option = ({
  index,
  selected,
  setselected,
  icon,
  text,
}: {
  index: number;
  selected: number;
  setselected: Function;
  icon: React.ReactNode;
  text: string;
}) => {
  return (
    <button
      onClick={() => {
        setselected(index);
      }}
    >
      <div
        className={`flex items-center bg-slate-900 p-5 ${
          selected === index ? "border-2" : ""
        } rounded-3xl`}
      >
        <div>{icon}</div>
        <div className="ml-2">
          <p className="text-[2rem]">{text}</p>
        </div>
      </div>
    </button>
  );
};

export default Option;
