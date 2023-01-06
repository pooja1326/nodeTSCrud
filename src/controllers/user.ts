import { any } from "webidl-conversions";
import * as UserService from "../services/userservice";

export async function getUser(req: any, res: any) {
  console.log("hiiiiiiiiii controller");
  try {
    const serviceData = await UserService.getUserService();
    console.log("hiiiiiiiiii controller" + serviceData);
    res.send(serviceData);
  } catch (error) {
    return error;
  }
}
export async function postUser(req: any, res: any) {
  console.log("hi", req.body);
  try {
    const data1 = {
      name: req.body.name,
      dept: req.body.dept,
    };
    const serviceData = await UserService.postUserService(data1);
    return res.status(200).json({ data: serviceData });
  } catch (error) {
    res.status(500).send("error postusersbyId");
  }
}
