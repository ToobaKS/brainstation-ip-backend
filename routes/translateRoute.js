import express from "express";

const router = express.Router();

router.delete("/:id", (req, res) => {
	// Respond with a message that the note has been deleted
	res.send("This will delete the note whose ID is " + req.params.id);
});


export default router;