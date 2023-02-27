import * as React from "react"
import Layout  from '../components/layout.js'
import Content from '../components/contentbutton.js'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
    
    return (
        <Layout popcorn="ProjectAlmond23">
            <h3>SPRING 2023</h3>
            <h1>PORTFOLIO SITE BLUEPRINT</h1>
            <h1>Isabella Lawson</h1>
            {/* <p><button onClick={() => useTargetButtonRef(mission).current.click()}>MISSION</button> + Features + Timeline + Sitemap Design</p> */}

            <Content id="mission" topic="Mission">
                <p>Learning developing has involved lots of trial-and-error, medium scale project building. This has gotten me tangible results that I can deploy and show people on the fly. However, now that I can breathe under the infinite loop water, I want to shift my focus into making cleaner code.</p>
                <p>The outcome of this project will be a modular portfolio website. Modular, meaning I can integrate new features with ease. This will make discrepancies between new features and my base website simple to solve.</p>
                <p>Thinking towards the future, when working with others I want my code to be easy to read and to debug. The thought process is, that if I can write and understand what my own code is, I can read others’ code as well. In the name of learning and retaining, keeping my code well commented and using modules with exports and imports will keep me on track to understand things fully.</p> 
                <p>Project Almond 23 will be a website made with Gatsby like this one!</p>
            </Content>
            <Content topic="Features">
                <p>This project will be a portfolio website I can show people on the fly.  It works well in place of a resume for a web developer. Along with a blog that logs my learning process and discovering new technologies, I am going to create a greeting card generator. My grandma suggested it!</p>
                <p>The greeting card generator will be based on a meme-maker tutorial - the bones of this that I'm working with are the live text editing and the download to a png. A greeting card will comprise of an image background & optional text. To get the images - I will use a mix of my own API that stores some assets I hand select and an unsplash API.</p>
                <p>Essential:</p>
                <ul>
                    <li>Develop using React</li>
                    <li>Use MongoDB to store # content</li>
                    <li>Dynamically rendered # content - arrays/objects/sets/maps</li>
                    <li>Use an API to get images for the Greeting Card Generator.</li>
                </ul>
                <p>Supplemental:</p>
                <ul>
                    <li>Function to calculate numbers in greeting card generator(gcgen)</li>
                    <li>API Call - photos for card generator</li>
                    <li>Display date</li>
                    <li>Interactive UI features for the gcgen</li>
                </ul>
            </Content>
            <Content topic="Timeline">
            <p>I will get the bones of the site working and then create the greeting card generator and the blog going.</p>
            <p>Progress chunks:</p>
            <ul>
                <li>Write content for site</li>
                <li>Create hompeage design structure</li>
                <li>Color scheme</li>
                <li>Readme</li>
                <li>Blog</li>
                <li>Greeting Card Generator</li>
            </ul>
            </Content>
            <Content topic="Sitemap">
            <p>Sitemap Design +</p>
            <StaticImage alt="sitemap mockup" src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/c2f6e3bc-baf6-4f8e-81e3-b50e84719d8c/Portfolio_Sitemap.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230222T161048Z&X-Amz-Expires=86400&X-Amz-Signature=c198ecaf9f6b0eaf3036d31fa11f4e52a4b32764d2858e81f072f9788dd7a275&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Portfolio%2520Sitemap.png%22&x-id=GetObject"/>
            </Content>
            <footer>2023 Isabella Lawson <a href="https://github.com/Almondflour2/ProjectAlmond23">Github Link</a></footer>
        </Layout>
    )
}

export default IndexPage