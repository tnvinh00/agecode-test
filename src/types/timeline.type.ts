import { UserType } from "./user.type";

export interface TimelineType {
  id: number | string;
  user?: UserType;
  content: string;
  createdAt: string;
  updatedAt: string;
}