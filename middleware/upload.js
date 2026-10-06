import multer from "multer";
import fs from "fs";

const uploadDir = "uploads";

if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({

    destination(req, file, cb) {
        cb(null, uploadDir);
    },

    filename(req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {

    if (
        file.mimetype === "image/jpeg" ||
        file.mimetype === "image/png"
    ) {
        cb(null, true);
    } else {
        cb(new Error("Invalid file type. Only jpeg and png allowed"));
    }
};

const upload = multer({
    storage,
    fileFilter,
    limits: {
        fileSize: 5 * 1024 * 1024
    }
});

export default upload;