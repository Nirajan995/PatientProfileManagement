import multer from "multer";

const multerFilter = (req, file, cb) => {
   if (file.mimetype.startsWith("image")) {
      cb(null, true);
   } else {
      cb("Please upload only images.", false);
   }
};

const storage = multer.diskStorage({
   destination: (req, file, cb) => {
      cb(null, "./public/uploads/");
   },
   filename: (req, file, cb) => {
      cb(null, Date.now() + "--" + file.originalname);
   },
});

//Check filetype and filter
// const fileFilter = (req, file, cb) => {
//   const fileExtension = /jpeg|jpg|png|gif/;
//   // const extname = fileExtension.test(path.extname(file.originalname).toLowerC);
// };

export const upload = multer({
   storage: storage,
   limits: {
      fileSize: 1024 * 1024 * 5,
   },
   fileFilter: multerFilter
});