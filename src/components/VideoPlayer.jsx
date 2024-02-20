import React, { useRef, useEffect } from 'react'
import JSMpeg from '@cycjimmy/jsmpeg-player'

const VideoPlayer = () => {
  useEffect(() => {
    const url = `ws://${window.location.hostname}:6789/`
    const player = new JSMpeg.VideoElement('#video-canvas', url, {
      autoplay: true,
    })

    return () => {
      player.destroy()
    }
  }, [])

  return (
    <>
      <div
        id="title"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '28px',
          fontWeight: 'bold',
          marginTop: '10px',
          marginBottom: '10px',
          color: 'blue',
        }}
      >
        Player stream RTSP
      </div>
      <div id="video-canvas" style={{ height: '480px', width: '640px' }}></div>
    </>
  )
}

export default VideoPlayer
