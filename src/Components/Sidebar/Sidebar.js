import React, { useState } from "react";
import { connect } from "react-redux";

import SidebarItem from "../SidebarItem/SidebarItem";
import Uploader from "../UploadContainer/Uploader";

import { selectJob } from "../../Actions/action";

import "./Sidebar.scss";

const Sidebar = ({ jobs,selectJob }) => {
  const [selectItem, setselectItem] = useState(jobs[0]);

  // const setUploadedJob = (element) => {
  //   console.log("call set upload");
  //   console.log("element:", element);
  //   const newData = data.map((elt) =>
  //     elt.label === element.label
  //       ? { ...elt, show: true, applied: true }
  //       : { ...elt, show: false }
  //   );
  //   setData(newData);
  // };

  return (
    <div className="SidebarPage-sidebarContainer">
      <div className="SidebarPage-sidebarContainer-sidebar">
        {jobs.map((menuItem) => (
          <span
            onClick={() => {
              selectJob(menuItem);
              setselectItem(menuItem);
            }}
            className="SidebarPage-sidebarContainer-sidebar-sidebarDisplay"
            key={menuItem.label}
          >
            <SidebarItem show={menuItem} />
            {menuItem.show && (
              <span className="SidebarPage-sidebarContainer-sidebar-sidebarDisplayMobile">
                <Uploader
                  className="SidebarPage-sidebarContainer-sidebar-sidebarDisplayMobile"
                  selectItem={selectItem}
                  setUploadedJob={console.log("hello")}
                />
              </span>
            )}
          </span>
        ))}
      </div>
      <span className="SidebarPage-sidebarContainer-sidebar-sidebarDisplayDesktop">
        <Uploader selectItem={selectItem} />
      </span>
    </div>
  );
};

const mapDispatchToProps = (Dispatch) => {
  return {
    selectJob: (payload) => Dispatch(selectJob(payload)),
  };
};

const mapStateToProps = (state) => ({
  jobs: state.jobs,
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
