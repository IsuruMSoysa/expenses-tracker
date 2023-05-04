import React, { useState, useRef } from "react";
import { Row, Col, Button } from "react-bootstrap";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import ProjectButton from "../common/Button";
import { useNavigate, useParams } from "react-router";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { v4 } from "uuid";
import { storage } from "../../firebase-config";
import { toggleLoading } from "../../features/loadingScreen/loadingSlice";
import { useDispatch } from "react-redux";
import { updateAccountDetails } from "../../features/accountDetails/accountDetailsSlice";
import { Modal } from "antd";

function ProfilePictureUpload() {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const [file, setFile] = useState(null);
  const [crop, setCrop] = useState({ aspect: 1 / 1 });
  const [previewUrl, setPreviewUrl] = useState(null);
  const [imageUploadedUrl, setImageUploadedUrl] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const fileInputRef = useRef();
  const imagesListRef = ref(storage, "images/");

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

  function handleSelectButtonClick() {
    fileInputRef.current.click();
  }

  const handleUploadButtonClick = () => {
    if (file == null) return;
    dispatch(toggleLoading());
    const imageRef = ref(storage, `images/${file.name + v4()}`);
    uploadBytes(imageRef, file).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUploadedUrl(url);
        console.log("url", url);
        const editObj = {
          imageUrl: url,
        };
        dispatch(updateAccountDetails({ id, editObj }));
        dispatch(toggleLoading());
        Navigate(`/dashboard/${id}`);
      });
    });
  };

  return (
    <Row className="text-center profile-pic-update-cont">
      <Modal
        title="Save Expence?"
        centered
        open={modalOpen}
        onOk={handleUploadButtonClick}
        onCancel={() => setModalOpen(false)}
      ></Modal>
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
          label={previewUrl ? "Change Image" : "Choose Image"}
          backgroundColor="#ffffff"
          size="small"
          btnOnClick={handleSelectButtonClick}
        />
        <ProjectButton
          label="Save"
          backgroundColor="#0ad357"
          size="small"
          btnOnClick={(e) => {
            e.preventDefault();
            setModalOpen(true);
          }}
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
