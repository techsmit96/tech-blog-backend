import { Schema, model, Document, Model } from "mongoose";
import { COLLECTIONS } from "../database/collections";

export interface IArticle extends Document {
  title: String;
  slug: String;
  content: String;
  cover_image: String;
  tags: [String] | null;
  is_published: boolean;
  author: String;
  views: Number;
  likes: Number;
  comments_count: Number;

  is_deleted: boolean;
  added_by: Schema.Types.ObjectId | null;
  modified_by: Schema.Types.ObjectId | null;
  deleted_by: Schema.Types.ObjectId | null;
  deleted_date: Date | null;
}

const ArticleSchema = new Schema<IArticle>(
  {
    title: { type: String, required: false },
    slug: { type: String, required: false, default: null },
    content: { type: String, required: false, default: null },
    cover_image: { type: String, default: null },
    tags: { type: Array, default: null },
    is_published: { type: Boolean, default: false },
    author: { type: String, default: null },
    views: { type: Number, default: 0 },
    likes: { type: Number, default: 0 },
    comments_count: { type: Number, default: 0 },

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

export const article = model<IArticle>(COLLECTIONS.ARTICLES, ArticleSchema);
