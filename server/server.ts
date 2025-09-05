import app from "./src/app.ts";
import config from "./src/configs/config.ts";
import connectDB from "./src/db/db.ts";

const PORT = config.PORT;

connectDB();

app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
