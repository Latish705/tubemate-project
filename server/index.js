import { dbConfig } from "./config/dbConfig.js";
import app from "./app.js";

const PORT = process.env.PORT || 8080;

dbConfig()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`⚙️ Server started successfully at http://localhost:${PORT}`);
    });
  })
  .catch((er) => {
    console.log("MONGO db connection failded !!!", err);
  });
