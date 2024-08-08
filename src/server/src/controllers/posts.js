// import Post from "../models/Post.js";
// import User from "../models/User.js";

// // create
// export const createPost = async (req, res) => {
//   try {
//     const { userId, description, picturePath } = req.body;
//     const user = await User.findById(userId);
//     const newPost = new Post({
//       userId,
//       firstName: user.firstName,
//       lastName: user.lastName,
//       location: user.location,
//       description,
//       userPicturePath: user.picturePath,
//       picturePath,
//       likes: {},
//       comments: [],
//     });
//     await newPost.save();

//     const post = await Post.find();
//     res.status(201).json(post);
//   } catch (err) {
//     res.status(409).json({ message: err.message });
//   }
// };

// // read
// export const getFeedPosts = async (req, res) => {
//   try {
//     const post = await Post.find();
//     res.status(200).json(post);
//   } catch (err) {
//     res.status(404).json({ message: err.message });
//   }
// };

// export const getUserPosts = async (req, res) => {
//   try {
//     const { userId } = req.params;
//     const post = await Post.find({ userId });
//     res.status(200).json(post);
//   } catch (err) {
//     res.status(404).json({ message: err.message });
//   }
// };

// // update
// export const likePost = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { userId } = req.body;
//     const post = await Post.findById(id);
//     const isLiked = post.likes.get(userId);

//     if (isLiked) {
//       post.likes.delete(userId);
//     } else {
//       post.likes.set(userId, true);
//     }

//     const updatedPost = await Post.findByIdAndUpdate(
//       id,
//       { likes: post.likes },
//       { new: true }
//     );

//     res.status(200).json(updatedPost);
//   } catch (err) {
//     res.status(404).json({ message: err.message });
//   }
// };

// import Post from "../models/Post.js";
// import User from "../models/User.js";

// // create
// export const createPost = async (req, res) => {
//   try {
//     const { userId, description, picturePath } = req.body;
//     const user = await User.findById(userId);
//     const newPost = new Post({
//       userId,
//       firstName: user.firstName,
//       lastName: user.lastName,
//       location: user.location,
//       description,
//       userPicturePath: user.picturePath,
//       picturePath,
//       likes: new Map(), // Initialize likes as a Map
//       comments: [],
//     });
//     await newPost.save();

//     const post = await Post.find();
//     res.status(201).json(post);
//   } catch (err) {
//     res.status(409).json({ message: err.message });
//   }
// };

// // read
// export const getFeedPosts = async (req, res) => {
//   try {
//     const post = await Post.find();
//     res.status(200).json(post);
//   } catch (err) {
//     res.status(404).json({ message: err.message });
//   }
// };

// export const getUserPosts = async (req, res) => {
//   try {
//     const { userId } = req.params;
//     const post = await Post.find({ userId });
//     res.status(200).json(post);
//   } catch (err) {
//     res.status(404).json({ message: err.message });
//   }
// };

// // update
// export const likePost = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { userId } = req.body;
//     const post = await Post.findById(id);
//     const isLiked = post.likes.get(userId);

//     if (isLiked) {
//       post.likes.delete(userId);
//     } else {
//       post.likes.set(userId, true);
//     }

//     const updatedPost = await Post.findByIdAndUpdate(
//       id,
//       { likes: post.likes },
//       { new: true }
//     );

//     // Convert the Map to an object before sending the response
//     const updatedPostObject = updatedPost.toObject();
//     updatedPostObject.likes = Object.fromEntries(updatedPost.likes);

//     res.status(200).json(updatedPostObject);
//   } catch (err) {
//     res.status(404).json({ message: err.message });
//   }
// };

import Post from "../models/Post.js";
import User from "../models/User.js";

// Create a new post
export const createPost = async (req, res) => {
  try {
    const { userId, description, picturePath } = req.body;
    const user = await User.findById(userId);
    const newPost = new Post({
      userId,
      firstName: user.firstName,
      lastName: user.lastName,
      location: user.location,
      description,
      userPicturePath: user.picturePath,
      picturePath,
      likes: new Map(), // Initialize likes as a Map
      comments: [],
    });
    await newPost.save();

    const post = await Post.find();
    res.status(201).json(post);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

// Get all feed posts
export const getFeedPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    // Convert likes Map to an object for each post
    const postsWithLikesObject = posts.map(post => {
      const postObject = post.toObject();
      postObject.likes = Object.fromEntries(post.likes);
      return postObject;
    });
    res.status(200).json(postsWithLikesObject);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

// Get posts by a specific user
export const getUserPosts = async (req, res) => {
  try {
    const { userId } = req.params;
    const posts = await Post.find({ userId });
    // Convert likes Map to an object for each post
    const postsWithLikesObject = posts.map(post => {
      const postObject = post.toObject();
      postObject.likes = Object.fromEntries(post.likes);
      return postObject;
    });
    res.status(200).json(postsWithLikesObject);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

// Like or unlike a post
export const likePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.body;
    console.log('Post ID:', id);
    console.log('User ID:', userId);


    const post = await Post.findById(id);
    const isLiked = post.likes.get(userId);

    if (isLiked) {
      post.likes.delete(userId);
    } else {
      post.likes.set(userId, true);
    }

    const updatedPost = await Post.findByIdAndUpdate(
      id,
      { likes: post.likes },
      { new: true }
    );

    // Convert the Map to an object before sending the response
    const updatedPostObject = updatedPost.toObject();
    updatedPostObject.likes = Object.fromEntries(updatedPost.likes);

    res.status(200).json(updatedPostObject);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
