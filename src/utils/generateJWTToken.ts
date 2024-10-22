import jwt from 'jsonwebtoken'

export const generateJWTToken = (data: string) => {
    // sign the token using the secret key and expiry time (1 hour)
    const token = jwt.sign(data, process.env.JWT_SECRET_KEY)
    return token;
}
