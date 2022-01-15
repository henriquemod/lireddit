import { EntityManager, IDatabaseDriver, Connection } from "@mikro-orm/core";
declare module "express-session" {
  interface Session {
    userId: number;
  }
}
export type MyContext = {
  em: EntityManager<IDatabaseDriver<Connection>>;
  req: Express.Request;
  res: Express.Response;
};
