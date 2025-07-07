import { Schema, model, Document, Model } from "mongoose";
import { COLLECTIONS } from "../database/collections";

export enum RoleName {
  ADMIN = "admin",
  EDITOR = "editor",
  WRITER = "writer",
  READER = "reader",
}
export interface IRole extends Document {
  name: String;
  permissions: any[] | null;

  is_active: boolean;
  is_deleted: boolean;
  added_by: Schema.Types.ObjectId | null;
  modified_by: Schema.Types.ObjectId | null;
  deleted_by: Schema.Types.ObjectId | null;
  deleted_date: Date | null;
}

const RoleSchema = new Schema<IRole>(
  {
    name: {
      type: String,
      enum: RoleName,
      default: RoleName.ADMIN,
    },
    permissions: { type: [Schema.Types.Mixed], default: [] },
    
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

export const role = model<IRole>(COLLECTIONS.ROLES, RoleSchema);
