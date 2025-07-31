import { useState } from "react";

export default function Form() {
  let [fullName, setFullName] = useState("");
  let [username, setuserName] = useState("");

  let handleChange = (event) => {
    setFullName(event.target.value);
  };

  let handleUsername = (event) => {
    setuserName(event.target.value);
  };

  return (
    <form>
      <h2>My Form</h2>
      <label htmlFor="fullName">FullName</label>
      <input
        type="text"
        placeholder="enter your name "
        value={fullName}
        onChange={handleChange}
        id="fullName"
      />
      <br />
      <br />
      <label htmlFor="username">UserName</label>
      <input
        type="text"
        placeholder="enter Username"
        value={username}
        onChange={handleUsername}
        id="username"
      />
      <button>Submit</button>
    </form>
  );
}
