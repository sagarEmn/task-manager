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

app.get("/", (req, res) => {
  res.send("Get method working");
});

app.get("/hehe", (req, res) => {
  res.send("Hehe sent back");
});

app.post('/test', (req, res) => {
  res.json({
    received: req.body, 
    type: typeof req.body
  });
});

app.put('/tasks/:id', (req, res) => {
  res.json({
    received: req.body, 
    params: req.params,
    type: typeof req.body,
    typeofparams: typeof req.params.id
  })
})