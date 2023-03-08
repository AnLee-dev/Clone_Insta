import React from 'react'
import { useRouter } from "next/router";
import Video from '@/components/Organisms/Reels/Video';
function VideoDetail() {
    const router = useRouter();
    router.query.videoId = '1';

  return (
    <Video reel={{
          user: {
              id: '',
              username: '',
              full_name: '',
              profile_pic_url: '',
              friendship_status: {
                  following: false,
                  outgoing_request: false
              }
          },
          caption_text: '',
          like_count: 0,
          total_comment: 0,
          media: {
              video: []
          },
          id: 0
      }}/>
  )
}

export default VideoDetail