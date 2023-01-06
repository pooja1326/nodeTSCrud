import UserModel from "../models/user";

console.log("dbbbb data");
export async function getUserService() {
  console.log("hii from servicesc ");
  try {
    let data = await UserModel.find();
    console.log("hii from servicesc " + data);
    return data;
  } catch (error) {
    return error;
  }
}
export async function postUserService(body: any) {
  try {
    let data = await UserModel.create(body);

    return data;
  } catch (error) {
    return error;
  }
}
