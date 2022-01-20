import PostLiked from "./PostLiked";
import { useState, useEffect } from "react";
import { FcLike } from "react-icons/fc"
const Post = ({ question, answer }) => {
  const [showLike, setShowLike] = useState(false);

  useEffect(() => {}, []);
  return (
    <div>
      <div className="post">
        <p classname="postQuestion">{question}</p>
        <br />
        <p>Svar: {answer}</p>
        <br />
        <button
          className={showLike ? "hide" : null}
          onClick={(event) => setShowLike(true)}
        >
          Like this post! <FcLike/>
        </button>
        {showLike && <PostLiked />}
      </div>
    </div>
  );
};

export default Post;
