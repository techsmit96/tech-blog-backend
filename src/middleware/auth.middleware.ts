import { Request, Response, NextFunction } from "express";
let jwt = require("jsonwebtoken");
import { STATUS_CODE, ERROR_MSGS } from "../common/status.common";
import { sendError } from "../common/response.common";
import { findOne } from "../common/methods.common";
import { user } from "../models/user.model";

export const auth = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.header("Authorization")?.split(" ")[1];
  console.log("🚀 ~ auth ~ token:", token);
  if (!token) {
    sendError(res, ERROR_MSGS.TOKEN_MISSING, "", STATUS_CODE.UNAUTHORIZED);
  }

  try {
    req.user = await jwt.verify(token, process.env.JWT_SECRET);
    let foundUser = await findOne(user, { _id: req.user._id });
    if (foundUser && foundUser.login_devices.length > 0) {
      let check = foundUser.login_devices.find((item: any) => {
        return item.token == token;
      });
      console.log("auth ~ check:", check);
      if (!check) {
        sendError(res, ERROR_MSGS.UNAUTHORIZED, STATUS_CODE.UNAUTHORIZED);
      }
    }
    next();
  } catch (err) {
    console.log("🚀 ~ auth ~ err:", err);
    sendError(res, ERROR_MSGS.UNAUTHORIZED, STATUS_CODE.UNAUTHORIZED);
  }
};
