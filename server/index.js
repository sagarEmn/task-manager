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

const tasks = [
  { id: 1, title: "buy milk", done: false },
  {
    id: 2,
    title: "make tea",
    done: false,
  },
];

// PUT method for id placeholder

app.put("/tasks/:id", (req, res) => {
  const convertedID = parseInt(req.params.id);

  if (!Number.isInteger(convertedID) || convertedID <= 0) {
    return res.status(400).json({
      error: "Please enter valid Number for ID",
    });
  }

  // return the task mentioned in the URL

  const taskFound = tasks.find((task) => task.id === convertedID);

  if (!taskFound) {
    return res.status(404).json({
      error: `Task ${convertedID} not found.`,
    });
  }
  res.json({
    "req.body": req.body,
    "task found": taskFound,
  });
});
