import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import categoryRoutes from "./src/routes/category.routes.js";


const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/categories", categoryRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
