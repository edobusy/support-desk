const express = require('express')
const router = express.Router()
const {
  registerUser,
  loginUser,
  getMe,
} = require('../controllers/userController')

const { protect } = require('../middleware/authMiddleware')

// Following REST, the simple '/' for post
// requests adds elements to the selected collection
router.post('/', registerUser)

// Because we linked this router to /api/users, this route will
// concatenate with that, making the final
// route /api/users/login for this endpoint
router.post('/login', loginUser)

router.get('/me', protect, getMe)

module.exports = router
