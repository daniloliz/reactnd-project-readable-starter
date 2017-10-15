const api = 'http://localhost:3001'
const token = 'whatever-you-want';
const headers = {
    'Accept': 'application/json',
    'Authorization': token
}

export function getAll() {
    return fetch(`${api}/categories`, { headers })
        .then(res => res.json())
        .then(data => data.categories);
}