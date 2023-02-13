import { menuArray } from  './fata.js'

let check = false ; 
let whole = document.getElementById('container')
let content= []
let buttonEl = document.getElementById('paypop')
let inputEl = document.getElementById('cusname')

buttonEl.addEventListener('submit', function(e){
    e.preventDefault()    
    let thank = `
    <div class="greet">
            <p class="thankyou">
                Thanks ${inputEl.value}! Your Order is on the way!
            </p>
    </div>
    ` 
    document.getElementById('pop').style.display='none'
   rener(thank)
})
document.getElementById("pay-btn").addEventListener("submit",function(e){
    e.preventDefault()
    document.getElementById("pay").style.display='none'
    
    let tq=
    `
    <div class="greet">
    <p class="thank">Thanks ${names.value}</p>
    </div>
    `
    render(tq)
})
    

function maketotal(id){
    const obj = menuArray.filter(function(menu){
        return menu.id==id
      })[0]
  

        const res= content.filter(function(names){
            return names.name==obj.name
        })
        /*
        console.log(obj)
        console.log(res)
        */
        if(res.length===0){
            content.push({
          
            })           name:obj.name,
                id:obj.id,
                count:1,
                price:obj.price
            }
            
    else {  
         res[0].count++
    } 
      
     
}

whole.addEventListener('click',function(e){

                if(e.target.dataset.add){
                   
                 //  console.log("clicked"+count)
                
                    maketotal(e.target.dataset.add)
                    rener(buillist())
                    

                }
                else if (e.target.dataset.remove){
                    
                    remove(e.target.dataset.remove)
                    rener(buillist())
                }
                else if (e.target.dataset.col){
                    document.getElementById('pop').style.display='block'

                }
                    

})
function iterate(ingredients){
            let str = ''
            if(ingredients.length>0){
                for(let i = 0 ; i<ingredients.length ; i++){
                    str+=ingredients[i]
                    if(i!=ingredients.length-1)
                    str+=','
                    else 
                    str+='.'
                    
                }
            }
    return str 
}
function getList(){
      let top =
`<div class = "top">
        <div id ="topp">
            <h1>
                Prabhat's Dinner
            </h1>
            <p>
                The best Burgers and Pizzas in the town
            </p>  
        </div> 
</div>
`
let content =``
for(let i = 0 ; i<menuArray.length; i++){
    content+=    
`
<div id="box">
    <div>
        <p id="emoji">
            ${menuArray[i].emoji}
        </p>
    </div>
    <div id="choice">    
                <div id ="es1">
                        <p id="name">
                            ${menuArray[i].name}
                        </p>
                        <p id="ingredients">
                            ${iterate(menuArray[i].ingredients)}
                        </p>
                        <p id="price">
                            $${menuArray[i].price}
                        </p>
                </div> 
            <div>       
                    <button data-add= "${menuArray[i].id} ">Add+</button>
            </div>                
    </div>
</div>  
`
}
 return top+content

}
function rener(str){
    
    if(content.length!=0){
     whole.innerHTML=getList()+str
    }
     else {
        whole.innerHTML=getList()
     }
}
function remove(id){
    
    let tempcheck = content.filter(function(names){
        return names.id==id
    })
    console.log(tempcheck[0])
    if(tempcheck[0].count>1){
        tempcheck[0].count--
    }else if (tempcheck[0].count==1){
        content=content.filter(function(names){
            return names.id!=id
        })
    }
    //console.log(content)
}
function buillist(){
    let stri = `<p class='ototal'>YOUR ORDER<p>`
    
      let total = 0   
      for(let i = 0 ; i<content.length ; i++){
                total+=content[i].price*content[i].count
      }   
     // console.log(content)    
      for(let i = 0 ; i<content.length; i++){
        
        stri+=`
        <div class="olist" >
                <div>
                        <p id = "on">
                            ${content[i].name} 
                            <span class = "rem" data-remove="${content[i].id}">
                            remove
                            </span>
                           
                        </p>
                </div>
                <div class = "qtydiv">
                    <span class = "qty">qty:${content[i].count}</span>
                </div>
                <div>
                        <p id= "selectprice">
                            $${content[i].price*content[i].count}
                        </p>
                </div>
        </div>
        `
      }
      stri+=`
            <div class = "olist upperbo" >
                    <p>
                        Total cost 
                    </p>
                    <p>
                        $${total}
                    </p>
            </div>`
            stri+=`<div>
            <p class = "complete" data-col="coll">Complete Order</p>
            </div>`

            return stri
}
rener('')




<body>
    <div id="container"></div>
    <form id="paypop"> 
    <div id = "pop">
        <h2 id="paytop">Enter Your Card Details</h2>
        <input id="cusname" type = "text" name="Name" placeholder = "Enter Your Name" required/>
        <input type = "number" name="Number" placeholder = "Enter Your Card Number" required/>
        <input type = "number" name="CVV" placeholder = "Enter Your CVV" required/>
        <button type="submit" class="payb" >Pay</button>
</div>
</form>
    <script src="logic.js" type="module"></script>      
</body>