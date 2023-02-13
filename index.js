import {menuArray} from './data.js'
let cross=document.getElementById("cross")

let greet=document.getElementById("greet")
let names=document.getElementById("name-card")
let whole=document.getElementById("container")

let content=[]
let payBtn=document.getElementById("pay-btn")
function makeTotal(menuId){
   
    const targetData = menuArray.filter(function(menu){
        return menu.id==menuId

    })[0]
    let targe=content.filter(function(names){
        return names.name==targetData.name
    })
    
    if(targe.length===0){
    content.push(
        {
            name: targetData.name,
            price: targetData.price,
             id: targetData.id,
             count:1
        }
    )
    }
    else{
        targe[0].count++
    }
}



whole.addEventListener("click",function(e){
   
if(e.target.dataset.add){
 makeTotal(e.target.dataset.add)
    render(rendercontent())
}  

  else if(e.target.dataset.remove){
handleRemove(e.target.dataset.remove)
render(rendercontent())
  }

 else if(e.target.dataset.order){
    document.getElementById("pay").style.display='flex'
 }
 

})

cross.addEventListener('click',function(){
    document.getElementById("pay").style.display='none'
})
document.getElementById("pay-form").addEventListener('submit',function(e){
    e.preventDefault()
    document.getElementById("pay").style.display='none'
    
   
    let tq=`
    <div id="greet" class="greet">
    <p class="thank">Thanks ${names.value}!!<br> your order is on the way ... 🚚</p>
    <div class="cross1">
                    <i class="fa fa-times fa-2x" id="cross1" aria-hidden="true"></i>
                </div>
    </div>
    
    `
   
    render(tq)
    document.getElementById("cross1").addEventListener('click',function(){
        document.getElementById("greet").style.display='none'
    })
})
function handleRemove(removeId){

    const temp = content.filter(function(menu){
        return menu.id==removeId

    })[0]
    if(temp.count>1){
temp.count--
    }
    else if(temp.count==1){
        content=content.filter(function(names){
          return  names.id!=removeId
        })
    }
}

function getItem(){
let top=`
<header class="cover">
<div class="text">
<h3>Shivam's menu</h3>
<h6>The best burger's and pizza's in town</h6>
</div>
</header>

`
    let items=``
    
    menuArray.forEach(function(menu){

     items+=`<div class="item">
    <div class="emoji">
            <p id="emo"> ${menu.emoji}</p>
    </div>
    <div class="detail">
            <div class="name">
                <p class="namew" ><span id="name" >${menu.name}</span></p>
                <p class="ingredw"><span >${menu.ingredients}</span></p>
                <p class="pricew">$ ${menu.price}</p>

            </div>
            <div class="add">
                <p><i class="fa fa-plus-circle fa-2x" aria-hidden="true" data-add="${menu.id}"></i>
                </p>
            </div>
    </div>
    </div>
    `  
    })
    return top+items
}

 
function render(strl){
    if(content.length!=0){
        whole.innerHTML=getItem()+strl
    }
else{
    whole.innerHTML=getItem()
}


}


function rendercontent(){
    let str = `
    <div class = "order-details">
     <p >YOUR ORDER </p>
       `
       let totalPrice = 0 ; 
       
       for(let i = 0 ; i<content.length ; i++){
          
           totalPrice+=(content[i].price)*(content[i].count)
        str +=  `
        
           <div class="cart">
               <div class="order-item">
               <p class="name">${content[i].name} <span class="a" data-remove="${content[i].id}" >remove</span></p>
              <p> <span class="text">Qty(${content[i].count})</span></p>
               <p class="price">${content[i].price*content[i].count}</p>
               </div>
           </div>
          
        `    
       }
       str+=`  
       <hr/>   
      
        <div class="order-item">
       <p class="name">Total price:</p>
       <p class="price">${totalPrice}</p>
       </div>
       <button data-order="order1">Complete Order</button>
       </div>
      `
     
   return str 
       
   }

render('')




