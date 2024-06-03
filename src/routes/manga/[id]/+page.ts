export const load = async({ fetch, params }) => {
    const id = decodeURIComponent(params.id)
    const fetchManga = async() => {
        try{    
            const res = await fetch(`/api/manga/${id}`)
            const data = await res.json()
            console.log(data.manga)
            return data.manga
        } catch (err) {
            console.error(err)
        }
    }

    return {
        manga: await fetchManga(),
    }
}