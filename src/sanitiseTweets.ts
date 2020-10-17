import { Tweet } from "./types";

export const sanitiseTweets = (tweets: Tweet[] = []) =>
  tweets.reduce((acc: Tweet[], curr: Tweet) => {
    return acc.find((tweet) => tweet.id === curr.id) ? acc : [...acc, curr];
  }, []);
