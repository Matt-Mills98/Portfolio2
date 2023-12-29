import './LoadingAnimation.css'
export default function LoadingAnimation(props) {
  const { color, loaded } = props;

  return !loaded ? (
    <div class="loader">
      <div class="loader-inner">
        <div class="loader-line-wrap">
          <div class="loader-line" style={{ borderColor: color }}></div>
        </div>
        <div class="loader-line-wrap">
          <div class="loader-line" style={{ borderColor: color }}></div>
        </div>
        <div class="loader-line-wrap">
          <div class="loader-line" style={{ borderColor: color }}></div>
        </div>
        <div class="loader-line-wrap">
          <div class="loader-line" style={{ borderColor: color }}></div>
        </div>
        <div class="loader-line-wrap">
          <div class="loader-line" style={{ borderColor: color }}></div>
        </div>
        <div className='box11' style={{ backgroundColor: color }}></div>
        <div className='box12' style={{ backgroundColor: color }}></div>
        <div className='box13' style={{ backgroundColor: color }}></div>
        <div className='box14' style={{ backgroundColor: color }}></div>
        <div className='box15' style={{ backgroundColor: color }}></div>

        <img src='./mmillslogowhite.png' class='image'></img>
        <div className='box21'></div>
        <div className='box22'></div>
        <div className='box23'></div>
        <div className='box24'></div>
        <div className='box25'></div>
      </div>
    </div>) : (<div></div>)


}