import * as React from 'react'
import { topicH3, content } from './layout.module.css'

//reusable button for content
const Content = ({ topic, children }) => {
    const [visible, setVisible] = React.useState(false);
    return (
        <div className={content}>
                <h3 className={topicH3} onClick={() => setVisible(!visible)}>{topic}</h3>
                <div style={{display: visible ? 'block' : 'none'}}>{children}</div>
        </div>
    )
}

export default Content