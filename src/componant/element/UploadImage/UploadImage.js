import React from "react";
import { Button, Modal, Progress } from "antd";
import "./Upload.css";

export default function UploadImage({
  modalOpen,
  setModalOpen,
  getImage,
  uploadImage,
  currentImage,
  progress,
}) {
  return (
    <div>
      <Modal
        title="Add Profile Image"
        centered
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
        footer={[
          <Button
            disabled={!currentImage || !currentImage.name}
            key="submit"
            type="primary"
            className="text-blue-500 border-2 border-blue-500"
            onClick={uploadImage}
          >
            Upload Profile Picture
          </Button>,
        ]}
      >
        <div className="image-upload-main">
          {currentImage && currentImage.name && <p>{currentImage.name}</p>}
          <label className="upload-btn" htmlFor="image-upload">
            Add an Image
          </label>
          {progress === 0 ? (
            <p></p>
          ) : (
            <div className="progress-bar">
              <Progress type="circle" percent={progress} />
            </div>
          )}
          <input hidden id="image-upload" type="file" onChange={getImage} />
        </div>
      </Modal>
    </div>
  );
}
