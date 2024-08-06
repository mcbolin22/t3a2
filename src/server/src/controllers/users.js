import User from "../models/User.js";

// read
export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getUserFriends = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);

    const friends = await Promise.all(
      user.friends.map((id) => User.findById(id))
    );
    const formattedFriends = friends.map(
      ({ _id, firstName, lastName, occupation, location, picturePath }) => {
        return { _id, firstName, lastName, occupation, location, picturePath };
      }
    );
    res.status(200).json(formattedFriends);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getUserSports = async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.findById(id);
  
      const sports = await Promise.all(
        user.sports.map((id) => User.findById(id))
      );
      const formattedSports = sports.map(
        ({ _id, firstName, lastName, occupation, location, picturePath }) => {
          return { _id, firstName, lastName, occupation, location, picturePath };
        }
      );
      res.status(200).json(formattedSports);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  };

  export const getUserTeams = async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.findById(id);
  
      const teams = await Promise.all(
        user.teams.map((id) => User.findById(id))
      );
      const formattedTeams = teams.map(
        ({ _id, firstName, lastName, occupation, location, picturePath }) => {
          return { _id, firstName, lastName, occupation, location, picturePath };
        }
      );
      res.status(200).json(formattedTeams);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  };

// update
export const addRemoveFriend = async (req, res) => {
  try {
    const { id, friendId } = req.params;
    const user = await User.findById(id);
    const friend = await User.findById(friendId);

    if (user.friends.includes(friendId)) {
      user.friends = user.friends.filter((id) => id !== friendId);
      friend.friends = friend.friends.filter((id) => id !== id);
    } else {
      user.friends.push(friendId);
      friend.friends.push(id);
    }
    await user.save();
    await friend.save();

    const friends = await Promise.all(
      user.friends.map((id) => User.findById(id))
    );
    const formattedFriends = friends.map(
      ({ _id, firstName, lastName, occupation, location, picturePath }) => {
        return { _id, firstName, lastName, occupation, location, picturePath };
      }
    );

    res.status(200).json(formattedFriends);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const addRemoveSport = async (req, res) => {
    try {
      const { id, sportId } = req.params;
      const user = await User.findById(id);
      const sport = await User.findById(sportId);
  
      if (user.sport.includes(sportId)) {
        user.sports = user.sports.filter((id) => id !== sportId);
      } else {
        user.sports.push(sportId);
      }
      await user.save();
  
      const sports = await Promise.all(
        user.sports.map((id) => User.findById(id))
      );
      const formattedSports = sports.map(
        ({ _id, firstName, lastName, occupation, location, picturePath }) => {
          return { _id, firstName, lastName, occupation, location, picturePath };
        }
      );
  
      res.status(200).json(formattedSports);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  };
  
  export const addRemoveTeam = async (req, res) => {
    try {
      const { id, teamId } = req.params;
      const user = await User.findById(id);
      const team = await User.findById(teamId);
  
      if (user.team.includes(teamId)) {
        user.teams = user.teams.filter((id) => id !== teamId);
      } else {
        user.teams.push(teamId);
      }
      await user.save();
  
      const teams = await Promise.all(
        user.teams.map((id) => User.findById(id))
      );
      const formattedTeams = teams.map(
        ({ _id, firstName, lastName, occupation, location, picturePath }) => {
          return { _id, firstName, lastName, occupation, location, picturePath };
        }
      );
  
      res.status(200).json(formattedTeams);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  };
  