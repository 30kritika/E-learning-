import './campus.css'
import gallery_1 from '/src/assets/c1.jpg'
import gallery_2 from '/src/assets/gallery-2.png'
import gallery_3 from '/src/assets/gallery-3.png'
import gallery_4 from '/src/assets/c2.jpg'
import white_arrow from '/src/assets/white-arrow.png'

const Campus = () => {
  return (
    <div className='campus'>
      <div className='gallery'>
        <img src={gallery_1} alt=''/>
        <img src={gallery_2} alt=''/>
        <img src={gallery_3} alt=''/>
        <img src={gallery_4} alt=''/>
      </div>
      <button className='btn dark-btn'>See more here <img src={white_arrow} alt='' /></button>
    </div>
  )
}

export default Campus
