import "reflect-metadata";
import express from "express";
import { createConnection } from "typeorm";
import cors from "cors";
import * as DonationController from "./src/api/DonationController";

const PORT = 3000;

async function startup() {
  await createConnection();
  const app = express();

  app.use(express.json());
  app.use(cors());

  app.post("/donation", DonationController.save);
  app.get("/donation", DonationController.getAll);

  app.listen(PORT, () => {
    console.log("App running on port " + 3000);
  });
}

startup();
