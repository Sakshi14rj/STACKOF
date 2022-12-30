import * as api from '../api'

export const generateOTP = async(email) =>{
    try {
        const { data } = await api.generateOTP(email)
        return data
    } catch (error) {
        console.log('src actions verifyOTP generateOTP',error)
    }
}

export const verifyOTP = async (email,recvOTP) => {
    try {
        const { data } = await api.verifyOTP(email,recvOTP)
        return data
    } catch (error) {
        console.log('src actions verifyOTP verifyOTP',error)
    }
}
