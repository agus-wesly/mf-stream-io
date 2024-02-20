import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import './index.scss'
import VideoPlayer from './components/VideoPlayer'

const App = () => {
  const [isPlayed, setIsPlayed] = useState(false)
  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      {isPlayed ? <VideoPlayer /> : null}

      <button onClick={() => setIsPlayed((prev) => !prev)}>Show</button>
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('app'))
