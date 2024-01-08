import { v2 as cloudinary } from 'cloudinary';
import fs from "fs"
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUNDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_CLOUD_NAME
});

async function uploadFile(localPath) {
    try {
        if (localPath) {
            const response = await cloudinary.uploader.upload(localPath, {
                resource_type: "auto"
            })
            return response
        }
        return null
    } catch (error) {
        fs.unlinkSync(localPath)
        console.error(`CLOUDINARY FILE UPLOAD ${error}`);
        return null
    }
}


export default uploadFile