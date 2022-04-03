import classes from './HeroSection.module.css'
import HeroContent from './HeroContent'
import Section from '../../utils/section/Section'

const HeroSection = (props) => {
    return (
        <Section className={classes.heroSection}>
            <HeroContent heading={props.heading} description={props.description} mainHero={props.mainHero} />
        </Section>
    )
}

export default HeroSection
