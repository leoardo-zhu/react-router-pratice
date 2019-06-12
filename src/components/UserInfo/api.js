
const uploadAvatarApi = (file) => {
    fetch('https://sm.ms/api/upload', {
        method: 'POST',
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        body: file
    })
        .then(response => response.json())
        .then(response => {
            console.log(response)
        })
}

export {
    uploadAvatarApi
}