
const url="https://api.tvmaze.com/shows/7/episodes"

let container=document.querySelector(".container")
let listMovies=document.querySelector("#listMovies") 

const card=(data)=>{
    for(let movie of data){
        let div=document.createElement("div")
        div.classList.add("myImages")
        let p=document.createElement("p");
        p.classList.add("para")
        p.innerText=movie.name;
        let p2=document.createElement("p")
        p2.classList.add("Summery")
        p2.innerText=movie.summary.replace("<p>", "").replace("</p>", "");
        let img=document.createElement("img");
        img.src=movie.image.medium;
        let i=document.createElement("i")
        i.classList.add("bi","bi-play","button")
        let i2=document.createElement("i")
        i2.classList.add("bi","bi-clock","button")
        div.append(img);
        div.append(p);
        div.append(p2);
        div.append(i);
        div.append(i2);

        container.append(div);
        // container.append(p);

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

axios.get(url).then((Response)=>{
    let movies=Response.data;

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
    })
    .catch((e)=>{
        console.log("Error!!!");
    })