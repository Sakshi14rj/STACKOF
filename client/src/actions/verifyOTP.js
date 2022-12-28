import * as api from '../api'

export const generateOTP = async(email) =>{
    try {
        console.log(email);
        const { data } = await api.generateOTP(email)
        return data
    } catch (error) {
        console.log('src actions verifyOTP generateOTP',error)
    }
}

export const verifyOTP = async (email,recvOTP) => {
    try {
        console.log(email);
        return await (await api.verifyOTP(email,recvOTP)).data
    } catch (error) {
        console.log('src actions verifyOTP verifyOTP',error)
    }
}