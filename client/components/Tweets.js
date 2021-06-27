import React, { useState } from "react";
import axios from "axios";
import Display from "./Display";

const Tweets = () => {
  const [tweet, setTweet] = useState("");

  function trigger() {
    axios
      .get("/tweets")
      .then((res) => setTweet(res.data))
      .catch((err) => console.log("err: ", err));
  }

  function remove() {
    setTweet("");
  }

  return (
    <div>
      <p className="ridiculous">Lets hear some ridiculous quotes shall we?</p>
      <button className="tweetButton" onClick={trigger}>
        Kanye Tweets
      </button>
      <button className="overItButton" onClick={remove}>
        Over It
      </button>
      <Display trigger={tweet} />
    </div>
  );
};

export default Tweets;
