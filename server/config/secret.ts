// server/secret.ts

import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve("../.env") });

const PORT = process.env.PORT || 5000;

export default PORT;
