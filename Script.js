
// Shopping Card Slidebar

document.addEventListener('DOMContentLoaded',()=>{
    const openCartButton=document.getElementById('openCartSidebar')
    const closeCartButton=document.getElementById('closeCartSidebar')
    const offcanvasss=document.getElementById('offcanvasss')

    openCartButton.addEventListener("click",()=>{
        offcanvasss.classList.add('active')
    })

    closeCartButton.addEventListener("click",()=>{
        offcanvasss.classList.remove('active')
    })
})




// notification slidebar

document.addEventListener('DOMContentLoaded',()=>{
    const openButton=document.getElementById('openSidebar')
    const closeButton=document.getElementById('closeSidebar')
    const offcanvass=document.getElementById('offcanvass')

    openButton.addEventListener("click",()=>{
        offcanvass.classList.add('active')
    })

    closeButton.addEventListener("click",()=>{
        offcanvass.classList.remove('active')
    })
})




// Item data is here



let Data=[
    {
        title:"Haldiram's Sev Bhujia",
        img:'../image/product-img-1.jpg',
        price:25
    },
    {
        title:"Haldiram's Sev Bhujia",
        img:'../image/product-img-2.jpg',
        price:25
    },
    {
        title:"Haldiram's Sev Bhujia",
        img :"../image/product-img-3.jpg",
        price:25
    },
    {
        title:"Haldiram's Sev Bhujia",
        img :"../image/product-img-4.jpg",
        price:25
    },
    {
        title:"Haldiram's Sev Bhujia",
        img :"../image/product-img-5.jpg",
        price:25
    },
    {
        title:"Haldiram's Sev Bhujia",
        img :"../image/product-img-6.jpg",
        price:25
    },
    {
        title:"Haldiram's Sev Bhujia",
        img: "../image/product-img-7.jpg",
        price:25
    },
    {
        title:"Haldiram's Sev Bhujia",
        img :"../image/product-img-8.jpg",
        price:25 
    },
    {
        title:"Haldiram's Sev Bhujia",
        img :"../image/product-img-1.jpg",
        price:25
    },
    {
        title:"Haldiram's Sev Bhujia",
        img :"../image/product-img-9.jpg",
        price:25
    },
    {
        title:"Haldiram's Sev Bhujia",
        img :"../image/product-img-2.jpg",
        price:25
    },
    {
        title:"Haldiram's Sev Bhujia",
        img :"../image/product-img-3.jpg",
        price:25
    },
    {
        title:"Haldiram's Sev Bhujia",
        img :"../image/product-img-10.jpg",
        price:25
    },
    {
        title:"Haldiram's Sev Bhujia",
        img :"../image/product-img-11.jpg",
        price:25
    },
    {
        title:"Haldiram's Sev Bhujia",
        img :"../image/product-img-12.jpg",
        price:25
    }
]


// display item in card formate


let productList=document.getElementById('productList')

function play(){
    
Data.forEach((value,key) => {
    let newDiv=document.createElement('div')
    newDiv.classList.add('box')

    newDiv.innerHTML=`
    <div class="top">
        <img src="${value.img}" alt="">
        <div class="txt">
            <span>Sale</span>
            <p>10%</p>
        </div>
    </div>
    <div class="btm">
        <p>Snack & Munchies</p>
        <h6>${value.title}</h6>
        <div class="star">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star-half"></i>
            <span>4.3 (4)</span>
        </div>
        <h5>$${value.price} <span>$28</span></h5>
        <button onclick="addToCart(${key})">+ ADD</button>
    </div>
   
    `
    productList.appendChild(newDiv)
});

}

play();



// Addtocard button selected item


let openshopping=document.querySelector('.shopping')
let closeShopping=document.getElementById("closeCartSidebar")
let list=document.querySelector('.list')
let listCards=document.querySelector('.listCard')
let offcanvasss=document.querySelector('.offcanavasss')
let total=document.querySelector('.total')
let quantity=document.querySelector('.quantity')
let totalsaving=document.querySelector('.totalsaving')


var listCard=[]
function addToCart(key){
    console.log('hello');
    if(listCard[key]==null){
        listCard[key]={...Data[key],quantity:1}
    }
    else{
        listCard[key].quantity+=1
    }
    reloadCart()
}

function reloadCart(){
    listCards.innerHTML=""
    let count=0;
    let totalPrice=0

    listCard.forEach((value,key)=>{
        if(value!=null){
            totalPrice+=value.price*value.quantity
            count+=value.quantity
            let newli=document.createElement("li")
            newli.innerHTML=`
            <img src='../image/${value.img}'/>
            <div>${value.title}</div>
            <div>&#8377;${value.price*value.quantity.toLocaleString()}.00</div>
            <div>
            <button onclick="changeQuantity(${key},
            ${value.quantity-1})">-</button>
            <div class='count'>${value.quantity}</div>
            
            <button onclick="changeQuantity(${key},
            ${value.quantity+1})">+</button>

            </div>
            
            `
            listCards.appendChild(newli)
        }
    })
    total.innerHTML= '&#8377;' +totalPrice.toLocaleString()
    quantity.innerHTML=count;
    quantity2.innerHTML="&#8377;"+totalPrice.toLocaleString() + ".00";
    
}
function changeQuantity(key,quantity){
    if(quantity<=0){
        delete listCard[key]
    }
    else{
        listCard[key].quantity=quantity
    }
    reloadCart()
}

document.body.addEventListener("click", () => {
    document.documentElement.style.setProperty('--scrollbar-color', 'limegreen');
  });















