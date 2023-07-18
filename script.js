/* <div id="jokes" class="joke">
awesome joke is loading ....
</div>
<button id="jokeBtn" class="btn">
Next Joke
</button> */

const jokes = document.querySelector('#jokes');

const jokeBtn = document.querySelector('#jokeBtn');



// using promises----->>>>>



// const  genrateJokes= ()=>
// {
    // const setHeader = {
// headers:{
//     Accept:"application/json"
// }

// }
//     fetch('https://icanhazdadjoke.com' ,setHeader)
//     .then((res)=>{res.json()})
//     .then((data)=>{
//         jokes.innerHTML=data.joke;
//     })
    
//     .catch((error)=>{
//         console.log(error);
//     })


// }



//using async await ---->>>>


const  genrateJokes= async ()=>
{
    try{
    
const setHeader = {
    headers:{
        Accept:"application/json"
    }
    
    }
     const res = await fetch('https://icanhazdadjoke.com' ,setHeader);
     const data   = await res.json();
     jokes.innerHTML=data.joke;
    }
    catch(error)
    {
        console.log(`the error ${error}`);
    }
   

}



jokeBtn.addEventListener('click',genrateJokes);
genrateJokes(); 