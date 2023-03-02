import AudioType from "./audio.type";
import { LinkType } from "./link.type";
import VideoType from "./video.type";

export interface UserType {
  id?: number | string;
  name?: string;
  email?: string;
  avatar?: string;
  cover?: string;
  role?: string;
  lastLogin?: string;
  bio?: string;
  links?: LinkType[];
  audios?: AudioType[];
  videos?: VideoType[];
}

export interface RatingType {
  id: number | string;
  user: UserType;
  comment: string;
  createdAt: string;
  rate: number;

}
