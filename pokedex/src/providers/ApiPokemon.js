const JSON_HEADERS = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
};

export async function getPokemons(limit = 50) {

    let url = new URL("https://pokeapi.co/api/v2/pokemon?limit=" + limit)

    return fetch(url, {
        'method': 'GET',
        'headers': JSON_HEADERS
    })
    .then((response) => response.json())
    .catch((error) => console.log('error', error));
}

export async function getPokemon(url) {

    let new_url = new URL(url)

    return fetch(new_url, {
        'method': 'GET',
        'headers': JSON_HEADERS
    })
    .then((response) => response.json())
    .catch((error) => console.log('error', error));
}