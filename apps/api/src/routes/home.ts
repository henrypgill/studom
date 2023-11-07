import { Router } from "express";

const router = Router();

router.get("/", async (_req, res) => {
  try {
    res.json({
      message: "Welcome to the template bun api!",
      data: "some data",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Internal server error, check server logs",
    });
  }
});

export const homeRouter = router;
