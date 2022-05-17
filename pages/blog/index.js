import Header from "../../components/sections/header/Header"
import HeroSection from '../../components/sections/hero/HeroSection';
import CardSection from '../../components/sections/cardSection/CardSection';
import getData from '../../utils/getData';
import qs from 'qs'

const Blog = (props) => {
    return (
        <>
            <Header />
            <HeroSection heading='Blog' description='Here is where you can find articles that I have written. I write about things that I am currently learning or anything cool that takes my interest!' />
            <CardSection className='notHomePage' data={props.data} />
        </>
    )
}

export async function getStaticProps() {
    const params = {
        filters: {
            category: {
                name: {
                    $eq: 'blog'
                }
            }
        },
        fields: ['title', 'slug', 'description'],
        populate: ['tags', 'image'],
        sort: 'publishedAt:desc'
    }

    const data = await getData(process.env.BACKEND_API_URL + '/articles?', qs.stringify(params))

    return {
        props: {
            data: JSON.parse(JSON.stringify(data))
        },
        revalidate: 10
    }
}

export default Blog