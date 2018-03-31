var div = document.getElementById("info");

function test(){

    http.get({url: "https://ipapi.co/city/"})
    .then(data => {
        console.log(data);
        var a = data;
        div.innerHTML += "<br> City: "
        div.innerHTML += a;
    
    })
    .catch(error => {
        console.log(error);
    });
    
    http.get({url: "https://ipapi.co/country_name/ "})
    .then(data => {
        console.log(data);
        var a = data;
        div.innerHTML += "<br> Country: "
        div.innerHTML += a;
        
    })
    .catch(error => {
        console.log(error);
    });

    http.get({url: "https://ipapi.co/latitude/ "})
    .then(data => {
        console.log(data);
        var a = data;
        div.innerHTML += "<br> Latitude: "
        div.innerHTML += a;
        
    })
    .catch(error => {
        console.log(error);
    });

    http.get({url: "https://ipapi.co/longitude/ "})
    .then(data => {
        console.log(data);
        var a = data;
        div.innerHTML += "<br> Longitude: "
        div.innerHTML += a;
        
    })
    .catch(error => {
        console.log(error);
    });
    document.getElementById("val").style.display ="block";
}

function validate(){
    http.get({url: "https://ipapi.co/json/ "})
    .then(data => {
        http.post(data);
    })
    .catch(error => {
        console.log(error);
    });
}