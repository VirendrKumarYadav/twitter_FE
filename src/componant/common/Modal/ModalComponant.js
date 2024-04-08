import React, {useMemo, useState} from "react";
import { Modal, Button } from "antd";
import "../Modal/Modal.css";
import UploadImage from "../../element/UploadImage/UploadImage";



const ModalComponant = (modalOpen) => {
  const createPost = () => {
    modalOpen.createPost();
}

  const [uploadImg, setUploadImg] = useState(false);
  
  
  return (
    <div>
      <Modal
        title="Create a Post"
        style={{
          top: 20,
        }}
        open={modalOpen.modalOpen}
        onOk={() => modalOpen.setModalOpen(false)}
        onCancel={() => modalOpen.setModalOpen(false)}
        footer={
          <Button
            type="primary"
            key="submit"
            disabled={modalOpen.status.length > 0 ? false : true}
            onClick={() => createPost()}
            style={{ backgroundColor: "#4096ff", borderColor: "#4096ff" }}
          >
            {" "}
            Post
          </Button>
        }
      >
       
        <img
          className=" h-50 w-50 flex flex-wrap rounded-md "
        
         
          alt="profile-image"
        />
        <input
          className="modal-input"
          placeholder="What do you want to talk about?"
          onChange={(e) => {
            modalOpen.setStatus(e.target.value);
          }}
          value={modalOpen.status}
        ></input>
      </Modal>
    </div>
  );
};
export default ModalComponant;
