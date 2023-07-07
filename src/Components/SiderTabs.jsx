const SiderTabs = ({ tabName, id, openTab, opened }) => {
  return (
    <div
      className={`w-full py-6 bg-[#292929] text-slate-200 mb-1 rounded-md transition-all ${opened ? ' opacity-60' : 'hover:scale-105 active:scale-95'}`}
      onClick={() => openTab(id)}
    >
      {tabName}
    </div>
  );
};

export default SiderTabs;
