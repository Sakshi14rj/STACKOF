import users from '../models/auth'
import mongoose from 'mongoose'
export const getAllUsers = async (req, res) => {
    try {
        const allUsers = await users.find()
        const allUserDetails = []
        allUsers.forEach(users => {
            allUserDetails.push({...users._doc})
        });
        // console.log(allUserDetails)
        res.status(200).json(allUserDetails)
    } catch (error) {
        console.log('controllers, users getAllUsers',error);
    }
}

export const updateProfile = async (req, res) => {
    const _id = req.params.id
    const { name, about, tags } = req.body
    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send('question unavailable')
    }
    try {
        const updatedProfile = await users.findByIdAndUpdate(_id,{$set:{'name':name,'about':about,'tags':tags}},{new:true})
        res.status(200).json(updatedProfile)
    } catch (error) {
        console.log('controllers, users updateProfile',error);
    }
}