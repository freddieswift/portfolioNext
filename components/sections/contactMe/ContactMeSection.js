import React from 'react'
import classes from './ContactMeSection.module.css'
import Section from '../../utils/section/Section'
import Grid from '../../utils/grid/Grid'
import ContactMeInfo from './ContactMeInfo'
import ContactMeForm from './ContactMeForm'

const ContactMeSection = () => {
    return (
        <Section className={classes.contactMeSection} id='contactMeSection' sectionHeading='Contact Me'>
            <Grid className={classes.contactMeGrid} gridLayout='grid2Col'>
                <ContactMeInfo />
                <ContactMeForm />
            </Grid>
        </Section>
    )
}

export default ContactMeSection