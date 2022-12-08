import "./columnEnd.css";
import TopicStatTbl from "../TableComponents/TopicStatsTbl";
import RecentPostTbl from "../TableComponents/RecentPostsTbl";
import UserStatTbl from "../TableComponents/UserStatsTbl";
import UseFetch from "../CustomHooks/UseFetch";

function ColumnEnd () {
  //Store users
  let users = [];
  //Store topic
  let topics = [];
  //Store posts
  let posts = [];

  let categories =[];

  //Using the urls
  const forumUrl = "https://sonic.dawsoncollege.qc.ca/~nasro/js320/project2/forum-data.php"    
  const { forumData, isPendingForum, errorForum } = UseFetch(forumUrl);
  const userUrl = "https://sonic.dawsoncollege.qc.ca/~nasro/js320/project2/forum-data.php"    
  const { userData, isPendingUser, errorUser} = UseFetch(userUrl);
  
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

  return( 
    <section id="endColumn">
      <TopicStatTbl topics = {topics} />
      <RecentPostTbl posts = {posts} />
      <UserStatTbl users = {users} />
    </section>
)};

function changeRowColor(tableName, tbleHeader){
  
  let tbl = document.getElementsByName(`${tableName}`)[0];
  let sibRow = tbl.getElementsByTagName('tr')[tbl.getElementsByTagName('tr').length-2];
  let thead = tbl.getElementsByClassName(`${tbleHeader}`)[0];
  let row = tbl.getElementsByTagName('tr')[tbl.getElementsByTagName('tr').length-1];
  if(sibRow != thead && sibRow.style.backgroundColor == 'aqua'){
      row.style.backgroundColor = 'skyblue';
  }else{
      row.style.backgroundColor = 'aqua';
    }
  }

export default ColumnEnd;



  