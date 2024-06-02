import { API_URL } from "$lib/url"

export const GET = async() => {
    try{
        const res = await fetch(`${API_URL}/trending/anime`, {
            headers: {
                'Accept': 'application/json'
            }
        })
        if(!res.ok){
            return new Response(JSON.stringify({error: res.statusText}))       
        }
        const anime = await res.json()
        return new Response(JSON.stringify({message: "Fetched anime", anime: anime.data}))
    } catch (e) {
        return new Response(JSON.stringify({error: e}))
    }
}