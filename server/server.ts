// server/server.ts

import app from "./app";
import PORT from "./config/secret";

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
