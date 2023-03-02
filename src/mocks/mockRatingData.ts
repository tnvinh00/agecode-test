import { RatingType } from "@/types/user.type"
import { randomUser } from "@/utils/function"
import { MockUserData } from "./mockUserData"

export const MockRatingData: RatingType[] = [
  {
    id: 1,
    user: randomUser(),
    comment: "人生相談ありがとうございました！彼と仕事のことで話し合ってみようと思います。 色々サービスしてくださってありがとうございました！ また機会があったらよろしくお願いします！",
    createdAt: "2023-02-01T00:00:00.000Z",
    rate: 5,
  },
  {
    id: 2,
    user: randomUser(),
    comment: "うまくいきました！ありがとうございました！",
    createdAt: "2023-01-01T00:00:00.000Z",
    rate: 4,
  },
  {
    id: 3,
    user: randomUser(),
    comment: "とても丁寧に話を聞いてくれて、とても助かりました。ありがとうございました！",
    createdAt: "2022-12-01T00:00:00.000Z",
    rate: 3,
  },
  {
    id: 4,
    user: randomUser(),
    comment: "今日もありがとうございました。",
    createdAt: "2022-11-01T00:00:00.000Z",
    rate: 5,
  },
  {
    id: 5,
    user: randomUser(),
    comment: "いつもありがとうございます！！感情的になってましたが、お話を聞いてくださり落ち着きました。アドバイスもありがとうございました(*^▽^*) またお伺いさせていただきます。",
    createdAt: "2022-10-01T00:00:00.000Z",
    rate: 5,
  },
  {
    id: 6,
    user: randomUser(),
    comment: "とても丁寧に対応してくださいました！",
    createdAt: "2022-09-01T00:00:00.000Z",
    rate: 4,
  }
]