const express = require("express");
const Routes = require("./Routes");
const app = express();
const jwt = require("jsonwebtoken");
const cors = require("cors");

const port = 3000;

app.use(express.json());

app.use("/api/v1/", Routes);
app.use(cors({ origin: ["http://localhost:8081/"] }));
app.listen(port, () => console.log(`App Listening on port ${port}`));
