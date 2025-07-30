import { useState } from "react";

export default function Form() {
  let [fullName, setFullName] = useState("Shreya");

  let handleChange = (event) => {
    setFullName(event.target.value);
  };

  return (
    <form>
      <h2>My Form</h2>
      <input
        type="text"
        placeholder="enter your name "
        value={fullName}
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  );
}
