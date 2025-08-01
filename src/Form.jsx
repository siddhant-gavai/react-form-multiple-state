import { useState } from "react";

export default function Form() {
  let [formData, setFormData] = useState({
    fullName: "",
    username: "",
  });

  //   let handleChange = (event) => {
  //     setFullName(event.target.value);
  //   };

  //   let handleUsername = (event) => {
  //     setuserName(event.target.value);
  //   };

  let handleInputChange = (event) => {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted with data:", formData);

    setFormData({
      fullName: "",
      username: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>My Form</h2>
      <label htmlFor="fullName">FullName</label>
      <input
        type="text"
        placeholder="enter your name "
        onChange={handleInputChange}
        value={formData.fullName}
        id="fullName"
        name="fullName"
      />
      <br />
      <br />
      <label htmlFor="username">UserName</label>
      <input
        type="text"
        placeholder="enter Username"
        onChange={handleInputChange}
        value={formData.username}
        id="username"
        name="username"
      />
      <button>Submit</button>
    </form>
  );
}
