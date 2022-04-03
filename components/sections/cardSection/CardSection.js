import React, { useState } from 'react'
import Section from '../../utils/section/Section'
import Card from '../../utils/card/Card'
import classes from './CardSection.module.css'
import Grid from '../../utils/grid/Grid'
import Button from '../../utils/button/Button'

const CardSection = (props) => {
    let cards

    if (props.data.error) {
        cards = <div className={classes.infoText}>{props.data.error}</div>
    }
    else {
        if (props.data.length === 0) {
            cards = <div className={classes.infoText}>More Coming Soon...</div>
        }
        else {
            cards = props.data.map(element => {
                return <Card title={element.title} description={element.description} slug={element.slug} key={element.slug} tags={element.tags.data} imageURL={element.imageURL} />
            })
        }
    }

    return (
        <Section className={`${classes[props.className]} ${classes.cardSection}`} sectionHeading={props.sectionHeading}>
            <Grid gridLayout='grid3Col'>
                {cards}
            </Grid>
            {props.homePage &&
                <div className={classes.seeAllBtnContainer}>
                    <Button className='seeAllBtn' href={props.linkTo} btnText='See All'>See All</Button>
                </div>
            }
        </Section>
    )
}

export default CardSection