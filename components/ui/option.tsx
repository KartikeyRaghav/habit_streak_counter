import React from "react";

const Option = ({
  index,
  selected,
  setselected,
  icon,
  text,
  classChange,
  setactive,
}: {
  index: number;
  selected: number;
  setselected: Function;
  icon: React.ReactNode;
  text: string;
  classChange: boolean;
  setactive: Function;
}) => {
  return (
    <button
      onClick={() => {
        setselected(index);
        if (classChange) {
          setactive(index);
        }
      }}
    >
      <div
        className={`flex items-center bg-slate-900 p-3 md:p-5 ${
          selected === index ? "border-2" : ""
        } rounded-xl md:rounded-3xl`}
      >
        <div>{icon}</div>
        <div className="ml-2">
          <p className="md:text-[2rem]">{text}</p>
        </div>
      </div>
    </button>
  );
};

export default Option;
