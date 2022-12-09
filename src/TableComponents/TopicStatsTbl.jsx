import { Component } from "react";
import ColumnEnd from "../ColumnComponents/ColumnEnd";

const TopicStatsTbl = function (props){
    let topics = props.topics;
    topics.sort((a,b) => b.nberPost - a.nberPost);
    return(
        <div class="topicStatContain">
        <table name="topicStatTbl">
          <thead>Topic Stats</thead>
          <tbody>
            <tr class="topicStatHeader">
              <th>topic_title</th>
              <th>nberPosts</th>
              <th>status</th>
            </tr>
            {topics.map((topic) => 
              <tr className="dataRows">
                <td>{topic.topic_title}</td>
                <td>{topic.nberPost}</td>
                <td>{topic.status}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
}

export default TopicStatsTbl;