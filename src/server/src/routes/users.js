import express from "express";
import { getUser, getUserFriends, addRemoveFriend, addRemoveSport, addRemoveTeam } from "../controllers/users.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

// read
router.get("/:id", verifyToken, getUser);
router.get("/:id/friends", verifyToken, getUserFriends);

// update
router.patch("/:id/:friendId", verifyToken, addRemoveFriend);
router.patch("/:id/:sportId", verifyToken, addRemoveSport);
router.patch("/:id/:teamId", verifyToken, addRemoveTeam);

export default router;
