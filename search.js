let news = document.getElementById(newses);

    async function getnews(){
        let queary = document.getElementById("queary").value;

        let res = await fetch(`http://newsapi.org/v2/everything?q=${news}&from=2021-10-17&to=2021-10-17&sortBy=popularity&apiKey=1128885b205e49d189a816e1e6e673a4`)

        let data = await res.json()
        console.log("data", data)

        newses.append(data)
    }