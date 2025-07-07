import { Schema, model, Document, Model } from "mongoose";
import { COLLECTIONS } from "../database/collections";

export interface IUser extends Document {
  name: String;
  email: String;
  password: String;
  token: String | null;
  role_id: Schema.Types.ObjectId;
  avatar: String;
  mobile_no: Number | null;
  login_devices: any[] | null;
  is_email_verified: boolean;
  is_mobile_verified: boolean;
  reset_password_token: String;
  reset_password_token_expire_time: Date;

  update_last_login: Date;
  is_active: boolean;
  is_deleted: boolean;
  added_by: Schema.Types.ObjectId | null;
  modified_by: Schema.Types.ObjectId | null;
  deleted_by: Schema.Types.ObjectId | null;
  deleted_date: Date | null;
}

const UserSchema = new Schema<IUser>(
  {
    name: { type: String, required: false },
    email: { type: String, required: false, default: null },
    password: { type: String, required: false, default: null },
    token: { type: String, default: null },
    role_id: {
      type: Schema.Types.ObjectId,
      ref: COLLECTIONS.ROLES,
      default: null,
    },
    avatar: { type: String, default: null },
    mobile_no: { type: Number, default: null },
    login_devices: { type: Array, default: null },
    is_email_verified: { type: Boolean, default: false },
    is_mobile_verified: { type: Boolean, default: false },
    reset_password_token: { type: String, default: null },
    reset_password_token_expire_time: { type: Date, default: null },

    update_last_login: { type: Date, default: null },
    is_active: { type: Boolean, default: true },
    is_deleted: { type: Boolean, default: false },
    added_by: { type: Schema.Types.ObjectId, default: null },
    modified_by: { type: Schema.Types.ObjectId, default: null },
    deleted_by: { type: Schema.Types.ObjectId, default: null },
    deleted_date: { type: Date, default: null },
  },
  {
    timestamps: {
      createdAt: "creation_date",
      updatedAt: "modified_date",
    },
  }
);

export const user = model<IUser>(COLLECTIONS.USER_MASTER, UserSchema);
