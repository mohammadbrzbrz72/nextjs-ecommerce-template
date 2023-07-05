import axios from "./axios";
import * as IFs from "../interfaces/user.interfaces";

export const getUserApi = ({ id }: IFs.IGetUserApi) =>
  axios.get("user", { params: { id } });

export const getUserPost = ({ id, body }: IFs.IPotUserApi) =>
  axios.post(`user/${id}`, body);
