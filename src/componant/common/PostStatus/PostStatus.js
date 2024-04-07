import React, { useState, useMemo, useEffect } from "react";
import "./postStatus.css";
import ModalComponant from "../Modal/ModalComponant";
import {
  postStatus,
  getPosts,
  getCurrentUserData,
} from "../../../API/FireStore";

import PostCard from "../../element/PostCard/PostCard";
import { getCurrentTimeStamp } from "../../element/getTimeStamp/getTimeCurrent";
import { getUniqueId } from "../../element//getTimeStamp/UniqueId";
import uploadImage from "../../element//UploadImage/UploadImage";


const PostStatus = () => {
  const userEmail = localStorage.getItem("userEmail");
  const [modalOpen, setModalOpen] = useState(false);
  const [status, setStatus] = useState("");
  const [allStatus, setAllStatus] = useState([]);
  const [username, setUsername] = useState("");

  const [currentUserData, setCurrentUserData] = useState({});
  const [currentImage, setCurrentImage] = useState({});
  const [progress, setProgress] = useState(0);
  getCurrentUserData()
    .then((values) => {
      setUsername(values?.name);
    })
    .catch((error) => {
      console.error(error);
    });

  const createPost = async () => {
    let obj = {
      status: status,
      timestamp: getCurrentTimeStamp("LLL"),
      userEmail: userEmail,
      username: username,
      id: getUniqueId(),
    };
    await postStatus(obj);
  };

  useEffect(() => {
    const fetchData = async () => {
      const posts = await getPosts();
      setAllStatus(posts);
    };

    fetchData();
  }, []);
  // upload image 
   const getImage = (event) => {
     setCurrentImage(event.target.files[0]);
   };

   const uploadImageCall = () => {
     uploadImage(
       currentImage,
       currentUserData?.id,
       setModalOpen,
       setProgress,
       setCurrentImage
     );
   };
  // console.log(allStatus);

  return (
    <div className=" post-status flex justify-center items-center flex-col">
      <div className="post-status-class mt-8 flex justify-center items-center">
        <button className="open-post-modal" onClick={() => setModalOpen(true)}>
          Start a post
        </button>
      </div>
      {
        <uploadImage
          getImage={getImage}
          uploadImage={uploadImageCall}
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          currentImage={currentImage}
          progress={progress}
        />
      }
      {
        <ModalComponant
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          status={status}
          setStatus={setStatus}
          createPost={createPost}
        />
      }

      <div className="posts flex flex-col my-3 w-full justify-center items-center">
        {Array.isArray(allStatus) && allStatus.length > 0 ? (
          allStatus.map((posts) => <PostCard data={posts}></PostCard>)
        ) : (
          <p>No posts available</p>
        )}
      </div>
    </div>
  );
};

export default PostStatus;
