import { promiseRetry } from "@alwaystudios/as-utils";
import request from "superagent";
import { Tweet } from "./types";

const BASE_URL = "";
const BATCH_SIZE = 10;

export const getTweets = async (lastId?: number): Promise<Tweet[]> => {
  const url = lastId
    ? `${BASE_URL}/api?count=${BATCH_SIZE}&afterId=${lastId}`
    : `${BASE_URL}/api?count=${BATCH_SIZE}`;
  const result = await promiseRetry<Tweet[]>()(() =>
    request.get(url).then(({ body }) => {
      return body;
    })
  ).catch((error: any) => {
    console.error("The Twitter feed not available", error);
  });

  return result || [];
};

export const resetApi = async () => {
  await request.get(`${BASE_URL}/reset`);
};
