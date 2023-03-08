// Projects Section + Header

import { useState, useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet'
import Intro from 'pages/Home/Intro'
import ProjectSummary from 'pages/Home/ProjectSummary'
import Profile from 'pages/Home/Profile'
import Footer from 'components/Footer'
import { usePrefersReducedMotion, useRouteTransition } from 'hooks'
import { useLocation } from 'react-router-dom'
import iphone11 from 'assets/iphone-11.glb'
import macbookPro from 'assets/macbook-pro.glb'
import WSF from 'assets/WSF.jpg'
import WSF_Placeholder from 'assets/WSF-blurred.jpg'
import chess from 'assets/chess-1.jpg'
import pf from 'assets/botto-profile.jpg'
import chess_ph from 'assets/chess-1_blurred.jpg'
import pfph from 'assets/botto-profile_blurred.jpg'
import etrl from 'assets/Etrl.jpg'
import etrlph from 'assets/Etrlph.jpg'
import wfy1 from 'assets/WFY1.jpg'
import wfy1ph from 'assets/WFY1ph.jpg'
import wfy2 from 'assets/WFY2.jpg'
import wfy2ph from 'assets/WFY2ph.jpg'

import './index.css'

// animation of header
const disciplines = ['Student', 'Innovator']

const Home = () => {
    const { status } = useRouteTransition()
    const { hash, state } = useLocation()
    const initHash = useRef(true)
    const [visibleSections, setVisibleSections] = useState([])
    const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false)
    const intro = useRef()
    const projectOne = useRef()
    const projectTwo = useRef()
    const projectThree = useRef()
    const projectFour = useRef()
    const details = useRef()
    const prefersReducedMotion = usePrefersReducedMotion()

    useEffect(() => {
        const revealSections = [
            intro,
            projectOne,
            projectTwo,
            projectThree,
            projectFour,
            details,
        ]

        const sectionObserver = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const section = entry.target
                        observer.unobserve(section)
                        if (visibleSections.includes(section)) return
                        setVisibleSections(prevSections => [...prevSections, section])
                    }
                })
            },
            { rootMargin: '0px 0px -10% 0px' }
        )

        const indicatorObserver = new IntersectionObserver(
            ([entry]) => {
                setScrollIndicatorHidden(!entry.isIntersecting)
            },
            { rootMargin: '-100% 0px 0px 0px' }
        )

        revealSections.forEach(section => {
            sectionObserver.observe(section.current)
        })

        indicatorObserver.observe(intro.current)

        return () => {
            sectionObserver.disconnect()
            indicatorObserver.disconnect()
        }
    }, [visibleSections])

    useEffect(() => {
        const hasEntered = status === 'entered'
        const supportsNativeSmoothScroll =
            'scrollBehavior' in document.documentElement.style
        let scrollObserver
        let scrollTimeout

        const handleHashchange = (hash, scroll) => {
            clearTimeout(scrollTimeout)
            const hashSections = [intro, projectOne, details]
            const hashString = hash.replace('#', '')
            const element = hashSections.filter(item => item.current.id === hashString)[0]
            if (!element) return
            const behavior = scroll && !prefersReducedMotion ? 'smooth' : 'instant'
            const top = element.current.offsetTop

            scrollObserver = new IntersectionObserver(
                (entries, observer) => {
                    const [entry] = entries
                    if (entry.isIntersecting) {
                        scrollTimeout = setTimeout(
                            () => {
                                element.current.focus()
                            },
                            prefersReducedMotion ? 0 : 400
                        )
                        observer.unobserve(entry.target)
                    }
                },
                { rootMargin: '-20% 0px -20% 0px' }
            )

            scrollObserver.observe(element.current)

            if (supportsNativeSmoothScroll) {
                window.scroll({
                    top,
                    left: 0,
                    behavior,
                })
            } else {
                window.scrollTo(0, top)
            }
        }

        if (hash && initHash.current && hasEntered) {
            handleHashchange(hash, false)
            initHash.current = false
        } else if (!hash && initHash.current && hasEntered) {
            window.scrollTo(0, 0)
            initHash.current = false
        } else if (hasEntered) {
            handleHashchange(hash, true)
        }

        return () => {
            clearTimeout(scrollTimeout)
            if (scrollObserver) {
                scrollObserver.disconnect()
            }
        }
    }, [hash, state, prefersReducedMotion, status])

    return (
        <div className="home">
            <Helmet>
                <title>Padgett Ong | Developer + </title>
                <meta
                    name="description"
                    content="Portfolio of Padgett – a programmer working on blockchain apps"
                />
                <link rel="prefetch" href={iphone11} as="fetch" crossorigin="" />
                <link rel="prefetch" href={macbookPro} as="fetch" crossorigin="" />
            </Helmet>
            <Intro
                id="intro"
                sectionRef={intro}
                disciplines={disciplines}
                scrollIndicatorHidden={scrollIndicatorHidden}
            />
            <ProjectSummary
                id="project-1"
                sectionRef={projectOne}
                visible={visibleSections.includes(projectOne.current)}
                index={1}
                title="Full Stack Web Application"
                description="Leveraging modern, component-based architecture for efficient rendering and management of the application state"
                buttonText="View Project"
                buttonLink="https://life-water.netlify.app"
                model={{
                    
                    type: 'laptop',
                    alt: 'Ethereal',
                    textures: [
                        {
                            src: etrl,
                            srcSet: `${etrl} 980w, ${etrl} 1376w`,
                            placeholder: etrlph,
                        },
                    ],
                }}
            />
            <ProjectSummary
                id="project-2"
                alternate
                sectionRef={projectTwo}
                visible={visibleSections.includes(projectTwo.current)}
                index={2}
                title="Blockchain"
                description="My own cip.js library to interact and fetch data on-chain, and made numerous web3 applications with React framework"
                buttonText="View Project"
                buttonLink="https://www.npmjs.com/~archillect"
                model={{
                    type: 'phone',
                    alt: 'Weebify',
                    textures: [
                        {
                            src: wfy2,
                            srcSet: `${wfy2} 254w, ${wfy2} 508w`,
                            placeholder: wfy2ph,
                        },
                        {
                            src: wfy1,
                            srcSet: `${wfy1} 254w, ${wfy1} 508w`,
                            placeholder: wfy1ph,
                        },
                    ],
                }}
            />
            <ProjectSummary
                id="project-3"
                sectionRef={projectThree}
                visible={visibleSections.includes(projectThree.current)}
                index={3}
                title="UI/UX Designer"
                description="My latest UI/UX Design project"
                buttonText="View Project"
                buttonLink="https://www.figma.com/file/lDPEBQk9CBjC8mj60BN3BH/MOG-Technologies-Prototype?node-id=0%3A1&t=FVmcVysbtit6n0Ij-1"
                model={{
                    type: 'laptop',
                    alt: 'Wa-Sticker-Formatter',
                    textures: [
                        {
                            src: WSF,
                            srcSet: `${WSF} 980w, ${WSF} 1376w`,
                            placeholder: WSF_Placeholder,
                        },
                    ],
                }}
            />
            <ProjectSummary
                id="project-4"
                alternate
                sectionRef={projectFour}
                visible={visibleSections.includes(projectFour.current)}
                index={4}
                title="Python Games"
                description="Python games utilising the Pygame library with customisable paradigm"
                buttonText="View Project"
                buttonLink="https://github.com/visualarchillect/Pygame-Space-Invaders"
                model={{
                    type: 'phone',
                    alt: 'Void',
                    textures: [
                        {
                            src: chess,
                            srcSet: `${chess} 254w, ${chess} 508w`,
                            placeholder: chess_ph,
                        },
                        {
                            src: pf,
                            srcSet: `${pf} 254w, ${pf} 508w`,
                            placeholder: pfph,
                        },
                    ],
                }}
            />

            <Profile
                sectionRef={details}
                visible={visibleSections.includes(details.current)}
                id="details"
            />
            <Footer />
        </div>
    )
}

export default Home
