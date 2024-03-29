import express, { Request, Response } from "express";
import { UserCreateUseCase } from "../application/UserCreateUseCase";

const app = express();

app.post("/users/create", async (req: Request, res: Response) => {
  try {
    if (!req.params.name || !req.params.email) {
      res.status(400).json({ result: "INVALID", message: "request invalid" });
    }
    const result = await new UserCreateUseCase().execute(req.params.name, req.params.email);
    res.status(200).json({ result: "SUCCESS", message: "User id: " + result.toString() });
  } catch (error) {
    res.status(500).json({ result: "ERROR", message: error.message });
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
