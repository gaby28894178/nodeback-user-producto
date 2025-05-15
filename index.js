const express = require("express");
const app = express();
const usersRoutes = require("./routes/usersRoutes");
const productsRoutes = require("./routes/productsRoutes");

app.use(express.json());

app.use("/api/users", usersRoutes);
app.use("/api/products", productsRoutes);

app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});


console.log(fichadato(2))