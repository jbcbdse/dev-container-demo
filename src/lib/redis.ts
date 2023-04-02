import { createClient } from "redis";
import { REDIS_URI } from "./config";
const getClient = (() => {
  let client: ReturnType<typeof createClient>;
  return async () => {
    if (client) {
      return client;
    }
    client = createClient({ url: REDIS_URI });
    await client.connect();
    return client;
  };
})();

export const getExampleRecord = async () => {
  const client = await getClient();
  await client.set("hello", "world");
  return client.get("hello");
};
