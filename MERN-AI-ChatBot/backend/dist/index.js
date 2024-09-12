import express from "express";
// set up an application
const app = express();
// create routing
// GET -
// PUT - 
// POST -
// DELETE -
// middleware
app.use(express.json());
app.put("/hello", (req, res, next) => {
    console.log(req.body.name);
    return res.send("Hello");
});
app.post("/hello", (req, res, next) => {
    console.log(req.body.name);
    return res.send("Hello");
});
app.get("/hello", (req, res, next) => {
    return res.send("Hello");
});
// dynamic routing
app.delete("/user/:uid", (req, res, next) => {
    console.log(req.params.uid);
    return res.send("Deleted!");
});
// connections and listeners
app.listen(5000, () => console.log("Server Open"));
//# sourceMappingURL=index.js.map