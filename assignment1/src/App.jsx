import Badge from "./components/Badge";
import Header from "./components/Header";

export default function App () {
  return (
    <div className="grid grid-rows my-12">
      <Header title={"Week one - Assignment one"}></Header>
      <Badge label="Course" value="React" />
      <Badge label="Week" value="One" />
      <Badge label="Topic" value="Props" />
    </div>
  )
}