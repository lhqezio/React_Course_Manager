import "./columnEnd.css";
import UserStatTbl from "../TableComponents/UserStatTbl";
import RecentPostsTbl from "../TableComponents/RecentPostsTbl";
import UseFetch from "../CustomHooks/UseFetch";

function ColumnEnd () {
  
  const userUrl = "https://sonic.dawsoncollege.qc.ca/~nasro/js320/project2/users-data.php";
  const forumUrl = "https://sonic.dawsoncollege.qc.ca/~nasro/js320/project2/forum-data.php"
  
  //Variables to store
  let userData = UseFetch(userUrl);
  let forumData = UseFetch(forumUrl);
  
  if(userData.isPending || forumData.isPending){
    return <div>Loading</div>;
  }else{
    //Store list of users when the data is loaded
    let users = Object.values(userData.data);
    let userList = users[0];
  
    //Store topics and posts 
    let topics = [];
    let posts = [];  
    let categories = Object.values(forumData.data);
    categories[0].forEach((category) => {
      Object.values(category.topicList).forEach((top) =>{
        //Fill topics
        topics.push(top);
        top.listPosts.forEach((post) =>{
          //Fill posts
          posts.push(post);
      });
      });
    });
    return( 
      <section id="endColumn">
        <UserStatsTbl users = {userList} />
        <TopicStatsTbl topics = {topics} />
        <RecentPostsTbl posts = {posts} />
      </section>
    )
  }
};

export default ColumnEnd;