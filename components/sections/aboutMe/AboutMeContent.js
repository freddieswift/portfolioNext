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
                    I am now working as a Software Tester.
                    <br /><br />
                    I have an interest in all things development, as well as
                    performance testing.
                    <br /><br />
                    Feel free to have a look around and check out my previous work!
                </p>
            </div>
            <img className={classes.aboutMeImg} src='/profile-pic.png' alt='headshot of me' />
        </Grid>
    )
}

export default AboutMeContent