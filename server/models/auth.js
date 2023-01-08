import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    about: { type: String, default: '' },
    tags: { type: [String] },
    joinedOn: { type: Date, default: Date.now },
    planOpted: { type: String, default: 'Free', required: true },
    planOptedOn: { type: Date },
    noOfQuestions:  {type: Number, default:1, required:true}
})

export default mongoose.model('User', userSchema)