import app from "./src/app.ts";
import config from "./src/configs/config.ts";

const PORT = config.PORT || 4000;

app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
