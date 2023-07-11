import mongoose from 'mongoose'

const OTPSchema = mongoose.Schema({
    email: { type: String, required: true },
    otp: { type: String, required: true },
    expiresIn: { type: Date, required: true }
  });
  
  const OTP = mongoose.model('OTP', OTPSchema);
  
  // Example usage
  const newOTP = new OTP({
    email: 'example@example.com',
    otp: '123456',
    expiresIn: new Date()
  });
  
  newOTP.save()
    .then(() => {
      console.log('OTP saved successfully');
    })
    .catch((error) => {
      console.error('Error saving OTP:', error);
    });
  