import React from "react";

import "./SidebarItem.scss";

const SidebarItem = ({ show }) => {
  return (
    <div className="SidebarItemComponent-sidebarContainer">
      <div className="SidebarItemComponent-sidebarContainer-sidebarDisplay">
        {show.show ? (
          <svg width="15" height="80">
            <rect
              width="300"
              height="100"
              style={{
                fill: "#0C5081",
                strokeWidth: "3",
                stroke: "#0C5081",
              }}
            />
          </svg>
        ) : (
          <svg width="15" height="80">
            <rect
              width="300"
              height="100"
              style={{
                fill: "#F2F2F7",
                strokeWidth: "3",
                stroke: "#F2F2F7",
              }}
            />
          </svg>
        )}
        <div className="SidebarItemComponent-sidebarContainer-sidebarDisplay-containerItem">
          <p className="SidebarItemComponent-sidebarContainer-sidebarDisplay-containerItem-jobTitleStyle">
            {show.label}
          </p>
          <p>Flyer</p>
        </div>
      </div>
      <div>
        <svg
          width="80"
          height="80"
          className="SidebarItemComponent-sidebarContainer-menuExpand"
        >
          <rect
            className="SidebarItemComponent-sidebarContainer-menuExpand"
            width="300"
            height="100"
            style={{
              fill: "#90C9ED",
              strokeWidth: "3",
              stroke: "#90C9ED",
              zIndex: "6",
            }}
          />
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-arrow-down"
            >
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <polyline points="19 12 12 19 5 12"></polyline>
            </svg>
          </span>{" "}
        </svg>
      </div>
    </div>
  );
};

export default SidebarItem;
