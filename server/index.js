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

// PUT method for id placeholder

app.put("/tasks/:id", (req, res) => {
  res.json({
    reqbody: req.body,
  });
});

const tasks = [
  { id: 1, title: "buy milk", done: false },
  {
    id: 2,
    title: "make tea",
    done: false,
  },
];

const matchingTask = tasks.find((item) => item.id === 2);

console.log(matchingTask);
