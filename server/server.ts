import app from "./src/app.ts";

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
