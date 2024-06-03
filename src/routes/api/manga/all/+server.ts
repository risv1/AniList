import { API_URL } from "$lib/url"

export const GET = async() => {
    try{
        const res = await fetch(`${API_URL}/trending/manga`)
        if(!res.ok){
            return new Response(JSON.stringify({error: res.statusText}))       
        }
        const manga = await res.json()
        return new Response(JSON.stringify({message: "Fetched manga", manga: manga.data}))
    } catch (e) {
        return new Response(JSON.stringify({error: e}))
    }
}