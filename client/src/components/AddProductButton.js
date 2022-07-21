import { Button } from "@mui/material";
import React, { useState } from "react";
import { Uploader } from "uploader";
import { UploadButton } from "react-uploader";

const uploader = new Uploader({
  apiKey: "public_FW25asG7i8q9nJq99sP8jRFWCRqK",
});

const AddProductButton = ({ addHandler }) => {
  return (
    <UploadButton
      uploader={uploader} // Required.
      onComplete={(files) => {
        if (files.length === 0) {
          console.log("No files selected.");
        } else {
          console.log("Files uploaded:");
          const imgPath = files.map((f) => f.fileUrl);
          addHandler(imgPath);
          console.log(imgPath);
        }
      }}
    >
      {({ onClick }) => (
        <Button variant="contained" onClick={onClick}>
          {" "}
          Upload a file...
        </Button>
      )}
    </UploadButton>
  );
};
export default AddProductButton;
