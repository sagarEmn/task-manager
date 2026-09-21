import express from "express";

const app = express();

app.use(express.json());

const PORT = 3000;

const server = app.listen(PORT, () => {
  console.log("Express server listening on PORT:", PORT);
});

server.on("error", (err) => {
  if (err.code === "EADDRINUSE") {
    console.log(`Port ${PORT} already in use`);
  } else {
    console.log("Error in server setup", err);
  }
});
