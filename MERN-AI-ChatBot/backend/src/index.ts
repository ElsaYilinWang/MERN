import app from "./app.js";
import connectToDatabase from "./db/connection.js";

// create routing

// GET -
// PUT - 
// POST -
// DELETE -



app.put("/hello", (req, res, next) => {
  console.log(req.body.name);
  return res.send("Hello");
})

app.post("/hello", (req, res, next) => {
  console.log(req.body.name);
  return res.send("Hello");
});

app.get("/hello", (req, res, next)=> {
  return res.send("Hello");
});

// dynamic routing
app.delete("/user/:uid", (req, res, next) => {
  console.log(req.params.uid);
  return res.send("Deleted!")
  
})

// connections and listeners
const PORT=process.env.PORT || 5000;
connectToDatabase()
  .then( () => {
  app.listen(5000, () => console.log("Server Open & Connected To Database"))
})
  .catch((err) => console.log(err));

