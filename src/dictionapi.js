
fetch("https://api.dictionaryapi.dev/api/v2/entries/en/dog")
    .then(res => res.json())
    .then(data =>{
        console.log(data)
    })
    .catch(err => {
        console.log(`error ${err}`);
    })