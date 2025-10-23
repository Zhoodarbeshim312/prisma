import buildServer from "./app";

const server = buildServer();
const PORT = Number(process.env.PORT) || 3000;
const startServer = async () => {
  try {
    await new Promise<void>((resolve, reject) => {
      server
        .listen(
          {
            port: PORT,
            host: "0.0.0.0",
          },
          () => {
            console.log(`${new Date()}`);
            console.log(`Server running at http://localhost:${PORT}`);
            resolve();
          }
        )
        .on("error", (err) => {
          reject(err);
        });
    });
  } catch (error) {
    console.log(`Server crush: ${error}`);
    process.exit(1);
  }
};
startServer();
