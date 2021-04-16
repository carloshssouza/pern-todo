import express, { urlencoded } from "express";
import cors from "cors";
import routes from "./routes/routes.js";

const app = express();

//mddleware

app.use(cors());
app.use(express.json());

//Routes
app.use(routes);

app.listen(5000, () => {
  console.log("Server has started on port 5000");
});
