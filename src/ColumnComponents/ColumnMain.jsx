import React, {useState,useEffect} from "react";
import TopSettings from "../SelectionCmpnts/TopSettings";
import UseFetch from "../CustomHooks/UseFetch";
import ListPost from "../PostComponents/ListPost";
function ColumnMain() {
let categorySel = "1";
let topicSel = "1";
const url = "https://sonic.dawsoncollege.qc.ca/~nasro/js320/project2/forum-data.php"    
const { data, isPending, error } = UseFetch(url);
let categories = [];
let topics = [];


function topicOnchange(e) {
  topicSel = e.target.value;
}

function categoryOnchange(e) {
    categorySel = e.target.value;
}
if(isPending){
    return <div>Loading</div>;
}
else{
    return (
        <div>
            <TopSettings data={data} categoryOnchange={categoryOnchange} topicOnchange={topicOnchange} />
        </div>
    )
}
}

export default ColumnMain;