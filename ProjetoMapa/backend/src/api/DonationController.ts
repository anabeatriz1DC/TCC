import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Donation } from "../entity/Donation";

export async function save(request: Request, response: Response) {
  const storeRepository = getRepository(Donation);

  const savedStore = await storeRepository.save(request.body);

  return response.status(200).json(savedStore);
}

export async function getAll(request: Request, response: Response) {
  const storeRepository = getRepository(Donation);

  const allStores = await storeRepository.find();

  return response.json(allStores);
}
