import { Router, Request, Response } from "express";
import { connection } from "../connection/connection";
import { users } from "../entities/users";

const router = Router();


// Get all users
router.get("/", async (req: Request, res: Response) => {
  const usersRepository = connection.getRepository(users);
  const userList = await usersRepository.find();
  res.send(userList);
});


// Create a new user
router.post("/", async (req: Request, res: Response) => {
  const usersRepository = connection.getRepository(users);
  const user = usersRepository.create(req.body);
  const results = await usersRepository.save(user);

  res.json({
    message: "success",
    payload: results,
  });
});

export default router;
