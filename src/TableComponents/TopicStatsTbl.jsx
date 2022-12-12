//Mohamed Loutfi

import { Component } from "react";
import ColumnEnd from "../ColumnComponents/ColumnEnd";

const TopicStatsTbl = function (props){
    let topics = props.topics;
    topics.sort((a,b) => b.nberPost - a.nberPost);
    return(
        <div className="topicStatContain">
        <table name="topicStatTbl">
          <thead>
            <tr>
              <td colSpan={3}>Topic Stats</td>
            </tr>
          </thead>
          <tbody>
            <tr className="topicStatHeader">
              <th>Topic Title</th>
              <th>Number of Posts</th>
              <th>Status</th>
            </tr>
            {topics.map((topic, i) => 
              <tr className="dataRows" key={i}>
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