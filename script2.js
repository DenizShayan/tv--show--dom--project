
const url="https://api.tvmaze.com/shows/7/episodes"

let container=document.querySelector(".container")
let listMovies=document.querySelector("#listMovies") 

const card=(data)=>{
    for(let movie of data){
        let p=document.createElement("p");
        p.innerText=movie.name;
        let img=document.createElement("img");
        img.src=movie.image.medium;
        // document.body.append(img);
        // document.body.append(p);

        container.append(img);
        container.append(p);
        
    }
}

const list=(data)=>{
    for(let movie of data){
        let option=document.createElement("option")
        option.innerText=movie.name;
        listMovies.append(option);
    }
}

let removeCard=()=>{
    container.innerHTML="";
}

let getData=async()=>{
    try{
    const response=await axios.get(url)
    let movies=response.data;

    card(movies);
    list(movies);

    listMovies.addEventListener("change",()=>{
        console.log(listMovies.value);
        if(listMovies.value==="All episods"){
            removeCard();
            card(movies);
        }else{
            let myMovie=movies.filter((el)=>{
                return el.name===listMovies.value
            })

            removeCard();
            card(myMovie);
        }
    })

    }catch(err){
        console.log("Error!!!");
    }
}


