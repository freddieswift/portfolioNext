import React from 'react'
import Section from '../../utils/section/Section'

import AboutMeContent from './AboutMeContent'
import classes from './AboutMeSection.module.css'

const AboutMeSection = () => {
    return (
        <Section className={classes.aboutMeSection}>
            <AboutMeContent />
        </Section>
    )
}

export default AboutMeSection