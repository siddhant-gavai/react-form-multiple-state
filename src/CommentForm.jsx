import { useState } from "react";

export default function CommentForm() {
  let [formData, setFormData] = useState({
    username: "",
    comment: "",
    rating: 5,
  });

  let handleInputChange = (e) => {
    setFormData((currData) => {
      return { ...currData, [e.target.name]: e.target.value };
    });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log("Comment submitted with data:", formData);
    setFormData({
      username: "",
      comment: "",
      rating: 5,
    });
  };

  return (
    <div>
      <h4>Give a commment!</h4>

      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <br />
        <input
          type="text"
          placeholder="username"
          value={formData.username}
          onChange={handleInputChange}
          id="username"
          name="username"
        />

        <br />
        <label htmlFor="comment">Comment</label>
        <textarea
          name="comment"
          id="comment"
          cols="30"
          rows="10"
          placeholder="write your comment here"
          value={formData.comment}
          onChange={handleInputChange}
        ></textarea>
        <br />
        <label htmlFor="rating">Rating</label>
        <input
          type="number"
          placeholder="rating"
          min={1}
          max={5}
          value={formData.rating}
          onChange={handleInputChange}
          id="rating"
          name="rating"
        />
        <button>Add Comments</button>
      </form>
    </div>
  );
}
