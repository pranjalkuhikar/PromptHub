import app from "./src/app";
import config from "./src/configs/config";
import connectDB from "./src/db/db";

const PORT = config.PORT;

connectDB();

app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
