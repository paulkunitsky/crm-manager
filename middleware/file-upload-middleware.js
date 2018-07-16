const multer = require('multer');

const storage = multer.diskStorage({
  destination(req, file, callback) {
    callback(null, 'uploads/');
  },
  filename(req, file, callback) {
    callback(null, `${Date.now()}-${file.originalname}`);
  },
});

function fileFilter(req, file, callback) {
  if (file.mimetype === 'image/png' || file.mimetype === 'image/jpeg') {
    callback(null, true);
  } else {
    callback(null, false);
  }
};

const limits = {
  fileSize: 1024 * 1024 * 5
};

module.exports.fileUploadMiddleware = multer({storage: storage, fileFilter: fileFilter, limits: limits});