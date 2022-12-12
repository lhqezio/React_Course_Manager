import { Component } from "react";
import ColumnEnd from "../ColumnComponents/ColumnEnd";

const UserStatsTbl = function  (props){
    let users = props.users;
    users.sort((a,b) => b.nberPosts - a.nberPosts);
    return(
        <div class="userStatContain">
            <table name="userStatTbl">
                <thead>
                    <tr>
                        <td colSpan={2}>Users stats</td>
                    </tr>
                </thead>
                <tbody>
                    <tr class="userStatHeader">
                        <th>user</th>
                        <th>nberPosts</th>
                    </tr>
                    {users.map((user) => 
                    <tr className="dataRows">
                        <td>{user.user_id}</td>
                        <td>{user.nberPosts}</td>
                    </tr>)}
                </tbody>
            </table>
      </div>
    );
}

export default UserStatsTbl;     