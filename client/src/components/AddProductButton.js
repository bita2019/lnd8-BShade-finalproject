import { Button } from "@mui/base";
import React, { useState } from "react";
import { Uploader } from "uploader";
import { UploadButton } from "react-uploader";

const uploader = new Uploader({ apiKey: "free" });

const AddProductButton = ({}) => {
  return (
    <UploadButton
      uploader={uploader} // Required.
      onComplete={(files) => {
        if (files.length === 0) {
          console.log("No files selected.");
        } else {
          console.log("Files uploaded:");
          console.log(files.map((f) => f.fileUrl));
        }
      }}
    >
      {({ onClick }) => <button onClick={onClick}>Upload a file...</button>}
    </UploadButton>
  );
};
export default AddProductButton;
