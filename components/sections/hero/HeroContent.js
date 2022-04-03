import classes from './HeroContent.module.css'
import Button from '../../utils/button/Button'

const HeroContent = (props) => {
    return (
        <div className={classes.heroContent}>
            <h1 className='headingPrimary'>{props.heading}</h1>
            <p className={classes.heroDesc}>{props.description}</p>
            {props.mainHero && <Button className='ctaBtn' href='#contactMeSection' btnText='Contact Me'></Button>}
        </div>
    )
}

export default HeroContent