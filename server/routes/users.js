import express from 'express'
import { login, signup } from '../controllers/auth'
import {getAllUsers,updateProfile} from '../controllers/users'
import auth from '../middlewares/auth'

const router = express.Router()

router.post('/signup', signup)
router.post('/login', login)

router.get('/getAllUsers', getAllUsers)
router.patch('/update/:id', auth, updateProfile)

export default router