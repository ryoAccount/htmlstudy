import express, { Request, Response } from "express";
import userController from "../DIContainer";

const app = express();

app.post("/users/create", async (req: Request, res: Response) => {
  try {
    if (!req.params.name || !req.params.email) {
      res.status(400).json({ result: "INVALID", message: "request invalid" });
    }
    const result = await userController.create(req.params.name, req.params.email);
    res.status(200).json({ result: "SUCCESS", message: "ok" });
  } catch (error) {
    res.status(500).json({ result: "ERROR", message: error.message });
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
