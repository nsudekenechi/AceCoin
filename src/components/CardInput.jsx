export const CardInput = () => {
  return (
    <>
      <input
        type="text"
        className="outline-none w-[50px] placeholder:text-black/40"
        placeholder="2412"
        maxLength={4}
      />
      <div className="h-0.5 w-1 bg-black/60"></div>
    </>
  );
};
