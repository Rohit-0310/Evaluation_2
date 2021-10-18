let news = document.getElementById(newses);

    async function getnews(){
        let queary = document.getElementById("queary").value;

        let res = await fetch(`http://newsapi.org/v2/everything?q=${queary}&apiKey=1128885b205e49d189a816e1e6e673a4`)

        let data = await res.json()
        console.log("data", data)

        newses.append(data)
        // append_News(data)
    }


    // let newses = document.getElementById("data");

    // function append_News(data){


    //     let author = document.createElement("p");
    //     author.innerText = airticles.author;

    //     let content = document.createElement("p");
    //     content.innerText = airticles.content;

    //     newses.append(author, content)
    // }