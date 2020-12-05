import { random, internet } from "faker";

export type Tweet = {
  id: number;
  image: string;
  text: string;
  username: string;
  timeStamp: number;
};

export type Product = {
  id: number;
  title: string;
  subtitle: string;
  thumbnail: string;
};

export const testProduct = (): Product => ({
  id: random.number(),
  title: random.word(),
  subtitle: random.word(),
  thumbnail: internet.url(),
});
