const getData = () => fetch('db.json')
    .then(response => response.json())
    .then(user => {
        sendData('https://jsonplaceholder.typicode.com/posts', JSON.stringify(user))
            .then(data => {
                console.log(data)
            })
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
getData();