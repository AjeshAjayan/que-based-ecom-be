import jwt from "jsonwebtoken"

export const verifyToken = (token: string) => {
    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
        // valid token
        return decodedToken; // return the decoded token data if valid
    } catch (e) {
        // invalid token
        throw new Error("Invalid token");
    }
}
