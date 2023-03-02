import { TimelineType } from "@/types/timeline.type";
import { RatingType, UserType } from "@/types/user.type"
import { useRouter } from "next/router";
import { useState, useEffect } from 'react';

const useUserDetail = () => {
  const [userData, setUserData] = useState<
    {
      user: UserType,
      timelines: TimelineType[],
      ratings: RatingType[]
    }>({
      user: {},
      timelines: [],
      ratings: []
    })

  const { id } = useRouter().query

  useEffect(() => {
    if (!id) return
    const getUserData = async () => {
      const [userResponse, timelineResponse, ratingResponse] = await Promise.all([
        fetch(`/api/user/${id}`).then((res) => res.json()),
        fetch(`/api/timeline/${id}`).then((res) => res.json()),
        fetch(`/api/rating/${id}`).then((res) => res.json())
      ]);

      setUserData({
        user: userResponse.user,
        timelines: timelineResponse.timelines,
        ratings: ratingResponse.ratings
      });
    };

    getUserData()
  }, [id])

  return userData
}

export default useUserDetail