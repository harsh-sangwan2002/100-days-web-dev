const api = "https://api.github.com/users/harsh-sangwan2003";

fetch(api).then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
})