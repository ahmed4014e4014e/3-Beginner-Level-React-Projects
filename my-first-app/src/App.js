import "./App.css";
import "./myStyle.css";
// eslint-disable-next-line no-unused-vars
import Header from "./components/Header";
import Title from "./components/Title";
import Card from "./components/Card";
import Button from "./components/Button";
import { IoIosSend } from "react-icons/io";

function App() {

  const log = () => {
    console.log("Add");
  }
  const sendMess = () => {
    window.alert("message was sent");
  }

  return (
    <div className="App">
      <header className="App-header">

        <Title classes={"my-title"} text={"Components"} />



        <Card cardHeader={"JavaScript Course"} cardText={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur cum odit enim incidunt quis beatae"} background={"#333"}>

          <Button classes={"btn-primary btn-sm"} text={"Send"} icon={< IoIosSend size={30} color="red" />} handleEvent={sendMess} />
          <Button classes={"btn-main btn-block"} text={"Add"} handleEvent={log} />

        </Card>

        <a
          className="App-link"
          href="https://norbertbm.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Menyhart Media
        </a>
      </header>
    </div>
  );
}

export default App;
