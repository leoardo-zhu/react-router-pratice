
const baseUrl = 'http://localhost:9000'

const headers = new Headers({ 'Content-Type': 'application/json' })

const fetchPromise = (url, method, params) =>
    new Promise((resolve, reject) => {
        fetch(baseUrl + url, {
            method: method,
            headers: headers,
            body: JSON.stringify(params)
        }).then(response => response.json)
            .then(response => response.flag ? resolve(response) : reject(response))
    })

const fetchGet = (url, params) => fetchPromise(url, 'GET', params)

const fetchPost = (url, params) => fetchPromise(url, 'POST', params)

const fetchPut = (url, params) => fetchPromise(url, 'PUT', params)

const fetchDelete = (url, params) => fetchPromise(url, 'DELETE', params)

export {
    fetchGet, fetchPost, fetchPut, fetchDelete
} 