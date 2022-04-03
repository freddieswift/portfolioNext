import Header from '../../components/sections/header/Header';
import HeroSection from '../../components/sections/hero/HeroSection';
import getData from '../../utils/getData';
import CardSection from '../../components/sections/cardSection/CardSection';
import qs from 'qs'

const index = (props) => {
    return (
        <>
            <Header />
            <HeroSection heading='Projects' description='Here you can check out my previous work!' />
            <CardSection className='notHomePage' data={props.data} />
        </>
    )
}

export async function getStaticProps() {
    const params = {
        filters: {
            category: {
                name: {
                    $eq: 'project'
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



export default index