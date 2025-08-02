import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Form from "./Form";
import CommentForm from "./CommentForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CommentForm />
    </>
  );
}

export default App;
