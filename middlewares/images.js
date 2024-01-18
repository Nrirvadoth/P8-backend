const multer = require('multer')
const admin = require('firebase-admin');
const serviceAccount = require('../config/firebase.config.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: 'portfolio-9f245.appspot.com',
});

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

exports.multerMiddleware = upload.single('image')

exports.firebaseUpload = async (req, res, next) => {
    console.log("multer")
    console.log("req.files =" + req.files)
    console.log("req.file =" + req.file)
    try {
    console.log("try upload firebase")
      const bucket = admin.storage().bucket();
      const imageBuffer = req.file.buffer;
      const imageName = req.file.originalname;
      const file = bucket.file(imageName);
      const result = await file.save(imageBuffer, { contentType: 'image/jpeg' });
      console.log('Image uploaded successfully:', result);
      next()
    } catch (error) {
      console.error('Error uploading image:', error);
      res.status(500).send('Error uploading image.');
    }
  }; 

/* exports.optimize = async (req, res, next) => {
  if (req.file) {
  const { originalname, buffer } = req.file
  let name = originalname.split(' ').join('_')
  name = name.split('.')[0]
  name += Date.now() + '.webp'

  req.file.filename = name

  await sharp(buffer)
    .webp()
    .toFile(`./images/${name}`)
  }
  
  next()
} */