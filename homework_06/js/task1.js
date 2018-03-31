
var http = {
    get: obj => {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open(obj.method || "GET", obj.url);
        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.response);
            } else {
                reject(xhr.statusText);
            }
        };
        xhr.onerror = () => reject(xhr.statusText);
        xhr.send(obj.body);
    });
    },
    post: obj => {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        var url = "https://shrouded-garden-94580.herokuapp.com/";
        var params = obj;
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function() {
            if(xhr.readyState == 4 && xhr.status == 200) {
                alert(xhr.responseText);
            }
        }
        xhr.send(params);
    });
    }
}
