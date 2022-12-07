import ReactDOM from "react-dom";
import Body from "./AppComponents/Body";
import Header from "./AppComponents/Header";
import Footer from "./AppComponents/Footer";
import ColumnEnd from "./ColumnComponents/ColumnEnd";
function App() {
  return (
    <div id="main_container">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
