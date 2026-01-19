import "./App.css";
import MyClassComponent1 from "./components/MyClassComponent1";
import MyClassComponent2 from "./components/myClassComponent2/MyClassComponent2";


const hlist = ["reading", "traveling", "swimming"];

function App() {
  return (
    <>
      <MyClassComponent1
        fname="Thomas"
        lname="Smith"
        hobbiesList={["eating"]}
      />
      <MyClassComponent1 fname="Jane" lname="Doe" hobbiesList={["playing"]} />
      <MyClassComponent1 hobbiesList={hlist} />

      <MyClassComponent2 hobbiesList={hlist} />
    </>
  );
}

export default App;
