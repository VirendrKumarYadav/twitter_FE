import { firestore } from "../firebase/firebase";
import {
  addDoc,
  collection,
  onSnapshot,
  doc,
  updateDoc,
  query,
  where,
  setDoc,
  deleteDoc,
  getDocs,
} from "firebase/firestore";

import { toast } from "react-toastify";
import { getUniqueId } from "../componant/element/getTimeStamp/UniqueId";

const dbRef = collection(firestore, "posts");
let userRef = collection(firestore, "users");
let likeRef = collection(firestore, "likes");
let commentsRef = collection(firestore, "comments");
let connectionRef = collection(firestore, "connections");

// Reference to the "posts" collection

export const loggedIn = (prop) => {
  addDoc(userRef, prop)
    .then((res) => {
      toast.success("login details posted successfully");
    })
    .catch((err) => {
      toast.error(err.message);
    });
};
export const getCollectionDetails = async (collectionName) => {
  const collectionRef = collection(firestore, collectionName);
  const querySnapshot = await getDocs(collectionRef);

  const collectionDetails = [];
  querySnapshot.forEach((doc) => {
    collectionDetails.push({
      id: doc.id,
      ...doc.data(),
    });
  });
  return collectionDetails;
};



export const editProfile = (userID, payload) => {
  let userToEdit = doc(userRef, userID);

  updateDoc(userToEdit, payload)
    .then(() => {
      toast.success("Profile has been updated successfully");
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getCurrentUserData = () => {
  const currentEmail = localStorage.getItem("userEmail");
  return new Promise((resolve, reject) => {
    onSnapshot(
      userRef,
      (snapshot) => {
        const posts = snapshot.docs
          .map((doc) => ({
            id: getUniqueId(),
            userEmail: doc.userEmail,
            ...doc.data(),
          }))
          .filter((item) => {
            return item.userEmail === currentEmail;
          })[0];

        resolve(posts);
      },
      reject
    );
  });
};

export const postStatus = (prop) => {
  addDoc(dbRef, prop)
    .then((res) => {
      toast.success("Posts has been added successfully");
    })
    .catch((err) => {
      toast.error(err.message);
    });
};

export const getPosts = () => {
  return new Promise((resolve, reject) => {
    onSnapshot(
      dbRef,
      (snapshot) => {
        const posts = snapshot.docs.map((doc) => ({
          id: doc.id,
          timestamp: doc.timestamp,
          ...doc.data(),
        }));
        resolve(posts);
      },
      reject
    );
  });
};

export const likePost = (userId, postId, liked) => {
  try {
    let docToLike = doc(likeRef, `${userId}_${postId}`);
    if (liked) {
      deleteDoc(docToLike);
    } else {
      setDoc(docToLike, { userId, postId });
    }
  } catch (err) {
    console.log(err);
  }
};

export const getLikesByUser = (userId, postId, setLiked, setLikesCount) => {
  try {
    let likeQuery = query(likeRef, where("postId", "==", postId));

    onSnapshot(likeQuery, (response) => {
      let likes = response.docs.map((doc) => doc.data());
      let likesCount = likes?.length;

      const isLiked = likes.some((like) => like.userId === userId);

      setLikesCount(likesCount);
      setLiked(isLiked);
    });
  } catch (err) {
    console.log(err);
  }
};

export const postComment = (postId, comment, timeStamp, name) => {
  try {
    addDoc(commentsRef, {
      postId,
      comment,
      timeStamp,
      name,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getComments = (postId, setComments) => {
  try {
    let singlePostQuery = query(commentsRef, where("postId", "==", postId));

    onSnapshot(singlePostQuery, (response) => {
      const comments = response.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      setComments(comments);
    });
  } catch (err) {
    console.log(err);
  }
};

export const getSingleUser = (setCurrentUser, email) => {
  const singleUserQuery = query(userRef, where("email", "==", email));
  onSnapshot(singleUserQuery, (response) => {
    setCurrentUser(
      response.docs.map((docs) => {
        return { ...docs.data(), id: docs.id };
      })[0]
    );
  });
};

export const postUserData = (object) => {
  addDoc(userRef, object)
    .then(() => {})
    .catch((err) => {
      console.log(err);
    });
};


