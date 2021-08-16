import { Router } from "express";
import {
  createJoke,
  deleteJoke,
  getAllJokes,
  getJoke,
  updateJoke,
} from "../controller/joke.controller";

export const jokeRouter = Router({ mergeParams: true });

jokeRouter.get("/", getAllJokes);
jokeRouter.get("/:id", getJoke);
jokeRouter.post("/", createJoke);
jokeRouter.delete("/:id", deleteJoke);
jokeRouter.put("/:id", updateJoke);
