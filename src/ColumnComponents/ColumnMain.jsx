import TopSettings from "../SelectionCmpnts/TopSettings";
import UseFetch from "../CustomHooks/UseFetch";
import ListPost from "../PostComponents/ListPost";
import { useState } from "react";
function ColumnMain() {
let [categorySel, setCategorySel] = useState(1);
let [topicSel, setTopicSel] = useState(1);
const url = "https://sonic.dawsoncollege.qc.ca/~nasro/js320/project2/forum-data.php"    
const { data, isPending } = UseFetch(url);


function topicOnchange(e) {
  setTopicSel(parseInt(e.target.value));
}

function getPosts() {
  let posts = [];
  posts = Object.values(data["categories"])[categorySel-1]["topicList"][topicSel-1]["listPosts"];
  return posts;
}

function categoryOnchange(e) {
  setCategorySel(parseInt(e.target.value));
  setTopicSel(1);
}
if(isPending){
    return <div>Loading</div>;
}
else{
    return (
        <div>
            <TopSettings data={data} categoryOnchange={categoryOnchange} topicOnchange={topicOnchange} />
            <ListPost posts={getPosts()} />
        </div>
    )
}
}

export default ColumnMain;