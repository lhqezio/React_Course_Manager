/**
 * @file Post.jsx
 * @brief Post component
 * @version 1.0
 * @date 2022-12-09
 * @author Hoang Quoc Le
 */

function Post(props) {
  const { post, likeOnChange, dislikeOnChange, removeOnChange } = props;
  return (
    <div className="postContainer">
      <div className="header">{post.text}</div>
      likes: {post.like}
      <button id={"l" + post.id} onClick={likeOnChange}>
        Like
      </button>
      <button id={"d" + post.id} onClick={dislikeOnChange}>
        Dislike
      </button>
      <div className="info">
        by {post.author} {post.date} {post.replies}
        <button id={"r" + post.id} onClick={removeOnChange}>
          Remove
        </button>
      </div>
    </div>
  );
}
export default Post;
