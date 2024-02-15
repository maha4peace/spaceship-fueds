const SW_API_BASE_URL = "https://swapi.dev/api" ;

export async function getAllStarships() {
    try {
        const response = await fetch(`${SW_API_BASE_URL}/starships/`)
        const data = await response.json() ; 
        return data.results ; 
    } catch(error) {
        console.error("Error fetching starships:", error)
        throw error; 
    }
}

