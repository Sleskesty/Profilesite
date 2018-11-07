import React from 'react'
import './Home.css'
import img from './Book.jpg'
import { ParallaxBanner } from 'react-scroll-parallax';
import person from './me.jpg'


class Home extends React.Component {
    render() {
        return (
            <ParallaxBanner
            layers={[
                {
                    image: 'https://designshack.net/wp-content/uploads/white-texture-backgrounds.jpg',
                    amount: 0.3,
                    slowerScrollRate: false,
                },

            ]}
            style={{
                height: '700px',
            }}
        >
        
            <img src={person} class="two" alt="Ryley Liston" height="300em"></img>
            <div class="me" >
            <h1 class="me">Ryley Liston
            <br/>
            Developer, Gamer, Husband
            </h1>
            </div>
            <div class="mew">
            
            </div>
        </ParallaxBanner>
        
        )
    }

} export default Home