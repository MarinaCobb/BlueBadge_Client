// switch (window.location.hostname) {
//     // this is the local host name of your react app
//     case 'localhost' || '127.0.0.1':
//         // this is the local host name of your API
//         APIURL = 'http://localhost:4000';
//         break;
//     // this is the deployed react application
//     case 'mc-flashcard-server.herokuapp.com':
//         // this is the full url of your deployed API
//         APIURL = 'https://mc-flashcard-server.herokuapp.com'
// }

let APIURL = '';
if (window.location.hostname==='localhost' || window.location.hostname == '127.0.0.1') {
    APIURL = 'http://localhost:40000';
} else {
    APIURL = 'https://mc-flashcard-server.herokuapp.com'
}

export default APIURL;