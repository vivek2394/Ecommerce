import UserModel from "../features/user/user.model.js";
const basicAuth = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  console.log(req.headers);
  console.log(authHeader);
  if (!authHeader) {
    return res.send("Headers details not Found");
  }

  const base64Creds = authHeader.replace("Basic ", "");
  const decodedData = Buffer.from(base64Creds, "base64").toString("utf8");
  console.log(decodedData);
  const creds = decodedData.split(":");
  const user = UserModel.signIn(creds[0], creds[1]);
  if (user) {
    next();
  } else {
    res.status(400).send("Incorrect Creds");
  }
};

export default basicAuth;
