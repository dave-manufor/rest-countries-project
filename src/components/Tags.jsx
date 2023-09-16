const Tags = ({ children }) => {
  return (
    <div className="flex gap-2 justify-end sm:justify-start sm:items-start sm:flex-wrap">
      {children}
    </div>
  );
};

export default Tags;
