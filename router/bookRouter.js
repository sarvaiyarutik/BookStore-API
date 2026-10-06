
import express from "express";
import bookController from "../controller/bookController.js"
import upload from "../middleware/upload.js";

const router = express.Router();

router.post(
    "/add",
    upload.single("bookImg"),
    bookController.add
);

router.get("/getAll",bookController.getAll);
router.get("/:id",bookController.BookFindById);
router.delete("/:id",bookController.BookDelete)
router.put("/:id",upload.single("bookImg"),bookController.bookUpdate);

export default router;