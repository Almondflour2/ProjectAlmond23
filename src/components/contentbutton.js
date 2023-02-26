import * as React from 'react'
import { topicH3, content } from './layout.module.css'

//reusable button for content. 
const Content = ({ topic, children }) => {
    // declares a new state variable called 'visible' and gives it a value of false
    const [visible, setVisible] = React.useState(false); 
    // the H3 is given an onClick event which calls 'visible' and sets it to true with setstateaction
    // the div's style is altered by the value of 'visible'. the ternary asks, is visible true? and sets it to 'block' or 'none'.
    return (
        <div className={content}>
                <button><div className={topicH3} onClick={() => setVisible(!visible)}><p>{topic}</p><p style={{display: visible ? 'none' : 'inline-block'}}>+</p><p style={{display: visible ? 'inline-block' : 'none'}}>-</p></div></button>
                <div style={{display: visible ? 'block' : 'none'}}>{children}</div>
        </div>
    )
}

export default Content