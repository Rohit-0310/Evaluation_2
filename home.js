let news = document.getElementById(newses);

    async function getnews(){
        let queary = document.getElementById("queary").value;
        //https://newsapi.org/v2/top-headlines?country=in&apiKey=1128885b205e49d189a816e1e6e673a4
        let res = await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=1128885b205e49d189a816e1e6e673a4`)

        let data = await res.json()
        
        console.log("data", data)

        // newses.append(data)
    }

    function appendNews(m){
        m.forEach(({articles})=>{
            let p = document.createElement("p");

            p.innerHTML = Title;
            newses.append(p);
        })
    }