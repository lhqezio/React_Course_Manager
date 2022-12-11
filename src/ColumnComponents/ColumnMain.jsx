/**
 * @file ColumnMain.jsx
 * @brief Main component of the column, contains the top settings and the list of posts
 * @version 1.0
 * @date 2022-12-09
 * @author Hoang Quoc Le
 */

import TopSettings from "../SelectionCmpnts/TopSettings";
import UseFetch from "../CustomHooks/UseFetch";
import ListPost from "../PostComponents/ListPost";
import { useState } from "react";
import "./columnMain.css"

function ColumnMain() {
  let [categorySel, setCategorySel] = useState(1);
  let [topicSel, setTopicSel] = useState(1);
  const url = "https://sonic.dawsoncollege.qc.ca/~nasro/js320/project2/forum-data.php";
  const { data, isPending } = UseFetch(url);

  function topicOnchange(e) {
    setTopicSel(parseInt(e.target.value));
  }

  function getPosts() {
    let posts = [];
    posts = Object.values(data["categories"])[categorySel - 1]["topicList"][topicSel - 1]["listPosts"];
    return posts;
  }

  function categoryOnchange(e) {
    setCategorySel(parseInt(e.target.value));
    setTopicSel(1);
  }
  if (isPending) {
    return <div>Loading</div>;
  } else {
    return (
      <div id="columnMain">
        <TopSettings
          data={data}
          categoryOnchange={categoryOnchange}
          topicOnchange={topicOnchange}
        />
        <ListPost posts={getPosts()} />
      </div>
    );
  }
}

export default ColumnMain;
