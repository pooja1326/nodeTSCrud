import { Schema, model } from "mongoose";
interface User {
  name: String;
  dept: String;
}
const userschema = new Schema<User>({
  name: {
    type: String,
    required: true,
  },
  dept: {
    type: String,
    required: true,
  },
});
const UserModel = model<User>("user", userschema);
export default UserModel;
