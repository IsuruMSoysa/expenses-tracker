import React, { useState, useRef } from "react";
import { Row, Col, Button } from "react-bootstrap";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import ProjectButton from "../common/Button";
import { useNavigate } from "react-router";

function ProfilePictureUpload() {
  const Navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [crop, setCrop] = useState({ aspect: 1 / 1 });
  const [previewUrl, setPreviewUrl] = useState(null);
  const fileInputRef = useRef();

  function handleFileChange(event) {
    setFile(event.target.files[0]);
    setPreviewUrl(URL.createObjectURL(event.target.files[0]));
  }

  function handleCropChange(newCrop) {
    setCrop(newCrop);
  }

  function handleCropComplete(crop, pixelCrop) {
    if (!previewUrl) return;

    const image = new Image();
    image.src = previewUrl;

    const canvas = document.createElement("canvas");
    canvas.width = crop.width;
    canvas.height = crop.height;

    const ctx = canvas.getContext("2d");
    ctx.drawImage(
      image,
      pixelCrop.x,
      pixelCrop.y,
      pixelCrop.width,
      pixelCrop.height,
      0,
      0,
      crop.width,
      crop.height
    );

    const croppedImageUrl = canvas.toDataURL("image/jpeg");

    setPreviewUrl(croppedImageUrl);
  }

  function handleUploadButtonClick() {
    fileInputRef.current.click();
  }

  return (
    <Row className="text-center">
      <Col>
        <h4 htmlFor="profile-picture-upload">Upload Profile Picture</h4>
        {previewUrl ? (
          <div className="d-flex justify-content-center py-4">
            <div
              style={{
                width: "30vh",
                height: "30vh",
                borderRadius: "50%",
                overflow: "hidden",
              }}
            >
              <img
                src={previewUrl}
                alt="Circular Preview"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        ) : (
          <div>
            <label className="py-4">No file selected</label>
          </div>
        )}
        <ProjectButton
          label="Choose File"
          backgroundColor="#0ad357"
          size="small"
          btnOnClick={handleUploadButtonClick}
        />
        <ProjectButton
          label="Save"
          backgroundColor="#0ad357"
          size="small"
          //   btnOnClick={handleUploadButtonClick}
        />
        <ProjectButton
          label="Cancel"
          backgroundColor="#717171"
          size="small"
          btnOnClick={() => Navigate(-1)}
        />
        <input
          ref={fileInputRef}
          type="file"
          accept=".jpg,.jpeg,.png"
          onChange={handleFileChange}
          style={{ display: "none" }}
        />
      </Col>
    </Row>
  );
}

export default ProfilePictureUpload;
