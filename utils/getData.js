const getData = async (url, params) => {

    try {
        const response = await fetch(url + params)

        if (!response.ok) {
            throw new Error()
        }

        const responseJSON = await response.json()

        const transformedData = responseJSON.data.map((element) => {

            let dataObject = {}

            dataObject.title = element.attributes.title
            dataObject.description = element.attributes.description
            dataObject.slug = element.attributes.slug
            dataObject.tags = element.attributes.tags

            if (element.attributes.content) {
                dataObject.content = element.attributes.content
            }


            if (element.attributes.image.data) {
                dataObject.imageURL = process.env.BACKEND_BASE_URL + element.attributes.image.data[0].attributes.url
            }
            else {
                dataObject.imageURL = '/fast.jpg'
            }

            if (element.attributes.github) {
                dataObject.github = element.attributes.github
            }
            return dataObject
        })

        return transformedData
    }
    catch (error) {
        return { error: "Something went wrong" }
    }
}

export default getData