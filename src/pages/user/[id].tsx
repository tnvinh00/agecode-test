import AppHeader from '@/components/AppHeader/AppHeader'
import AudioBlock from '@/components/blocks/AudioBlock'
import LinksBlock from '@/components/blocks/LinksBlock'
import RatingBlock from '@/components/blocks/RatingBlock'
import TimelineBlock from '@/components/blocks/TimelineBlock'
import UserInfoBlock from '@/components/blocks/UserInfoBlock'
import VideoBlock from '@/components/blocks/VideoBlock'
import Tab from '@/components/Tabs/Tab'
import Tabs from '@/components/Tabs/Tabs'
import useUserDetail from '@/hooks/useUserDetail'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const UserProfilePage = () => {
  const [currentTab, setCurrentTab] = useState(0)
  const userData = useUserDetail()

  const router = useRouter();

  const [key, setKey] = useState(0);

  // Reload data when the route parameters change
  useEffect(() => {

    setKey(key + 1);
    setCurrentTab(0);
  }, [router.query?.id]);

  return (
    <>
      <AppHeader
        title={userData.user?.name}
      />

      <UserInfoBlock user={userData.user} />
      <div className="px-4 mb-8">
        <Tabs currentTab={currentTab} onChange={setCurrentTab}>
          <Tab label="プロフィール">
            <AudioBlock audios={userData.user?.audios || []} />

            <VideoBlock videos={userData.user?.videos || []} />

            <LinksBlock links={userData.user?.links || []} />
          </Tab>

          <Tab label='感謝の声'>
            <RatingBlock ratings={userData.ratings} />
          </Tab>

          <Tab label='タイムライン'>
            <TimelineBlock timelines={userData.timelines} />
          </Tab>
        </Tabs>
      </div>
    </>
  )
}

export default UserProfilePage