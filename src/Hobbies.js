import React from 'react'
import './Home.css'
import { ParallaxBanner } from 'react-scroll-parallax';



class Hobbies extends React.Component {
    render () {
        return (
            <ParallaxBanner
            layers={[
                {
                    image: 'https://images.pexels.com/photos/911738/pexels-photo-911738.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                    amount: 0.3,
                    slowerScrollRate: false,
                },

            ]}
            style={{
                height: '700px',
            }}
        >
        
            <div class="me" >
            <h1 class="thiner">About Me
            <br/>
            <br/>
            I am a junior level developer currently living in Payson, Utah with my wife and dog. 
            </h1>
            </div>
            <div class="mew">
            
            </div>
        </ParallaxBanner>
            
        )
    }
}export default Hobbies