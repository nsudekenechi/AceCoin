import { CgMenuGridO } from "react-icons/cg";

export const Input = ({ icon = "", placeholder, length }) => {
  return (
    <div className="border rounded-md h-[100%] flex justify-between  px-5 py-5 items-center">
      <input
        type="text"
        placeholder={placeholder}
        className={`outline-none text-center ${
          icon == "false" ? "w-[100%]" : ""
        } font-bold  placeholder:font-light focus:text-blue-500`}
        maxLength={length}
      />
      {icon == "" && <CgMenuGridO size={25} className="text-black/30" />}
    </div>
  );
};
