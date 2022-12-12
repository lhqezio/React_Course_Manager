//Mohamed Loutfi

import { useState } from "react";

const RecentPostsTbl = function  (props){
    let posts = props.posts;
    posts.sort((a, b) =>{return b.date.localeCompare(a.date);});
    const[color, setColor] = useState('red');
    return(
        <div className="recentPostContain">
        <table name="recentPostTbl">
          <thead>
            <tr>
              <td colSpan={3}>Recent Posts</td>
            </tr>
            </thead>
          <tbody>
            <tr id="recentPostsHeader">
              <th>Author</th>
              <th>Date</th>
              <th>Rate</th>
            </tr>
            {posts.map((post, i) => 
              <tr className="dataRows" key={i}>
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