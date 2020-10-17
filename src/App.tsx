import { useInterval } from "@alwaystudios/as-ui-components";
import React, { useState } from "react";
import { Header } from "./components/Header";
import { Tweet } from "./components/Tweet";
import { sanitiseTweets } from "./sanitiseTweets";
import { getTweets } from "./twitterClient";
import { Tweet as TweetType } from "./types";

const INTERVAL = 2000;

const App = () => {
  const [tweets, setTweets] = useState<TweetType[]>([]);
  var requestInFlight = false;
  var lastId = 0;

  useInterval(() => {
    if (!requestInFlight) {
      requestInFlight = true;
      getTweets(lastId).then(async (newTweets) => {
        if (newTweets.length > 0) {
          const sanitisedTweets = sanitiseTweets([...newTweets, ...tweets]);
          lastId = newTweets[0].id;
          setTweets((_) => sanitisedTweets);
          requestInFlight = false;
        }
      });
    }
  }, INTERVAL);

  return (
    <>
      <Header />
      {tweets.length ? (
        <>
          {tweets.map(({ id, image, text, username }) => (
            <Tweet key={id} image={image} text={text} username={username} />
          ))}
        </>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "1rem",
          }}
        >
          Loading Tweets...
        </div>
      )}
    </>
  );
};

export default App;
