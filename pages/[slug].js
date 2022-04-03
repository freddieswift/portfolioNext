import Header from '../components/sections/header/Header';
import HeroSection from '../components/sections/hero/HeroSection';
import ArticleContent from '../components/sections/articleContent/ArticleContent';
import getData from '../utils/getData';
import { useRouter } from 'next/router'
import qs from 'qs';

const ProjectDetails = (props) => {

    const router = useRouter()

    if (router.isFallback) {
        return <h1>Loading...</h1>
    }

    return (
        <>
            <Header />
            {!props.data.error && <HeroSection heading={props.data[0].title} description={props.data[0].description} />}
            {props.data.error && <HeroSection heading={props.data.error} />}
            <ArticleContent content={props.data[0].content} />
        </>
    )
}

export async function getStaticPaths() {
    const params = {
        filters: {
            category: {
                name: {
                    $eq: 'project'
                }
            }
        },
        fields: ['slug']
    }

    const response = await fetch(process.env.BACKEND_API_URL + '/articles?' + qs.stringify(params))
    const data = await response.json()

    let paths = []

    if (data.data) {
        paths = data.data.map((element) => {
            return {
                params: {
                    slug: element.attributes.slug
                }
            }
        })
    }

    return {
        fallback: true,
        paths: paths
    }
}

export async function getStaticProps(context) {

    const slug = context.params.slug

    const params = {
        filters: {
            slug: {
                $eq: slug
            }
        },
        fields: ['title', 'description', 'content', 'slug'],
        populate: ['tags', 'image']
    }

    const data = await getData(process.env.BACKEND_API_URL + '/articles?', qs.stringify(params))

    return {
        props: {
            data: JSON.parse(JSON.stringify(data))
        },
        revalidate: 10
    }

}
export default ProjectDetails