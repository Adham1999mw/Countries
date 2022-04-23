
 let search = document.querySelector("[type='text']")

 let ok = document.getElementsByClassName("fa-magnifying-glass")[0]

let all = document.getElementsByClassName("all")[0]


let nav = document.getElementsByClassName("all-nav")[0]

let main  = document.getElementsByClassName("main")[0]

let moon = document.getElementsByClassName("fa-moon")[0]


let h2 = document.querySelector("nav .text h2 ")



























  var arrn =[]
 



















 fetch("https://restcountries.com/v2/all")
.then(resolve => resolve.json())
.then(data => 
    {
        console.log(data)
        return data
    })
.then(data =>{

    ok.addEventListener("click",function(){
       let words= search.value.trim()
       let word = `${words.slice(0,1).toUpperCase()}${words.slice(1)}`
    // console.log(word)

        for (let i =0; i<data.length;i++){
            console.log(data[i].name)
             if (word === data[i].name){
                //  console.log(data[i].name)
                //  console.log(data[i].population)
                //  console.log(data[i].capital)
                //  console.log(data[i].region)
                //  console.log(data[i].flags.png)

                 let newdiv = document.createElement("div")

                let flag = document.createElement("img")
                flag.src=data[i].flags.png
                let hyper =document.createElement("a")
                hyper.href="internal/index.html"
                // hyper.setAttribute("target", "_blank")












                newdiv.appendChild(flag)








                 let textdiv =document.createElement("div")
                 textdiv.classList.add("co-text")
                 let newdiv_text= document.createTextNode(data[i].name)
                 textdiv.appendChild(newdiv_text);
                 newdiv.appendChild(textdiv)
                 newdiv.classList.add("col")
                 newdiv.classList.add("col-light")
                 newdiv.setAttribute("data-name",data[i].name)
                 let newp1 = document.createElement("p")
                 let newp1_text  =document.createTextNode(data[i].population)
                 newp1.appendChild(newp1_text)
                 newdiv.appendChild(newp1)

                 let newp2 = document.createElement("p")
                 let newp2_text  =document.createTextNode(data[i].region)
                 newp2.appendChild(newp2_text)
                 newdiv.appendChild(newp2)

                 let newp3 = document.createElement("p")
                 let newp3_text  =document.createTextNode(data[i].capital)
                 newp3.appendChild(newp3_text)
                 newdiv.appendChild(newp3)

                hyper.appendChild(newdiv)
                 all.appendChild(hyper)
                 
                
             }
        }
        search.value=""
        let col = document.querySelectorAll(".countries .all a .col")
        col.forEach(function(ele){
    
            ele.addEventListener("click",function(){
                window.localStorage.setItem("country-name",this.getAttribute("data-name"))

            })
        })


    })

        return(data)
})










moon.addEventListener("click",function(){

nav.classList.toggle("nav-dark")
document.body.classList.toggle("main-dark")
moon.classList.toggle("moon-dark")
h2.classList.toggle("worddark")
let wordds = document.querySelectorAll(".co-text")


wordds.forEach(function(ele){
    ele.classList.toggle("wordccdark")
})




})



