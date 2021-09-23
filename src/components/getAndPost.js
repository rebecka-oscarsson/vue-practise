function getData(url, callbackFunction) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (callbackFunction) {
                callbackFunction(data)
            }
        })
        .catch(function(err) {
            console.log('Något gick fel', err);
        });
}

function postData(url, dataToSend, callbackFunction) {
    fetch(url, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dataToSend)
        })
        .then(response => response.json())
        .then(data => {
            if (callbackFunction) {
                callbackFunction(data)
            }
        })
        .catch(function(err) {
            console.log('Något gick fel', err);
        });
}

export { getData, postData }