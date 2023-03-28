const getData = () => fetch('db.json')
    .then(response => response.json())
    .then(user => {
        sendData('https://jsonplaceholder.typicode.com/posts', user)
    })
    .catch(error => console.log(error))

/*const sendData = (url, data) => {
   return fetch( url,{
        method: 'POST',
        body: data,
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }).then(response => response.json())
}*/

function sendData (url, data) {
    const request = new XMLHttpRequest();
    request.open('POST', url);
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send(JSON.stringify(data));

    request.addEventListener('load', function () {
        console.log(JSON.parse(this.responseText));
    })
}
getData();

