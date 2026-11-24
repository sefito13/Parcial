import express from "express";
import parcialRoutes from "./routes/parcial.routes";

const app = express();

app.use(express.json());
app.use("/api/v1", parcialRoutes);

export default app;