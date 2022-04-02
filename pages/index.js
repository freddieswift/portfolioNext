import Heading from '../components/sections/header/Header'
import HeroSection from '../components/sections/hero/HeroSection'
import AboutMeSection from '../components/sections/aboutMe/AboutMeSection'
import CardSection from '../components/sections/cardSection/CardSection'
import ContactMeSection from '../components/sections/contactMe/ContactMeSection'
import qs from 'qs'

const Home = (props) => {
  return (
    <>
      <Heading />
      <HeroSection />
      <AboutMeSection />
      <CardSection className='blogSection' sectionHeading='Blog' data={props.blogCardData} />
      {/* <CardSection className='projectSection' sectionHeading='Projects' limit={3} /> */}
      <ContactMeSection />
    </>
  )
}

export async function getStaticProps() {
  const blogCardParams = {
    filters: {
      category: {
        name: {
          $eq: 'blog'
        }
      }
    },
    fields: ['title', 'slug', 'description'],
    populate: ['tags'],
    sort: 'publishedAt:desc',
    pagination: {
      limit: '3'
    }
  }

  const blogCardData = await getData('https://swiftportfoliostrapi.herokuapp.com/api/articles?', qs.stringify(blogCardParams))

  return {
    props: {
      blogCardData: JSON.parse(JSON.stringify(blogCardData))
    },
    revalidate: 10
  }
}

const getData = async (url, params) => {
  try {
    const response = await fetch(url + params)
    if (!response.ok) {
      throw new Error()
    }
    const responseJSON = await response.json()
    const transformedData = responseJSON.data.map((element) => {
      return {
        title: element.attributes.title,
        description: element.attributes.description,
        slug: element.attributes.slug,
        tags: element.attributes.tags
      }
    })
    return transformedData
  }
  catch (error) {
    return { error: "Something went wrong" }
  }
}

export default Home