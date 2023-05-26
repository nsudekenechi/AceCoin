/* eslint-disable react/prop-types */

export const CardInput = ({ placeholder, last, setColor }) => {
  // Displaying hyphen if input is not the lastone
  last = last != true ? "" : last;
  const handleColor = () => {
    setColor("blue-500");
  };
  const resetColor = () => {
    setColor("black/10");
  };
  return (
    <>
      <input
        type="text"
        className="outline-none  duration-1000 w-[50px] placeholder:text-black/40 placeholder:font-light  focus:placeholder:text-blue-500/60  focus:pl-1  focus:text-blue-500 font-bold"
        placeholder={placeholder}
        maxLength={4}
        onFocus={handleColor}
        onBlur={resetColor}
      />
      {last == "" && <div className="h-0.5 w-1 bg-black/60"></div>}
    </>
  );
};
