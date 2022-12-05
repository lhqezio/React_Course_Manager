import React from "react";
import ReactDOM  from "react";

function ColumnEnd(){
    return(
        <section id="columnEnd">
            <table id="topicStatsTbl">
                <thead>
                    <th>TopicStats</th>
                </thead>
                <tbody>
                    <tr>
                        <td>topic_title</td>
                        <td>nberPost</td>
                        <td>status</td>
                    </tr>
                    addNewRowAsc();
                </tbody>
            </table>
        </section>
    );
}

function addNewRowAsc(){
    fetch("../user-data.php").then((res) => { if(res.status==200){return res.json();
                                            }})
                            .then((res) => {
                                console.log(res)
                            });
                            fetch("../user-data.php").catch((rej) => {console.log("Fetch with url didn't work... "+rej.message);});
                        }


ReactDOM.render(
    <ColumnEnd />, document.getElementById('root')
  );

export default ColumnEnd;