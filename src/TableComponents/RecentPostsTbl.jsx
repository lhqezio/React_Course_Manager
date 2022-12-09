import { Component } from "react";
import ColumnEnd from "../ColumnComponents/ColumnEnd";

const RecentPostsTbl = function  (props){
    let posts = props.posts;
    posts.sort((a, b) =>{return b.date.localeCompare(a.date);});
    return(
        <div class="recentPostContain">
        <table name="recentPostTbl">
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
    );
}

export default RecentPostsTbl;