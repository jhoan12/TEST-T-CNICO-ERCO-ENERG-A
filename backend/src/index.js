import express from "express";
import cors from "cors";
import morgan from "morgan";
import { connectDb } from "./databae.js";

import route from "./routes/route.js";

connectDb();
const app = express();

app.set("Port", 4000);
app.use(morgan("dev"));
app.use(cors({ origin: "*" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", route);

app.listen(app.get("Port"), () => {
  console.log("servidor escuchando por el puerto", app.get("Port"));
});
