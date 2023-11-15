const Admin = require('../models/Admin');
const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10);

module.exports = {
    createAdmin: async (req, res) => {
        try {
            console.log(req.body);
            const { email, password } = req.body;
            if (!email || !password) {
                return res.status(400).json({ error: 'Both email and password are required.' });
            }
            const hashedPassword = bcrypt.hashSync(password, salt);
            const admin = await Admin.create({
                email,
                password: hashedPassword,
            });
            res.json(admin);
        } catch(err) {
            console.log(err);
            res.status(400).json('An error occured during registration.');
        }
    },
    getAdminById: async (req, res) => {
        try {
            const id = req.params.id; 
            if (!id) {
                return res.status(400).json({ error: 'Admin ID is required.' });
            }
            const admin = await Admin.findById({ _id: id });
            console.log(admin)
            if (!admin) {
                return res.status(404).json({ error: 'Admin not found.' });
            }
            res.json(admin);
        } catch (err) {
            console.log(err);
            res.status(500).json('An error occurred while fetching admin information.');
        }
    },
};