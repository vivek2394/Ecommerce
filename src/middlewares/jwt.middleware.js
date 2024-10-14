import jwt from "jsonwebtoken";

const jwtAuth = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) {
    res.status(401).send("Unauthorized");
  }

  try {
    const payload = jwt.verify(token, "dQL6fNy1gK");
    console.log(payload);
    req.userId = payload.userId;
  } catch (err) {
    console.log(err);
    res.status(401).send("Unauthorized.");
  }
  next();
};
export default jwtAuth;
