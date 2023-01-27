import * as NotesController from "../controller/notes";
import express from "express";

const router = express.Router();

router.get("/", NotesController.getNotes);
router.post("/", NotesController.createNote);
router.get("/:noteId", NotesController.getNote);

export default router;
