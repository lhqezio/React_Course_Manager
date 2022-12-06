function Post(props) {
  const { post,likeOnChange,dislikeOnChange,removeOnChange } = props;
  return (
    <div>
      <div className="header">
        {post.text}
      </div>
      likes: {post.like}
      <button id={post.id} onChange={likeOnChange}>Like</button>
      <button id={post.id}onChange={dislikeOnChange}>Dislike</button>
      <div className="info">
        by {post.author}    {post.date}    {post.replies}
        <button id={post.id} onChange={removeOnChange}>Remove</button>
      </div>
    </div>
  );
}
export default Post;