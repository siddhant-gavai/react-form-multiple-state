import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Form from "./Form";
import CommentForm from "./CommentForm";
import Counter from "./Counter";
import Joker from "./Joker";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Joker />
    </>
  );
}

export default App;
