import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

// Register User
export const register = async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            email,
            password,
            // picturePath,
            friends,
            location,
            occupation,
            sports,
            teams
        } = req.body;

        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        const newUser = new User({
            firstName,
            lastName,
            email,
            password: passwordHash,
            // picturePath,
            friends,
            location,
            occupation,
            sports,
            teams,
            viewedProfile: Math.floor(Math.random() * 123),
            braggingRights: Math.floor(Math.random() * 123),
            impressions: Math.floor(Math.random() * 123),
        });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Logging in
export const login = async (req, res) => {
    try {
        console.log(req.body)
        const { email, password } = req.body;
        console.log(email, password)
        const user = await User.findOne({ email: email });
        console.log(user)
        if (!user) return res.status(400).json({ msg: "User does not exist. "});

        
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ msg: "Password is incorrect. "});

        console.log(isMatch)

        const token = jwt.sign({ id: user._id }, process.env.JWT_KEY);
        console.log(`${user}`, `${token}`)

        delete user.password;
        res.status(200).json({ token, user });
    }  catch (err) {
        console.log(err)
        res.status(500).json({ error: err.message });

    }
}