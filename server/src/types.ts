import { EntityManager, IDatabaseDriver, Connection } from "@mikro-orm/core";
import { Redis } from "ioredis";
declare module "express-session" {
  interface Session {
    userId: number;
  }
}
export type MyContext = {
  em: EntityManager<IDatabaseDriver<Connection>>;
  req: Express.Request;
  res: Express.Response;
  redis: Redis;
};
