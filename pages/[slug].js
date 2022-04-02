import { useRouter } from 'next/router'

const ProjectDetails = () => {
    const router = useRouter()
    const slug = router.query.slug;
    return (
        <h1>Projects {slug}</h1>
    )
}

export default ProjectDetails