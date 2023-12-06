// configuracion de variables de entorno

import { config } from "dotenv";

config();
export const PORT = process.env.PORT || 3150

export const DB_HOST = process.env.DB_HOST || "localhost"
export const DBPORT = process.env.DBPORT || 3306
export const DB_USER = process.env.DB_USER || "root"
export const DB_PASSWORD = process.env.DB_PASSWORD || "4688"
export const DB_DATABSES = process.env.DB_DATABSES || "companydb"

 