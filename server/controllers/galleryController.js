const express = require('express');
const router = express.Router();
const Gallery = require('../models/Gallery');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname + '-' + Date.now());
    }
});

const upload = multer({ storage }).single('img');

// Handle the GET request for the image
router.get('/', async (req, res) => {
    try {
      const images = await Gallery.find({});
  
      if (!images) {
        return res.status(404).json({ error: 'No images found in the gallery.' });
      }
  
      res.status(200).json(images);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'An error occurred while fetching images.' });
    }
  });

// Handle the POST request for image upload
router.post('/upload', async (req, res, next) => {
    try {
        upload(req, res, async (err) => {
            if (err) {
              console.error(err);
              return res.status(500).json({ error: 'An error occurred while uploading to the gallery.' });
            }
            
            // Now, req.file should be defined and contain the uploaded file information.
            // Continue with your image creation logic.
            const obj = {
                img: {
                    data: fs.readFileSync(path.join(__dirname, '../uploads/' + req.file.filename)),
                    contentType: 'image/png',
                    filename: req.file.filename,
                }
            };
        
            await Gallery.create(obj);

            res.status(200).json({ message: 'Image uploaded to the gallery successfully.' });
          });
        
        
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'An error occured while uploading the image to the gallery.' });
    }

});

// Handle the PUT request for updating an image by ID
router.put('/edit/:id', async (req, res) => {
    try {
        const imageId = req.params.id;
        const { img } = req.body;

        const updatedData = {
            img,
        };

        const updatedImage = await Gallery.findByIdAndUpdate(imageId, updatedData, { new: true });

        if (!updatedImage) {
            return res.status(404).json({ error: 'Image not found in the gallery.' });
        }

        res.status(200).json({ message: 'Image updated successfully', updatedImage });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'An error occurred while updating the image.' });
    }
});

module.exports = router;