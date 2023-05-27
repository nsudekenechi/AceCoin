import { VscVerifiedFilled } from "react-icons/vsc";
import { AtmLogo } from "./AtmLogo";
import { CardInput } from "./CardInput";
import { useState } from "react";

export const CardNumber = () => {
  const [color, setColor] = useState("black/10");

  return (
    <div
      className={`duration-1000 border ${
        "border-" + color
      } rounded-md h-[100%] flex justify-between  p-5 items-center`}
    >
      <div className="flex items-center gap-x-2 md:gap-x-5">
        <div className="">
          <AtmLogo size={20} left={5} />
        </div>
        <CardInput placeholder={"2365"} setColor={setColor} />
        <CardInput placeholder={"7512"} setColor={setColor} />
        <CardInput placeholder={"3412"} setColor={setColor} />
        <CardInput placeholder={"3456"} setColor={setColor} last={true} />
      </div>
      <div className="">
        <VscVerifiedFilled size={25} className="text-blue-500" />
      </div>
    </div>
  );
};
