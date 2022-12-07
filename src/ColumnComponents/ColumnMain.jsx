import TopSettings from "../SelectionCmpnts/TopSettings";
import UseFetch from "../CustomHooks/UseFetch";
import ListPost from "../PostComponents/ListPost";
function ColumnMain() {
let categorySel = "1";
let topicSel = "1";
const url = "https://sonic.dawsoncollege.qc.ca/~nasro/js320/project2/forum-data.php"    
const { data, isPending } = UseFetch(url);


function topicOnchange(e) {
  topicSel = e.target.value;
}

function getPosts() {
  let posts = [];
  if (data) {
    posts = Object.values(data["categories"])[categorySel-1]["topicList"][topicSel-1]["listPosts"];
  }
  return posts;
}

function categoryOnchange(e) {
    categorySel = e.target.value;
    getPosts();
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