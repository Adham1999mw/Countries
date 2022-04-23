
let all_api = document.getElementsByClassName("all-api")[0]
let lan =[]
fetch("https://restcountries.com/v2/all")
.then(resolve => {
    return  resolve.json()
}).then(data => {
    console.log(data)
    return data
}).then(data => {
    // console.log(window.localStorage.getItem("country-name"))
    
    for(let i=0;i<data.length;i++){
        if (data[i].name===window.localStorage.getItem("country-name")){
            let flag_div = document.createElement("div")
            flag_div.classList.add("flag_div")
            let flag = document.createElement("img")
            flag.src=data[i].flags.png
            flag_div.appendChild(flag)
            all_api.appendChild(flag_div)




            let info_div= document.createElement("div")
            info_div.classList.add("info_div")
            
            let h2= document.createElement("h2")
            let h2_text = document.createTextNode(data[i].name)
            h2.appendChild(h2_text)
            // info_div.appendChild(h2)
            // all_api.appendChild(info_div)



            let info1 = document.createElement("div") 
            info1.classList.add("info1")

            info1.appendChild(h2)

            let p1 =document.createElement("p") 

            let p1_text = document.createTextNode(`Population : ${data[i].population}`)

            p1.appendChild(p1_text)
            info1.appendChild(p1)


            let p2 =document.createElement("p") 

            let p2_text = document.createTextNode(`Region : ${data[i].region}`)

            p2.appendChild(p2_text)
            info1.appendChild(p2)

            let p3 =document.createElement("p") 

            let p3_text = document.createTextNode(`Capital : ${data[i].capital}`)

            p3.appendChild(p3_text)
            info1.appendChild(p3)

            let p4 =document.createElement("p") 

            let p4_text = document.createTextNode(`Native Name : ${data[i].nativeName}`)

            p4.appendChild(p4_text)

            let p5 =document.createElement("p") 

            let p5_text = document.createTextNode(`Subregion: ${data[i].subregion}`)

            p5.appendChild(p5_text)
            info1.appendChild(p5)
            all_api.appendChild(info1)

         



            let info2 = document.createElement("div") 
            info2.classList.add("info2")

            let p11 =document.createElement("p") 

            let p11_text = document.createTextNode(`topLevelDomain : ${data[i].topLevelDomain}`)

            p11.appendChild(p11_text)
            info2.appendChild(p11)

            let p22 =document.createElement("p") 

            let p22_text = document.createTextNode(`Currencies : ${data[i].currencies[0].name}`)

            p22.appendChild(p22_text)
            info2.appendChild(p22)



            // console.log(data[i].languages[0].name)
            // console.log(data[i].languages[0].name)

            for (let j=0;j<data[i].languages.length;j++){
            // console.log(data[i].languages[j].name)

                lan.push(data[i].languages[j].name)

            }
            console.log(lan.slice())


            let p33 =document.createElement("p") 

            let p33_text = document.createTextNode(`Languages : ${lan}`)

            p33.appendChild(p33_text)
            info2.appendChild(p33)



    


            all_api.appendChild(info2)



            // let border = document.createElement("div")
            // border.classList.add("border")



            // let border_text = document.createTextNode(`Languages : ${}`)
            let numsdiv = document.createElement("div")
            numsdiv.classList.add("numsdiv")
            let numcreator_div = document.createElement("p")
            // let numcreator_div_text = document.createTextNode(0)

            let count = 0 
            let m = setInterval(function(){
                if (count <=data[i].gini){
                    count+=1
                
                    numcreator_div.textContent=""
               let numcreator_div_text = document.createTextNode(count)
               numcreator_div.appendChild(numcreator_div_text)
               numsdiv.appendChild(numcreator_div)
               info1.appendChild(numsdiv)
              
               }
            },60)
            console.log(count)










            // let m =setInterval(function(){
            //     let counter =0 ;

            //     for (counter=0; counter <= 5 ; i=counter++){
            //         console.log(counter)
                    
            //     }

            //     // if(counter <= 5 ){
            //     //     numcreator_div.appendChild(numcreator_div_text)
            //     //     numsdiv.appendChild(numcreator_div)
            //     //     info1.appendChild(numsdiv)
            //     //     console.log(counter)
            //     //     counter++;

                    

            //     // }else{
            //     //     clearInterval(m)
            //     // }
              



            // },500)
            // let numcreator_div_text = document.createTextNode(data[i].population)

            
            

        }
  

    }
    return(data)
})



let nav = document.getElementsByClassName("all-nav")[0]

let moon = document.getElementsByClassName("fa-moon")[0]
let h2 = document.querySelector("nav .text h2 ")
let namec = document.querySelector(".back p ")
let namei = document.querySelector(".back i ")



moon.addEventListener("click",function(){
let infoh2 = document.querySelector(".all-api .info1 h2")
let infopp = document.querySelectorAll(".all-api .info1 p")
let infopp2 = document.querySelectorAll(".all-api .info2 p")


    infopp.forEach(function(ele){
        ele.classList.toggle("worddark")
    })
    infopp2.forEach(function(ele){
        ele.classList.toggle("worddark")
    })

    nav.classList.toggle("nav-dark")
    document.body.classList.toggle("main-dark")
    moon.classList.toggle("moon-dark")
    h2.classList.toggle("worddark")
    namec.classList.toggle("worddark")
    namei.classList.toggle("worddark")
    infoh2.classList.toggle("worddark")


    

    
    
  
    
    
    
    })
    

    let back = document.getElementsByClassName("back")[0]

    back.addEventListener("click",function(){
        history.go(-1)
    })

    

    