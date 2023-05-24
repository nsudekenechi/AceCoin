/* eslint-disable react/prop-types */
export const CardInput = ({ placeholder, last = "" }) => {
  return (
    <>
      <input
        type="text"
        className="outline-none w-[50px] placeholder:text-black/40 placeholder:font-light font-bold"
        placeholder={placeholder}
        maxLength={4}
      />
      {last == "" && <div className="h-0.5 w-1 bg-black/60"></div>}
    </>
  );
};
