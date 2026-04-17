const express = require("express");
const app = express();

app.use(express.json());

let users = [];


app.post("/users", (req, res) => {
    const user = {
        id: users.length + 1,
        name: req.body.name
    };
    users.push(user);
    res.json(user);
});


app.get("/users", (req, res) => {
    res.json(users);
});


app.put("/users/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);

    if (user) {
        user.name = req.body.name;
        res.json(user);
    } else {
        res.json({ message: "User not found" });
    }
});


app.delete("/users/:id", (req, res) => {
    const id = parseInt(req.params.id);
    users = users.filter(u => u.id !== id);
    res.json({ message: "User deleted" });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});