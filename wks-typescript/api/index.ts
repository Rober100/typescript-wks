import { sequelize } from "./src/db/db";
import app from "./src/app";

sequelize
  .sync({ force: false, logging: false })
  .then(() => {
    console.log("Base de datos connect!");
    app.listen(3001, function () {
      console.log("App is listening on port 3001!");
    });
  })
  .catch((err) => console.error(err));
