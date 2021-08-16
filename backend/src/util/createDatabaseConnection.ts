import {
  ConnectionOptions,
  createConnection,
  getConnectionOptions,
} from "typeorm";

/**
 * Connects to our database, retrying up to five times and logging failed
 * connection attempts.
 */
export const createDatabaseConnection = async (
  configOverride: Partial<ConnectionOptions> = {}
) => {
  let retries = 5;
  while (retries) {
    try {
      const config = await getConnectionOptions("default");
      // tslint:disable-next-line: prefer-object-spread
      return await createConnection(Object.assign({}, config, configOverride));
    } catch (err) {
      retries -= 1;
      console.log(`DB-Connection failed. Retries left: ${retries}.`, err);
      // wait 5 seconds
      await new Promise((res) => setTimeout(res, 5000));
    }
  }
  throw new Error("Could not establish a database connection!");
};
