/* eslint-disable */ 
import BLOG from '@/blog.config'
import { useEffect, useRef, useState } from 'react'

const Player = () => {
  const [player, setPlayer] = useState()
  const [isPlaying, setIsPlaying] = useState(false);
  const ref = useRef(null)

  const lrcType = JSON.parse(BLOG.MUSIC_PLAYER_LRC_TYPE)
  const playerVisible = JSON.parse(BLOG.MUSIC_PLAYER_VISIBLE)
  const autoPlay = JSON.parse(BLOG.MUSIC_PLAYER_AUTO_PLAY)

  const meting = JSON.parse(BLOG.MUSIC_PLAYER_METING)
  const togglePlayPause = () => {
    if (player) {
      if (player.audio.paused) {
        player.play(); // Play if paused
      } else {
        player.pause(); // Pause if playing
      }
      setIsPlaying(!isPlaying);
    }
  };
  useEffect(() => {
    if (!meting && window.APlayer) {
      setPlayer(new window.APlayer({
        mini: true,
        container: ref.current,
        fixed: true,
        lrcType: lrcType,
        autoplay: autoPlay,
        order: BLOG.MUSIC_PLAYER_ORDER,
        audio: BLOG.MUSIC_PLAYER_AUDIO_LIST
      }))
    }
    return () => {
      setPlayer(undefined)
    }
  }, [])

  return (
    <div className={playerVisible ? 'visible' : 'invisible'}>
      <link
        rel="stylesheet"
        type="text/css"
        href="https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/aplayer/1.10.1/APlayer.min.css"
      />
      {meting
        ? <meting-js
            fixed="true"
            type="playlist"
            preload="auto"
            lrc-type={BLOG.MUSIC_PLAYER_METING_LRC_TYPE}
            autoplay={autoPlay}
            order={BLOG.MUSIC_PLAYER_ORDER}
            server={BLOG.MUSIC_PLAYER_METING_SERVER}
            id={BLOG.MUSIC_PLAYER_METING_ID}
          />
        :<>
        <div hidden ref={ref} data-player={player}/>
            <button  onClick={togglePlayPause} style={{  marginLeft: '10px' }}>
            {isPlaying? <i class="fas fa-volume-mute"></i> : <i class="fas fa-volume-up"></i>}
          </button>
        </>
      }
    </div>
  )
}

export default Player
