import React from 'react'
import Button from '~/components/Button'
import styles from '~/styles/Index.module.scss'
import TextLoop from 'react-text-loop'
import { projectName } from '~/constants'
import SectionOne from '~/components/Landing/SectionOne'
import SectionTwo from '~/components/Landing/SectionTwo'
import Layout from '~/components/Layout'
import WaitlistCard from '~/components/Landing/WaitlistCard'
import { FaGithub } from 'react-icons/fa'

const Home = () => {
    const adjectives = ['Discover', 'Develop', 'Deliver', 'Deploy']
    return (
        <Layout navType="home">
            <div className={styles.main}>
                <div className={styles.main__sub}>
                    <h1 className={styles.main__text}>
                        The Place for Developers <br />
                        to{' '}
                        <TextLoop interval={2000}>
                            {adjectives.map((word, index) => (
                                <span
                                    key={index}
                                    className={styles.main__text_Gradient}
                                >
                                    {word}
                                </span>
                            ))}
                        </TextLoop>{' '}
                        Software
                    </h1>
                    <p className={styles.main__description}>
                        {projectName} is the new open source platform for
                        project management and open source project discovery.
                    </p>
                    <div className={styles.main__buttons}>
                        <div className={styles.github_button}>
                            <FaGithub
                                color="white"
                                style={{
                                    marginRight: '12px',
                                    width: '1.25rem',
                                    height: '1.25rem',
                                    marginTop: '0.05rem',
                                }}
                            />
                            <a
                                style={{
                                    color: 'white',
                                    textDecoration: 'none',
                                }}
                                href="https://github.com/hydralite/hydralite"
                            >
                                View On Github
                            </a>
                        </div>

                        <Button color="accent" text="Join Waitlist" />
                    </div>
                </div>
            </div>
            <SectionOne />
            <SectionTwo />
            <WaitlistCard />
        </Layout>
    )
}

export default Home
