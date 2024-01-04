import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
    {
        username: {
            type: String,
            require: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true
        },
        email: {
            type: String,
            require: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true
        },
        fullName: {
            type: String,
            require: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        avatar: {
            type: String, // cloudinary url
            require: true,
        },
        coverImage: {
            type: String, // cloudinary url
            require: true,
        },
        password: {
            type: String,
            require: true
        },
        watchHistory: [
            {
                type: Schema.Types.ObjectId,
                ref: "Video"
            }
        ],
        refreshToken: {
            type: String
        }

    }, {
    timestamps: true
}
)

export const User = mongoose.model("User", userSchema)