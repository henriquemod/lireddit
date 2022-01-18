import { Redis } from "ioredis";
declare module "express-session" {
  interface Session {
    userId: number;
  }
}
export type MyContext = {
  req: Express.Request;
  res: Express.Response;
  redis: Redis;
};
