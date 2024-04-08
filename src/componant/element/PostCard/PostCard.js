import React, { useEffect, useState } from "react";
import { onlike } from "../../../reducer/useSlice";
import "../PostCard/Post.css";
import { BsStar, BsStarFill, BsChatDots, BsShare } from "react-icons/bs";

export default function PostCard(props) {
  const [likeCount, setLikeCount] = useState(0);
  const [comments, setComments] = useState({});
  const [onComment, setComment] = useState(false);
  useEffect(() => {
    localStorage.setItem("comments", comments);

    setLikeCount(
      localStorage.getItem("likes") ? 0 : localStorage.getItem("likes")
    );
    setComments(
      localStorage.getItem("comments") ? "" : localStorage.getItem("comments")
    );
  }, []);

  const onPostLike = () => {
    onlike();
    console.log(onlike);
    setLikeCount(likeCount + 1);
    localStorage.setItem("likes", likeCount);
  };
  const postTheComment = () => {
    localStorage.setItem("comments", comments);
  };

  return (
    <div
      className="posts-card bg-white shadow-md p-6 rounded-lg mb-4 flex flex-wrap justify-center items-start  w-3/5 max-lg:w-4/5"
      id={props.data?.id}
    >
      <div className="py-2  flex flex-wrap flex-col">
        <p className="name text-blue-400">{props.data?.username}</p>
        <span className="timestamp">{props.data?.timestamp}</span>
      </div>

      <p className="status  p-4 flex flex-wrap">{props.data?.status}</p>
      <div className="flex w-full justify-between items-center ">
        <p>
          <BsStar className="cursor-pointer" onClick={() => onPostLike()} />
          {likeCount}
        </p>
        <div className="flex justify-center items-center flex-col gap-1">
          <BsChatDots
            className="cursor-pointer "
            onClick={() => (onComment ? setComment(false) : setComment(true))}
          />
          {onComment ? (
            <div className=" flex gap-2 ">
              {" "}
              <input
                type="text"
                className=""
                placeholder="Comments here ..."
                className="px-4 rounded-md"
                onChange={(e) => {
                  setComments(e.target.value);
                }}
              />
              <button
                onClick={() => {
                  postTheComment();
                  onComment ? setComment(false) : setComment(true);
                }}
                className="font-mono font-bold text-blue-500 text-shadow-xl"
              >
                Comment
              </button>
            </div>
          ) : (
            ""
          )}
          <div className="flex flex-row gap-2">
            {Array.isArray(comments) && comments.length > 0 ? (
              comments.map((comments) => <p>{comments}</p>)
            ) : (
              <p></p>
            )}
          </div>
        </div>
        <BsShare className="cursor-pointer" />
      </div>
    </div>
  );
}
