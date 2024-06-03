export const load = async({ fetch }) => {
    const fetchManga = async() => {
        try{    
            const res = await fetch('/api/manga/all')
            const data = await res.json()
            return data.manga
        } catch (err) {
            console.error(err)
        }
    }

    return {
        manga: await fetchManga()
    }
}