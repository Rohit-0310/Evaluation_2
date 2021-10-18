let news = document.getElementById(newses);

    async function getnews(){
        let queary = document.getElementById("queary").value;

        let res = await fetch(`http://newsapi.org/v2/everything?q=${queary}&apiKey=1128885b205e49d189a816e1e6e673a4`)

        let data = await res.json()
        console.log("data", data)

        newses.append(data)
    }