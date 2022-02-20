
// this file for learning purposes only.

var axios = require("axios").default;

var options = {
  method: 'POST',
  url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'accept-encoding': 'application/gzip',
    'x-rapidapi-host': 'google-translate1.p.rapidapi.com',
    'x-rapidapi-key': '5b8533131emshd7eac99f85f72adp196c88jsnb9446f244974'
  },
  data: {q: 'Hello, world!', target: 'es', source: 'en'}
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});