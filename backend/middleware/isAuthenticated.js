import jwt from "jsonwebtoken";

const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    console.log(decoded);
    req.id = decoded.userId;  // Fixed from 'decode.userId' to 'decoded.userId'
    next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: "Unauthorized" });  // Add a response on error
  }
};

export default isAuthenticated;
