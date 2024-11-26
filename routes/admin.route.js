const User = require('../models/user.model');
const router = require('express').Router();
const mongoose = require('mongoose');
const { roles } = require('../utils/constants');

// Get all users
router.get('/users', async (req, res, next) => {
  try {
    const users = await User.find();
    res.render('manage-users', { users });
  } catch (error) {
    next(error);
  }
});

// View specific user profile
router.get('/user/:id', async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      req.flash('error', 'Invalid User ID');
      return res.redirect('/admin/users');
    }

    const person = await User.findById(id);

    if (!person) {
      req.flash('error', 'User not found');
      return res.redirect('/admin/users');
    }

    res.render('profile', { person });
  } catch (error) {
    next(error);
  }
});

// Update user role
router.post('/update-role', async (req, res, next) => {
  try {
    const { id, role } = req.body;

    // Validation checks
    if (!id || !role) {
      req.flash('error', 'Invalid request');
      return res.redirect('back');
    }

    if (!mongoose.Types.ObjectId.isValid(id)) {
      req.flash('error', 'Invalid User ID');
      return res.redirect('back');
    }

    const validRoles = Object.values(roles);
    if (!validRoles.includes(role)) {
      req.flash('error', 'Invalid role');
      return res.redirect('back');
    }

    if (req.user.id === id && role !== req.user.role) {
      req.flash('error', 'Admins cannot change their own role');
      return res.redirect('back');
    }

    const user = await User.findByIdAndUpdate(id, { role }, { new: true });

    if (!user) {
      req.flash('error', 'User not found');
      return res.redirect('back');
    }

    req.flash('info', `Updated role for ${user.email} to ${user.role}`);
    res.redirect('/admin/users');
  } catch (error) {
    next(error);
  }
});


router.post('/update-status', async (req, res, next) => {
  try {
    console.log('Request Body:', req.body); // Log the incoming request

    const { id, status } = req.body;

    if (!id || !status || !mongoose.Types.ObjectId.isValid(id)) {
      req.flash('error', 'Invalid request');
      console.log('Validation failed');
      return res.redirect('back');
    }

    const validStatuses = ['ACTIVE', 'INACTIVE'];
    if (!validStatuses.includes(status)) {
      req.flash('error', 'Invalid status');
      console.log('Invalid status value');
      return res.redirect('back');
    }

    const user = await User.findByIdAndUpdate(id, { status }, { new: true });
    if (!user) {
      req.flash('error', 'User not found');
      console.log('User not found');
      return res.redirect('back');
    }

    console.log(`Current Status of User (ID: ${id}):`, user.status);

    user.status = status; // Update the status manually
    await user.save();

    console.log('Status updated successfully:', user);
    req.flash('info', `Updated status for ${user.email} to ${user.status}`);
    res.redirect('/admin/users');
  } catch (error) {
    console.error('Error updating status:', error);
    next(error);
  }
});
// Delete user
router.post('/delete-user', async (req, res, next) => {
  try {
    const { id } = req.body;

    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
      req.flash('error', 'Invalid User ID');
      return res.redirect('back');
    }

    // Admin cannot delete themselves
    if (req.user.id === id) {
      req.flash('error', 'Admins cannot delete themselves');
      return res.redirect('back');
    }

    const user = await User.findByIdAndDelete(id);

    if (!user) {
      req.flash('error', 'User not found');
      return res.redirect('back');
    }

    req.flash('info', `User ${user.email} deleted successfully`);
    res.redirect('/admin/users');
  } catch (error) {
    next(error);
  }
});

module.exports = router;
