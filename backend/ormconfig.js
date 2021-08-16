const prefix = (path) => {
  let prefix = null;
  switch (process.env.NODE_ENV) {
    // ts-jest registers ts-node
    case "test":
      prefix = "src";
      break;
    // development uses tsc-watch now
    case "development":
    case "production":
    default:
      prefix = "dist";
      break;
  }

  return `${prefix}/${path}`;
};

const config = {
  type: "mysql",
  host: process.env.DBHOST,
  port: Number(process.env.DBPORT),
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  synchronize: false,
  logging: false,
  entities: [prefix("{entity,domain,projection}/**/*.*")],
  migrations: [prefix("migration/**/*.*")],
  subscribers: [prefix("{subscriber,domain,projection}/**/*.*")],
  cli: {
    entitiesDir: prefix("{entity,domain,projection}"),
    migrationsDir: prefix("migration"),
    subscribersDir: prefix("{subscriber,domain,projection}"),
  },
};
module.exports = config;
