const api = 'http://localhost:3001'
const token = 'whatever-you-want';
const headers = {
    'Accept': 'application/json',
    'Authorization': token
}

export function getAll() {
    return fetch(`${api}/posts`, { headers })
        .then(res => res.json())
        .then(data => data);
}

export function getAllByCategory(category) {
    return fetch(`${api}/${category}/posts`, { headers })
        .then(res => res.json())
        .then(data => data);
}

export function getById(postId) {
    return fetch(`${api}/posts/${postId}`, { headers })
        .then(res => res.json())
        .then(data => data);
}