import express from "express";
import { getUser, getUserFriends, addRemoveFriend } from "../controllers/users.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

// read
router.get("/:id", verifyToken, getUser);
router.get("/:id/friends", verifyToken, getUserFriends);
// router.get("/:id/sports", verifyToken, getUserSports);
// router.get("/:id/teams", verifyToken, getUserTeams);

// update
router.patch("/:id/:friendId", verifyToken, addRemoveFriend);
// router.patch("/:id/:sportId", verifyToken, addRemoveSport);
// router.patch("/:id/:teamId", verifyToken, addRemoveTeam);

export default router;
