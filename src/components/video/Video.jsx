import { useRef } from 'react'
import './video.css'
import video from '/src/assets/college-video.mp4'

const Video = ({playState, setPlayState}) => {

    const player= useRef(null);

    const closePlayer=(e)=>{
        if(e.target === player.current){
            setPlayState(false);
        }
    }
  return (
    <div className={`video ${playState ?'': 'hide'}`} ref={player} 
    onClick={closePlayer}>
      <video src={video} autoPlay muted controls></video>
    </div>
  )
}

export default Video
