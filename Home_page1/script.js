const menu=document.querySelector(".ri-menu-line");
const submenus=document.querySelector(".subMenus");
let quotes=document.querySelector("#quotes");
let mainEvents=document.querySelector(".main-events");
let allBikes=[
    {
        bikeName:"Gravel Bike",
        url:"https://plus.unsplash.com/premium_photo-1663051011628-410ddd086636?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1vdW50YWlucyUyMGN5Y2xlc3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        bikeName:"Mountain Bike",
        url:"https://images.unsplash.com/photo-1642485158268-eb3568abca64?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
    },
    {
        bikeName:"Road Bike",
        url:"https://images.unsplash.com/photo-1708921139380-ca2bfd1c8444?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8",
    },
    {
        bikeName:"Electric Bike",
        url:"https://images.pexels.com/photos/11049373/pexels-photo-11049373.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
        bikeName:"Racing Bike",
        url:"https://images.pexels.com/photos/9994278/pexels-photo-9994278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
        bikeName:"Kide Bike",
        url:"https://images.pexels.com/photos/8926944/pexels-photo-8926944.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    }
];

const logo=[
    {url:"https://bcassetcdn.com/public/blog/wp-content/uploads/2021/10/21174027/Cannondale-Bicycle-Corporation.png"},
    {url:"https://bcassetcdn.com/public/blog/wp-content/uploads/2021/10/21174035/CUBE-Bikes-UK-Ltd..png"},
    {url:"https://bcassetcdn.com/public/blog/wp-content/uploads/2021/10/21174344/Raleigh.png"},
    {url:"https://bcassetcdn.com/public/blog/wp-content/uploads/2021/10/21174057/Giant-Bicycle-Inc..png"},
    {url:"https://bcassetcdn.com/public/blog/wp-content/uploads/2021/10/21174115/Lapierre-SAS.png"},
    {url:"https://bcassetcdn.com/public/blog/wp-content/uploads/2021/10/21174219/SCOTT-Sports-SA.png"},
    {url:"https://bcassetcdn.com/public/blog/wp-content/uploads/2021/10/21174214/Santa-Cruz-Bicycles-LLC.png"},
    {url:"https://bcassetcdn.com/public/blog/wp-content/uploads/2021/10/21174232/XDS-Bikes.png"},
];

let eventImg=[
    {
    url:"https://images.unsplash.com/photo-1458372128312-1d1c1dd115e4?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    place:"Mumbai"  
   },
    {
    url:"https://images.unsplash.com/photo-1458372909833-ba5ddd34a307?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    place:"Nagpur"  
   },
    {
    url:"https://images.unsplash.com/photo-1506316940527-4d1c138978a0?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    place:"Pune"   
   },
    {
    url:"https://images.unsplash.com/photo-1705605687349-1b8e0b7956a2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    place:"Delhi"  
   }
];

function allData(){
    let allinfo="";
for(bikes of allBikes){
    allinfo +=`<div class="box">
    <img src="${bikes.url}" alt="image">
    <div class="text">
     <h3>${bikes.bikeName}</h3>
     <button>Shop Now</button>
    </div>
 </div>`;
}
document.querySelector(".bikesCards").innerHTML=allinfo;
}
allData();
let data=true;
menu.addEventListener("click",()=>{
    if(data){
        submenus.style.transform="translateY(0)";
        menu.style.transform="rotate(90deg)";
        document.querySelector('nav').style.backgroundColor="rgb(32,32,32)";
        data=false;
    }else if(data==false){
        submenus.style.transform="translateY(-350px)";
        menu.style.transform="rotate(180deg)";
        data=true;
    }

})

function allLogo(){
    let allinfo="";
    logo.forEach((data)=>{
        allinfo +=` <div class="logo-img">
        <img src="${data.url}" alt="">
    </div>`
    })
    document.querySelector(".models").innerHTML=allinfo;
}
allLogo();

