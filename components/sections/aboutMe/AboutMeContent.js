import React from 'react'
import classes from './AboutMeContent.module.css'
import Grid from '../../utils/grid/Grid'

const AboutMeContent = () => {
    return (
        <Grid gridLayout='grid2Col'>
            <div className={classes.aboutMeInfo}>
                <h2 className={classes.aboutMeHeading}>About Me</h2>
                <p className={classes.aboutMeDesc}>
                    Hello, my name is Freddie and I am a Computer Science Graduate.
                    I am now working as a Software Tester, based in the fantastic city of Manchester, UK.
                    <br /><br />
                    I am passionate about all things development, as well as
                    performance testing. Currently, I am learning Node.js and Express as I
                    have a keen interest in backend development. In my spare time, you can
                    normally find me coding, at the gym, or enjoying what Manchester has to offer
                    food and drink wise!
                    <br /><br />
                    Feel free to have a look around and check out my previous projects!
                </p>
            </div>
            <img className={classes.aboutMeImg} src='/profile-pic.png' alt='headshot of me' />
        </Grid>
    )
}

export default AboutMeContent