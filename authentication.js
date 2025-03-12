const express = require('express');
const jwt = require("jsonwebtoken");
const app = express();
app.use(express.json());
const users = []; 
app.post("/register", (req, res) => {
    const { username, password } = req.body;
    const userexists = users.find((user) => user.username === username);
    if (userexists) {
        return res.status(400).json({ message: 'User already exists' });
    }
    users.push({ username, password });
    res.status(201).json({ message: "User registered successfully" });
});
app.post("/login", (req, res) => {
    const { username, password } = req.body;
    if (username === 'cvr' && password === 'cvr') {
        const token = jwt.sign({ username }, "cvrcollege", { expiresIn: '1h' });
        res.json({ token });
    } else {
        res.status(400).json({ message: "Invalid user" });
    }
});
app.get("/protected", authenticateToken, (req, res) => {
    res.json({ message: "Welcome to my home page" });
});
app.get("/students", (req, res) => {
    res.json({ message: "Hai" });
});
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
        return res.status(403).json({ message: "No token provided, authorization denied" });
    }
    const token = authHeader.split(' ')[1];
    jwt.verify(token, "cvrcollege", (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: "Invalid token. Login failed" });
        }
        req.user = decoded; 
        next();  
    });
}
app.listen(2000, () => {
    console.log("Server started on port 2000...");
});