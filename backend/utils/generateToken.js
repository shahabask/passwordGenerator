import jwt from 'jsonwebtoken';

const generateToken = (res, userId) => {
    const key = process.env.JWT_SECRET || 'defaultKey'; // Use environment variable or a default key
    console.log('key:', key);

    const token = jwt.sign({ userId }, key, {
        expiresIn: '30d',
    });

    console.log('Generated token:', token);

    res.cookie('jwt', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development', // Use secure cookies in production
        sameSite: 'strict', // Prevent CSRF attacks
        maxAge: 30 * 24 * 60 * 1000, // 30 days
    });

    return token;
};

export default generateToken;
