import mongoose from "mongoose";
const url = "mongodb://localhost:27017/newput";
const connect = mongoose
  .connect(url)
  .then(() => {
    console.log("Successfully connected to mongodb....");
  })
  .catch((err) => {
    console.log("no Connection", err);
  });
export default { connect };
