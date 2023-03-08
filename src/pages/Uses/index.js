import { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import {
    ProjectBackground,
    ProjectContainer,
    ProjectHeader,
    ProjectSection,
    ProjectSectionContent,
    ProjectSectionHeading,
    ProjectSectionText,
    ProjectTextRow,
} from 'components/ProjectLayout'
import Link from 'components/Link'
import usesBackground from 'assets/uses-background.mp4'
import usesBackgroundPlaceholder from 'assets/uses-background-placeholder.jpg'
import prerender from 'utils/prerender'
import { useScrollRestore } from 'hooks'
import Footer from 'components/Footer'
import './index.css'

const Uses = () => {
    useScrollRestore()

    return (
        <Fragment>
            <Helmet>
                <title>Uses | Padgett Ong</title>
                <meta
                    name="description"
                    content="A list of hardware and software I use to do my thing"
                />
            </Helmet>
            <ProjectContainer className="uses">
                <ProjectBackground
                    src={usesBackground}
                    placeholder={usesBackgroundPlaceholder}
                    opacity={0.7}
                    entered={!prerender}
                />
                <ProjectHeader
                    title="Tech"
                    description="A somewhat comprehensive list of tools, apps, and more that I use on a daily basis to design and code things. And yeah, that is the movie Ready Player One running in the background."
                />
                <ProjectSection first className="uses__section">
                    <ProjectSectionContent>
                        <ProjectTextRow width="m">
                            <ProjectSectionHeading>Development</ProjectSectionHeading>
                            <ProjectSectionText>
                                <ul>
                                    <li>
                                        I use{' '}
                                        <Link href="https://code.visualstudio.com/">
                                            Visual Studio Code
                                        </Link>{' '}
                                        as my text editor,  with the GitHub Dark Default theme and Fluent Icons. 
                                        Recently, I started using the BlackBox extension to code faster after emmet shortcuts.
                                    </li>
                                    <li>
                                        For Backend. I utilize{' '}
                                        <Link href="https://soliditylang.org/">Solidity</Link>, <Link href="https://www.javascript.com/"
                                        >Javascript</Link> and <Link href="https://go.dev/">Go</Link> mostly. 
                                        it's efficient, accessible and it gets work done quickly.
                                    </li>
                                    <li>
                                        For Server Side I use{' '}
                                        <Link href="https://nodejs.org">Node.Js</Link> and
                                        sometimes, <Link href="https://www.python.org/">Python</Link>. 
                                        it's an amazing framework which is really easy to
                                        use.
                                    </li>
                                    <li>
                                        Safari and Google Chrome is my main browser for development
                                        and general use.
                                    </li>
                                    <li>
                                        <Link href="https://reactjs.org/">React</Link> is
                                        my front-end Javascript library of choice. The
                                        component-centric mental model is the first thing
                                        that truly made sense to me as a Developer.
                                    </li>
                                    <li>
                                        For 3D interactive applications or animations and models I use{' '}
                                        <Link href="https://www.blender.org/">Blender</Link> or <Link href="https://www.adobe.com/">Adobe</Link>.
                                        It has a bit of a learning curve but you can do
                                        some really powerful stuff with it.
                                    </li>
                                    <li>
                                        For UI/UX design, I am 
                                        comfortable using design softwares like <Link href="hhttps://www.figma.com/">Figma</Link> and <Link href="https://adobexdplatform.com/">Adobe XD</Link>
                                        , to create high-quality visual designs, wireframes and prototypes.
                                    </li>
                                    <li>
                                        In school, I learn Python, Java, C++, C, SQL and
                                        delved into theoretical topics such as algorithms, data structures, 
                                        computer science and business information systems.
                                    </li>
                                    <li>
                                        This portfolio website was created using <Link href="https://threejs.org/">Three.js</Link> and 
                                        it's my first project using this technology. 
                                        I enjoy continuously improving my skills and exploring new programming languages. 
                                        Thank you for taking the time to read my profile!
                                    </li>
                                </ul>
                            </ProjectSectionText>
                        </ProjectTextRow>
                    </ProjectSectionContent>
                </ProjectSection>
            </ProjectContainer>
            <Footer />
        </Fragment>
    )
}

export default Uses
