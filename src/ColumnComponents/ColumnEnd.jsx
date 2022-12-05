import React, { useState } from "react";
import "./columnEnd.css";
import userData from "../user-data.json";
import forumData from "../forum-data.json"

function ColumnEnd () {
  //Store users --(Sorted by nbrPost)
  let [users] = useState(userData.users.sort((a,b) => b.nberPosts - a.nberPosts));
  //Store topic
  let topics = [];
  //Store posts
  let posts = [];
  let [categories] = useState(forumData.categories);
  categories.forEach((category) => {
    category.topicList.forEach((top) =>{
      //Fill topics
      topics.push(top);
      top.listPosts.forEach((post) =>{
        //Fill posts
        posts.push(post);
    })
    });
  });
  //Sort topics by nberPost
  topics.sort((a,b) => b.nberPost - a.nberPost);
  //Sort posts by date
  posts.sort((a, b) =>{return b.date.localeCompare(a.date);});
  return( 
    <section id="endColumn">
      <div class="topicStatContain">
        <table>
          <thead>Topic Stats</thead>
          <tbody>
            <tr id="topicStatHeader">
              <th>topic_title</th>
              <th>nberPosts</th>
              <th>status</th>
            </tr>
            {topics.map((topic) => 
              <tr>
                <td>{topic.topic_title}</td>
                <td>{topic.nberPost}</td>
                <td>{topic.status}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div class="recentPostContain">
        <table>
          <thead>Recent Posts</thead>
          <tbody>
            <tr id="recentPostsHeader">
              <th>autor</th>
              <th>date</th>
              <th>rate</th>
            </tr>
            {posts.map((post) => 
              <tr>
                <td>{post.author}</td>
                <td>{post.date}</td>
                <td>{post.rate}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div class="userStatContain">
        <table>
          <thead>Users stats</thead>
          <tbody>
            <tr id="userStatHeader">
              <th>user</th>
              <th>nberPosts</th>
            </tr>
            {users.map((user) => 
              <tr>
                <td>{user.user_id}</td>
                <td>{user.nberPosts}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
)};

export default ColumnEnd;