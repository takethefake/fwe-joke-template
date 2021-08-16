import { RequestHandler } from "express";
import { Joke } from "../entity/joke.model";

type GetAllJokesResponseBody = {
  jokes: Joke[];
};

type GetJokeResponseBody = {
  joke: Joke;
};

type CreateJokeResponseBody = {
  createdJoke: Joke;
};

type CreateJokeRequestBody = Omit<Joke, "id">;

type UpdateJokeResponseBody = {
  createdTask: Joke;
};

type UpdateJokeRequestBody = Partial<Omit<Joke, "id">>;

export const getAllJokes: RequestHandler<{}, GetAllJokesResponseBody> = (
  req,
  res
) => {};
export const getJoke: RequestHandler<{ id: string }, GetJokeResponseBody> = (
  req,
  res
) => {};
export const updateJoke: RequestHandler<
  { id: string },
  UpdateJokeResponseBody,
  UpdateJokeRequestBody
> = (req, res) => {};

export const createJoke: RequestHandler<
  {},
  CreateJokeResponseBody,
  CreateJokeRequestBody
> = (req, res) => {};
export const deleteJoke: RequestHandler<{ id: string }, {}> = (req, res) => {};
