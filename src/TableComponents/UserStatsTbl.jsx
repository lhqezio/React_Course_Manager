//Mohamed Loutfi

import { Component } from "react";
import ColumnEnd from "../ColumnComponents/ColumnEnd";

const UserStatsTbl = function (props){
    let users = props.users;
    users.sort((a,b) => b.nberPosts - a.nberPosts);
    return(
        <div className="userStatContain">
            <table name="userStatTbl">
                <thead>
                    <tr>
                        <td colSpan={2}>Users stats</td>
                    </tr>
                </thead>
                <tbody>
                    <tr className="userStatHeader">
                        <th>User</th>
                        <th>Number of Posts</th>
                    </tr>
                    {users.map((user, i) => 
                    <tr className="dataRows" key={i}>
                        <td>{user.user_id}</td>
                        <td>{user.nberPosts}</td>
                    </tr>)}
                </tbody>
            </table>
      </div>
    );
}

export default UserStatsTbl;     