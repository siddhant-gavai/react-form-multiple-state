import { useState } from "react";

const Joker = () => {
  let [joke, setJoke] = useState({});

  const URL = "https://official-joke-api.appspot.com/random_joke";

  const getNewJoke = async () => {
    let res = await fetch(URL);
    let jsonResponse = await res.json();
    console.log(jsonResponse);
    setJoke({
      setup: jsonResponse.setup,
      punchline: jsonResponse.punchline,
    });
  };
  return (
    <div>
      <h3>Joker</h3>
      <h2> {joke.setup}</h2>
      <h2>{joke.punchline}</h2>
      <p>Click the button to get a new joke!</p>
      <button onClick={getNewJoke}>New-Joke😍</button>
    </div>
  );
};

export default Joker;
