export const InputDesc = ({ title, desc }) => {
  return (
    <div className="flex flex-col gap-y-1">
      <h1 className="font-bold">{title}</h1>
      <p className="text-sm text-black/30">{desc}</p>
    </div>
  );
};
