const mongoose = require('mongoose');

const GallerySchema = new mongoose.Schema({
    img: {
        data: Buffer,
        contentType: String,
        filename: String,
    },
});

module.exports = mongoose.model('Gallery', GallerySchema);