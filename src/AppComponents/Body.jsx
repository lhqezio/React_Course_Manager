import ColumnEnd from "../ColumnComponents/ColumnEnd";
import ColumnMain from "../ColumnComponents/ColumnMain";
import ColumnStart from "../ColumnComponents/ColumnStart"

function Body() {
  return (
    <main>
      <ColumnStart/>
      <ColumnMain />
      <ColumnEnd />
    </main>
  );
}

export default Body;
