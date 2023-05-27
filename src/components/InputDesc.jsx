/* eslint-disable react/prop-types */

export const InputDesc = ({ title, desc }) => {
  return (
    <div className="flex  flex-wrap flex-col gap-y-1">
      <h1 className="font-bold  text-lg">{title}</h1>
      <p className="  text-sm  text-black/60 md:text-black/30">{desc}</p>
    </div>
  );
};
