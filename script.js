const getData = fetch('db.json')
    .then(response => response.json())
    .then(user => {
        console.log(user)
        return user
    })
    .catch(error => console.log(error))

const sendData = (url, data) => {
   return fetch( url,{
        method: 'POST',
        body: data,
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }).then(response => response.json())
}

sendData('https://jsonplaceholder.typicode.com/posts', JSON.stringify(getData))
    .then(data => {
        console.log(data)
    })



