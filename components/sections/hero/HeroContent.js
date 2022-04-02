import classes from './HeroContent.module.css'
import Button from '../../utils/button/Button'

const HeroContent = () => {
    return (
        <div className={classes.heroContent}>
            <h1 className='headingPrimary'>Freddie Swift</h1>
            <p className={classes.heroDesc}>Computer Science Graduate and Software Tester</p>
            <Button className='ctaBtn' href='#contactMeSection' btnText='Contact Me'></Button>
        </div>
    )
}

export default HeroContent