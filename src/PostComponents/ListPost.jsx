import { useState } from "react";
import Post from "./Post.jsx";
function ListPost(props) {
  const { postsProps } = props;
  console.log(postsProps);
  const {posts,setPosts} = useState(postsProps);
  let postl = null
  if(posts){
    postl =
      <div>
        {posts.map((post) => (
        <Post post={post} likeOnChange={likeOnChange} dislikeOnChange={dislikeOnChange} removeOnChange={removeOnChange} />
        ))}
      </div>
    ;
  }
  else{
    postl = <div>Loading</div>;
  }
  return (
    <div>
    </div>
  );
  function removeOnChange(e){
    setPosts(posts.filter((post) => post.id !== parseInt(e.target.id)));
  }
  function likeOnChange(e){
    setPosts(posts.map((post) => {
      if(post.id === parseInt(e.target.id)){
        post.like++;
      }
      return post;
    }));
  }
  function dislikeOnChange(e){
    setPosts(posts.map((post) => {
      if(post.id === parseInt(e.target.id)){
        post.like--;
      }
      return post;
    }));
  }
}
export default ListPost;