import React from "react";

const TableRows = ({ timestamp, _raw }) => {
  return (
    <div className=" w-full h-14 bg-[#292929] flex justify-start items-center mt-1 text-slate-200 px-2 rounded-md ">
      <div className="  flex flex-col ">
        <p className="text-xs">timestamp</p>
        <p className="text-sm">{timestamp} </p>
      </div>
      <div className="ml-8 overflow-scroll">
        <p className="text-xs">_raw</p>
        <p className="text-sm whitespace-nowrap ">{_raw} </p>
      </div>
    </div>
  );
};

export default TableRows;
