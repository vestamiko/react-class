import "./App.css";
import MyClassComponent1 from "./components/MyClassComponent1";
import MyClassComponent2 from "./components/myClassComponent2/MyClassComponent2";
import MyClassComponent3 from "./components/MyClassComponent3";
import SquareGenerator from "./components/SquareGenerator";
import RandomNumberSquares from "./components/RandomNuberSquares";

const hlist = ["reading", "traveling", "swimming"];

function App() {
  return (
    <>
      <MyClassComponent3 />
      <SquareGenerator />
      <RandomNumberSquares />
      {/* // <MyClassComponent1
      //   fname="Thomas"
      //   lname="Smith"
      //   hobbiesList={["eating"]}
      // />
      // <MyClassComponent1 fname="Jane" lname="Doe" hobbiesList={["playing"]} myColor="#ff0000"/>
      // <MyClassComponent1 hobbiesList={hlist} />

      // <MyClassComponent2 hobbiesList={hlist} /> */}
    </>
  );
}

export default App;
