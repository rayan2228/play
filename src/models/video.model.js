import mongoose, { Schema } from "mongoose";
import { boolean } from "webidl-conversions";

const videoSchema = new Schema({
    videoFile: {
        type: String, //cloudinary url
        require: true,
    },
    thumbnail: {
        type: String, //cloudinary url
        require: true,
    },
    title: {
        type: String,
        require: true,
        trim: true,
    },
    description: {
        type: String,
        require: true,
    },
    duration: {
        type: Number,
        default: 0
    },
    views: {
        type: Number,
        default: 0
    },
    isPublished: {
        type: boolean,
        default: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
}, { timestamps: true })

export const Videos = mongoose.Schema("Videos", videoSchema)