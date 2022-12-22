import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

import users from '../models/auth'

export const signup = async (req, res) => {
    const { name, email, password } = req.body
    try {
        const existinguser = await users.findOne({ email })
        if (existinguser) {
            console.log('signup',req.body);
            return res.status(404).json({message:"User already exists."})
        }
        
        const hashedPassword = await bcrypt.hash(password,12)
        const newUser = await users.create({name,email,password:hashedPassword})
        const token = jwt.sign({ email: newUser.email, id: newUser._id }, "test",{expiresIn:'1h'})
        console.log('signup',newUser);
        res.status(200).json({result:newUser,token})

    } catch (error) {
        res.status(500).json({message:error+' auth - controller'})
    }
}
export const login = async (req, res) => {
    const { email, password } = req.body
    try {
        const existinguser = await users.findOne({ email })
        // console.log('login auth.js controllers',existinguser);
        if (!existinguser) {
            return res.status(404).json({message:"User Doesn't exist."})
        }

        const isPasswordCrt = await bcrypt.compare(password,existinguser.password)
        if (!isPasswordCrt) {
            return res.status(404).json({message:'Invalid Credentials'})
        }
        
        const token = jwt.sign({ email: existinguser.email, id: existinguser._id }, process.env.JWT_SECRET,{expiresIn:'1h'})
        res.status(200).json({ result: existinguser, token })
        
    } catch (error) {
        res.status(500).json({message:error+' auth - controller'})
    }
}