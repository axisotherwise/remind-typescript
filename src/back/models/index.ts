import User, { associate as associateUser } from "./user";
import Post, { associate as associatePost } from "./post";
import Comment, { associate as associateComment } from "./comment";

export * from "./sequelize";

const db = {
  User,
  Post,
  Comment,
}

associateUser(db);
associatePost(db);
associateComment(db);

export type dbType =  typeof db;