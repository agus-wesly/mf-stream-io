Stream = require('node-rtsp-stream')
stream = new Stream({
  name: 'Camera',
  streamUrl: 'rtsp://localhost:8554/mystream', // Ganti dengan URL RTSP
  wsPort: 6789,
  ffmpegOptions: {
    '-f': 'mpegts', // Output file format
    '-codec:v': 'mpeg1video', // video codec
    '-b:v': '6000k', // Video bit rate (increase for better quality)
    '-s': '1920x1080', // Video size
    '-bf': 0, // Number of B-frames
    '-r': 60, // Number of B-frames
    '-codec:a': 'mp2', // audio codec
    '-ar': 44100, // sampling rate (in Hz)(in Hz)
    '-ac': 1, // number of audio channels
    '-b:a': '128k', // audio bit rate
  },
})
