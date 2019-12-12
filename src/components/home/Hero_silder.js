import React from 'react'
// import {BrowserRouter as Router, a} from 'react-router-dom'

const Hero=()=> {
    
    return (
        <div className="slider-area">
            <div className="block-slider block-slider4">
                <ul className="" id="bxslider-home4">
                    <li>
                        <img src={require('../../img/h4-slide.png')} alt="Slide"/>
                        <div className="caption-group">
                            <h2 className="caption title">
                                iPhone <span className="primary">6 <strong>Plus</strong></span>
                            </h2>
                            <h4 className="caption subtitle">Dual SIM</h4>
                            <a className="caption button-radius" href="#"><span className="icon"></span>Shop now</a>
                        </div>
                    </li>
                    {/* silde two */}
                    
                </ul>
            </div>
            
        </div>
     
    )
}

export default Hero;
