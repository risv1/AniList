import { API_URL } from "$lib/url"

export const GET = async({ params }) => {
    
    const id = params.id
    try{
        const res = await fetch(`${API_URL}/manga/${id}`, {
            headers: {
                'Accept': 'application/json'
            }
        })
        if(!res.ok){
            return new Response(JSON.stringify({error: res.statusText}))       
        }
        const anime = await res.json()
        return new Response(JSON.stringify({message: "Fetched anime", manga: anime.manga}))
    } catch (e) {
        return new Response(JSON.stringify({error: e}))
    }
}