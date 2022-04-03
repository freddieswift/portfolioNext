import Heading from '../components/sections/header/Header'
import HeroSection from '../components/sections/hero/HeroSection'
import AboutMeSection from '../components/sections/aboutMe/AboutMeSection'
import CardSection from '../components/sections/cardSection/CardSection'
import ContactMeSection from '../components/sections/contactMe/ContactMeSection'
import getData from '../utils/getData'
import qs from 'qs'

const Home = (props) => {
  return (
    <>
      <Heading />
      <HeroSection heading='Freddie Swift' description='Computer Science Graduate and Software Tester' mainHero={true} />
      <AboutMeSection />
      <CardSection homePage={true} linkTo='/projects' sectionHeading='Projects' data={props.projectCardData} />
      {/* <CardSection className='projectSection' sectionHeading='Projects' limit={3} /> */}
      <ContactMeSection />
    </>
  )
}

export async function getStaticProps() {

  const projectCardParams = {
    filters: {
      category: {
        name: {
          $eq: 'project'
        }
      }
    },
    fields: ['title', 'slug', 'description'],
    populate: ['tags', 'image'],
    sort: 'publishedAt:desc',
    pagination: {
      limit: '3'
    }
  }

  const projectCardData = await getData(process.env.BACKEND_API_URL + '/articles?', qs.stringify(projectCardParams))

  return {
    props: {
      projectCardData: JSON.parse(JSON.stringify(projectCardData))
    },
    revalidate: 10
  }
}

export default Home