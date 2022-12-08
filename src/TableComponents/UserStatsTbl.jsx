import { Component } from "react";
import ColumnEnd from "../ColumnComponents/ColumnEnd";

const UserStatTbl = function  (props){
    let users = props.users;
    users.sort((a,b) => b.nberPosts - a.nberPosts);
    return(
        <div class="userStatContain">
            <table name="userStatTbl">
                <thead>
                    <tr>
                        <td>
                        Users stats
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <tr class="userStatHeader">
                        <th>user</th>
                        <th>nberPosts</th>
                    </tr>
                    {users.map((user) => 
                    <tr>
                        <td>{user.user_id}</td>
                        <td>{user.nberPosts}</td>
                    </tr>)}
                </tbody>
            </table>
      </div>
    );
}

export default UserStatTbl;     