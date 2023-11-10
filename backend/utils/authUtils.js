import bcryptjs from 'bcryptjs';

export const hashPassword = async (password) => {
     try {
        const salt = await bcryptjs.genSalt(10);
        return await bcryptjs.hash(password, salt);
     } catch (error) {
        console.log(error);
     }
}
export const comparePassword = async (password, hashedPassword) => {
    try {
        return await bcryptjs.compare(password, hashedPassword);
    } catch (error) {
        console.log(error);
    }
}