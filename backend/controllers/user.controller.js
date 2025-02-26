import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
    try {
      
        const loggedInUserId = req.user._id;

        const allUsers = await User.find({ _id: { $ne: loggedInUserId } });


  } catch (error) {
    console.log("Error in getUsersForSidebar controller: ", error.message);
    res.status(500).json({ error: "Internal Server error" });
  }
};
