import React, { Component } from 'react'
import Menu from '../Menu';
import Hero from './Hero_silder'


class Home extends Component {
    render() {
        return (
            <div>
                <Menu/>
                {/* <Slider/> */}
                <Hero/>
            </div>
        )
    }
}

export default Home
