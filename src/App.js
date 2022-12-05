import ReactDOM from "react-dom";
import ColumnEnd from "./ColumnComponents/ColumnEnd";
function App(){
    return(
        <body>
            <ColumnEnd/>
        </body>
    );
}

ReactDOM.render(
    <App />, document.getElementById('root')
);

export default App;