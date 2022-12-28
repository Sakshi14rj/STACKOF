import mongoose from 'mongoose'

const OTPSchema = mongoose.Schema({
    email: { type: String, required: true },
    otp: { type: Number, required: true },
    expiresIn: { type: Date, required:true }
})

export default mongoose.model('OTP', OTPSchema) 