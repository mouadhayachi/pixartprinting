import React from "react";
import { connect } from "react-redux";
import DropboxChooser from "react-dropbox-chooser";

import { environment } from "../../environement.js";

import {ApplyJob} from "../../Actions/action"
import {verifyFile} from "./constant"

import DropboxIcon from "../../assets/dropbox_icon.png";
import UploadedIcon from "../../assets/upload_icon.png";

import "./Uploader.scss";



const Uploader = ({ selectItem, ApplyJob }) => {
  const updateJobsStatus = (filename) => {
     if (verifyFile(filename)) {
      ApplyJob(selectItem);
      alert("Your application is done!");
    } else {
      alert("Invalid file, try to select another file!");
    }
  };

  return (
    <div className="UploaderComponent-uploadContainer">
      <h3 className="UploaderComponent-uploadContainer-headerTitle">
        Upload now your file for {selectItem.label}
      </h3>
      <div className="UploaderComponent-uploadContainer-uploadElementcontainer">
        <div className="UploaderComponent-uploadContainer-uploadContainerStyle">
          {!selectItem.applied ? (
            <>
              <span className="UploaderComponent-uploadContainer-localUploadContainer">
                <label htmlFor="upload-photo">
                  <img
                    src={UploadedIcon}
                    alt="dropbox_icon"
                    className="UploaderComponent-uploadContainer-uploadIconStyle"
                  />
                </label>
                <input
                  type="file"
                  name="photo"
                  id="upload-photo"
                  onChange={(e) => updateJobsStatus(e.target.files[0].name)}
                />
                <h5 className="UploaderComponent-uploadContainer-titleStyle">
                  UPLOAD YOUR GRAPHIC FILE HERE
                </h5>
              </span>
              <span className="UploaderComponent-uploadContainer-DropBoxContainer">
                <h6>or upload from</h6>
                <DropboxChooser
                  appKey={environment.APP_KEY}
                  extensions= {['.pdf', '.doc', '.docx']}
                  success={(files)=>updateJobsStatus(files[0].link)}
 
                >
                  <img
                    src={DropboxIcon}
                    alt="dropbox_icon"
                    className="UploaderComponent-uploadContainer-uploadIconStyle"
                  />
                </DropboxChooser>
              </span>
            </>
          ) : (
            <h5 className="UploaderComponent-uploadContainer-titleStyle">
              YOUR APPLICATION FOR {selectItem.label} IS DONE
            </h5>
          )}
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (Dispatch) => {
  return {
    ApplyJob: (payload) => Dispatch(ApplyJob(payload)),
  };
};

export default connect(null, mapDispatchToProps)(Uploader);
