export const load = async({ fetch }) => {
    const fetchAnime = async() => {
        try{    
            const res = await fetch('/api/anime/all')
            const data = await res.json()
            return data.anime
        } catch (err) {
            console.error(err)
        }
    }

    return {
        anime: await fetchAnime()
    }
}