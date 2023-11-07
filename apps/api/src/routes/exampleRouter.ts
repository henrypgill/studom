import { Router } from "express";

const router = Router();

router.get("/", async (_req, res) => {
  try {
    const data = { message: "Hello from your api" };
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Internal server error, check server logs",
    });
  }
});

export const exampleRouter = router;
