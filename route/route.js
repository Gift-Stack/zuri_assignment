const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const { check, validationResult } = require('express-validator');

const User = require('../model/User');
const { find, findOne } = require('../model/User');

// POST
router.post(
    '/',
    [
        check('name', 'name is required').notEmpty(),
        check('email', 'Invalid email').isEmail(),
        check('country', 'Country is required').notEmpty(),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { name, email, country } = req.body;
        try {
            let user = await User.findOne({ email });
            if (user) {
                return res.status(400).json({ msg: 'User already exists' });
            }
            user = new User({
                name,
                email,
                country,
            });
            await user.save();
            res.json({
                message:
                    res.statusCode === 200 ? 'Successful' : 'Not successful',
                data: {
                    name,
                    email,
                    country,
                },
            });
        } catch (err) {
            res.status(err.status);
            return res.send(err.message);
        }
    },
);

// GET
router.get(
    '/',
    [
        check('email', 'Please enter your email to get your data').notEmpty(),
        check('email', 'Please enter a valid email').isEmail(),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { email } = req.body;
        try {
            let user = await User.findOne({ email });
            if (!user) res.status(401).json({ msg: 'User does not exist' });
            return res.status(200).json(user);
        } catch (err) {
            res.status(500).json({ msg: err.message });
        }
    },
);

// PUT
router.put('/:id', async (req, res) => {
    const { name, email, country } = req.body;
    const userFields = {};
    if (name) userFields.name = name;
    if (email) userFields.email = email;
    if (country) userFields.country = country;
    try {
        let user = await User.findById(req.params.id);
        if (!user) res.status(404).json({ msg: 'User not found' });
        user = await User.findByIdAndUpdate(
            req.params.id,
            { $set: userFields },
            { new: true },
        );
        res.json(user);
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
});

// DELETE
router.delete('/:id', async (req, res) => {
    try {
        let user = await User.findById(req.params.id);
        if (!user) res.status(404).json({ msg: 'User not found' });
        user = await User.findByIdAndRemove(req.params.id);
        res.json({ msg: 'Contact Removed' });
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
});

module.exports = router;
