import { events } from "../constants/events";
import { useState, useEffect } from "react";
import SiderTabs from "../Components/SiderTabs";
import HeaderTabs from "../Components/HeaderTabs";
import TableRows from "../Components/TableRows";

const LandingPage = () => {
  const [state, setState] = useState({
    openedTabs: [],
    activeTab: -1,
    activeTabData: [],
  });

  const openTab = (id) => {
    // this functioin opens the tab whose id is recieved in argument

    if (state.openedTabs.includes(id)) return; // return if the tab is already opened

    if (state.openedTabs.length === 0) {
      showTab(id); // display the content of tab automatically if this is the first opened tab
    }

    showTab(id); // display the content of tab which is being opened
    setState((prev) => ({
      ...prev,
      openedTabs: [...prev.openedTabs, id],
    }));
  };

  const closeTab = (id) => {
    // This function closes the tab whose id is recieved in argument

    //following block of else-if changes the active tab to the next tab or previous tab of the tab being closed
    let tabId = 0;
    if (state.openedTabs[state.openedTabs.indexOf(id) + 1]) {
      tabId = state.openedTabs[state.openedTabs.indexOf(id) + 1]; // id of the next tab to the tab being closed
      showTab(tabId);
    } else if (state.openedTabs[state.openedTabs.indexOf(id) - 1]) {
      tabId = state.openedTabs[state.openedTabs.indexOf(id) - 1]; // id of the previous tab to the tab being closed
      showTab(tabId);
    } else {
      setState((prev) => ({
        ...prev,
        activeTab: -1,
      }));
    }

    setState((prev) => ({
      ...prev,
      activeTab: tabId,
      openedTabs: prev.openedTabs.filter((e) => e !== id),
    }));
  };

  const showTab = (id) => {
    // This function shows the table of currently active tab to the screen

    setState((prev) => ({
      ...prev,
      activeTab: id,
      activeTabData: [
        ...events.find((elem) => {
          return elem.id === id;
        }).content,
      ],
      openedTabs: [...prev.openedTabs],
    }));
  };

  return (
    <section className="w-screen h-screen bg-black flex justify-center items-center">
      <div className=" sm:w-11/12 w-full h-[90%] flex flex-col justify-start items-start rounded-lg ring-white">
        <div className="w-full h-12 bg-[#141414] grid grid-cols-12 mb-1">
          <div className=" sm:col-span-3 col-span-5 flex justify-center items-center text-slate-100">
            Events Viewer
          </div>
          <div className=" sm:col-span-9 col-span-7 flex justify-start items-center px-2 overflow-scroll">
            {state.openedTabs.map((id) => {
              return (
                <HeaderTabs
                  tabName={
                    events.find((elem) => {
                      return elem.id === id;
                    }).name
                  }
                  id={id}
                  selected={
                    state.activeTab ===
                    events.find((elem) => {
                      return elem.id === id;
                    }).id
                  }
                  key={id}
                  closeTab={closeTab}
                  showTab={showTab}
                />
              );
            })}
          </div>
        </div>
        <div className="w-full h-[calc(100%-3rem)] bg-[#0d0d0d] grid grid-cols-12">
          <div className=" h-full sm:col-span-3 col-span-5 text-center overflow-scroll p-4">
            {events.map((each) => {
              return (
                <SiderTabs
                  tabName={each.name}
                  id={each.id}
                  key={each.id}
                  openTab={openTab}
                  opened={state.openedTabs.includes(each.id)}
                />
              );
            })}
          </div>
          <div className=" sm:col-span-9 col-span-7 bg-black p-4 overflow-scroll ">
            {state.openedTabs.length !== 0 ? (
              state.activeTabData.map((each, i) => (
                <TableRows
                  timestamp={each.timestamp}
                  _raw={each._raw}
                  key={i}
                />
              ))
            ) : (
              <p className="text-slate-200">No Event Selected</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
// export {openTab, closeTab}
