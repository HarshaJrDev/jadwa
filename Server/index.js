const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3000;
const SECRET_KEY = "your_jwt_secret_key";

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://development1043:cHPCsyekYnOXUslI@cluster0.tvwly.mongodb.net/jadwa?retryWrites=true&w=majority&appName=Cluster0",
  { useNewUrlParser: true, useUnifiedTopology: true }
).then(()=>{
  console.log("Connected to MongoDB");
})

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model("UsersData", UserSchema);

// Registration route
app.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  const userExists = await User.findOne({ email });

  if (userExists) {
    return res.status(400).json({ message: "User already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });

  await newUser.save();

  const token = jwt.sign({ userId: newUser._id }, SECRET_KEY, {
    expiresIn: "1h",
  });
  res.status(201).json({ token, message: "User registered successfully" });
});
app.get("/test", async (req, res) => {
    res.send("hi");
});


// Login route
app.post("/login", async (req, res) => {
    req.post("hi")
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(400).json({ message: "Invalid email or password" });
  }

  const token = jwt.sign({ userId: user._id }, SECRET_KEY, { expiresIn: "1h" });
  res.json({ token });
});

// Protected route
app.get("/protected", (req, res) => {
  const token = req.headers.authorization.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Token invalid or expired" });
    }

    res.json({
      message: "Welcome to the protected route",
      userId: decoded.userId,
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
