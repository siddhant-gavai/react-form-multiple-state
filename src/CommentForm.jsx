import { useState } from "react";
import "./CommentForm.css";

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
    <div className="form-container">
      <h2 style={{ color: "black" }}>Leave a Comment</h2>
      <form onSubmit={handleSubmit} className="comment-form">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="Enter your name"
          value={formData.username}
          onChange={handleInputChange}
          id="username"
          name="username"
        />

        <label htmlFor="comment">Comment</label>
        <textarea
          name="comment"
          id="comment"
          rows="5"
          placeholder="Write your comment here..."
          value={formData.comment}
          onChange={handleInputChange}
        ></textarea>

        <label htmlFor="rating">Rating (1 to 5)</label>
        <input
          type="number"
          placeholder="Rating"
          min={1}
          max={5}
          value={formData.rating}
          onChange={handleInputChange}
          id="rating"
          name="rating"
        />

        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
}
