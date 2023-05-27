/* eslint-disable react/prop-types */
import { useState } from "react";
import { CgMenuGridO } from "react-icons/cg";

export const Input = ({ icon, placeholder, length, type }) => {
  icon = icon == undefined ? "" : icon;
  type = type == undefined ? "number" : type;
  const [color, setColor] = useState("black/10");

  const handleColor = () => {
    setColor("blue-500");
  };
  const resetColor = () => {
    setColor("black/10");
  };
  return (
    <div
      className={`duration-1000 border ${
        "border-" + color
      } rounded-md h-[100%] flex justify-between  md:text-xl    px-5  py-4  md:py-5 lg:py-3 items-center`}
    >
      {console.log(color)}
      <input
        type={type}
        placeholder={placeholder}
        className={`outline-none  duration-1000 ${
          icon == "false" ? "w-[100%]" : ""
        } font-bold text-[#1F2953]  placeholder:font-light focus:placeholder:text-blue-500/60  focus:pl-2  focus:text-blue-500`}
        maxLength={length}
        onFocus={handleColor}
        onBlur={resetColor}
      />
      {icon == "" && <CgMenuGridO size={25} className="text-black/30" />}
    </div>
  );
};
