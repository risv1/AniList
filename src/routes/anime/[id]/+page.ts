export const load = async({ fetch, params }) => {
    const id = decodeURIComponent(params.id)
    const fetchAnime = async() => {
        try{    
            const res = await fetch(`/api/anime/${id}`)
            const data = await res.json()
            return data.anime
        } catch (err) {
            console.error(err)
        }
    }

    return {
        anime: await fetchAnime(),
    }
}