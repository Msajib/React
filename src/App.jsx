import { useState } from "react";
import FirstComponent from "./components/FirstComponent";
import InputComponent from "./components/InputComponent";

const App = () => {
  let title = "New React Project";
  let users = [
    "User 1",
    "User 2",
    "User 3",
    "User 4",
    "User 5"
  ];
  const [click, setclick] = useState(0);

  const btnClick = () => {
    setclick(click+1)
  }
  return (
    <div>
      <h1>{title}</h1>
      { users.map((user,index) => {return <h3 key={index}>{user}</h3> })}

      {/* <button onClick={() => {btnClick()}}>click</button> */}
      {/* <FirstComponent data={click} fn={setclick} /> */}

      <InputComponent />
    </div>
  )
}
export default App