const HeaderTabs = ({ tabName, id, closeTab, showTab, selected }) => {
  return (
    <div
      className={`w-96 ml-1 h-4/6 group flex justify-start items-center min-w-[6rem] relative pl-2 text-slate-200 rounded cursor-pointer ${
        selected ? "bg-[#0663e5]" : "bg-[#292929]"
      }`}
      onClick={() => showTab(id)}
    >
      <span className=" font-semibold">{tabName}</span>
      <div
        className="group-hover:flex hidden absolute right-2 cursor-pointer font-extrabold z-10"
        onClick={(e) => {
          closeTab(id);
          e.stopPropagation();
        }}
      >
        X
      </div>
    </div>
  );
};

export default HeaderTabs;
