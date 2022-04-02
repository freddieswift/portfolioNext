import classes from './HeroSection.module.css'
import HeroContent from './HeroContent'
import Section from '../../utils/section/Section'

const HeroSection = () => {
    return (
        <Section className={classes.heroSection}>
            <HeroContent />
        </Section>
    )
}

export default HeroSection
