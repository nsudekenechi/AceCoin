/* eslint-disable react/prop-types */
export const AtmLogo = ({ size }) => {
  return (
    <div className="relative flex ">
      <div
        style={{ width: `${size}px`, height: `${size}px` }}
        className="rounded-full bg-[#E9011A]"
      ></div>
      <div
        style={{ width: `${size}px`, height: `${size}px` }}
        className={`rounded-full bg-yellow-500/80 relative -left-3`}
      ></div>
    </div>
  );
};
