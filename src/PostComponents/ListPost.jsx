import React, { Component } from "react";
import Post from "./Post";
class ListPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: this.props.posts,
    };
    this.onLikeChange = this.onLikeChange.bind(this);
    this.onDislikeChange = this.onDislikeChange.bind(this);
    this.onRemoveChange = this.onRemoveChange.bind(this);
  }
  componentDidMount() {
    this.localPostsIdChange = this.localPostsIdChange.bind(this);
    this.localPostsIdChange();
  }
  componentDidUpdate(prevProps) {
    if (this.props.posts !== prevProps.posts) {
      this.setState({ posts: this.props.posts });
    }
  }
  onDislikeChange(e) {
    let id = this.toIndex(e.target.id);
    let posts = this.state.posts;
    posts[id].like--;
    this.setState({ posts: posts });
    this.localPostsIdChange();
  }
  onLikeChange(e) {
    let id = this.toIndex(e.target.id);
    let posts = this.state.posts;
    posts[id].like++;
    this.setState({ posts: posts });
    this.localPostsIdChange();
  }
  onRemoveChange(e) {
    let id = this.toIndex(e.target.id);
    let posts = this.state.posts;
    posts.splice(id, 1);
    this.setState({ posts: posts });
    this.localPostsIdChange();
  }
  toIndex(id) {
    return id.slice(1);
  }
  localPostsIdChange() {
    let temp = this.state.posts;
    for (let i = 0; i < this.state.posts.length; i++) {
      temp[i].id = i;
      this.setState({ posts: temp });
    }
  }
  render() {
    return (
      <div id ="post">
        {this.state.posts.map((post) => {
          return (
            <Post
              key={post.id}
              post={post}
              likeOnChange={this.onLikeChange}
              dislikeOnChange={this.onDislikeChange}
              removeOnChange={this.onRemoveChange}
            />
          );
        })}
      </div>
    );
  }
}

export default ListPost;
