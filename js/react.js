
if (document.title === 'start bootstrap')
{
document.getElementById("app").style.display = "none";

setTimeout(function() {
    document.getElementById("c-loading").style.display = "none";
    document.getElementById("loading").style.display = "none";  
    document.getElementById("app").style.display = "block";          
}, 3000);

}



const app = el("#app");

var keysSimpleproducts = getStorage('Simpleproducts');

const pagadd =  `
<div class="container">

 <div class="row mt-5 gap-3">
    <div class=" row-md-4 p-3 d-none alert alert-warning alert-dismissible fade show"  id="AddMessage" role="alert">
     product add
     <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
   </div>
  <div class="row-md-4">
    <input type="text" class="form-control" id="productName"  placeholder="product name">
  </div>
  <div class="row-md-4 ">
    <input type="text" class="form-control" id="productDtl" placeholder="dtl">
  </div>
  <div class="row-md-4">
    <input type="text" class="form-control" id="productPrice" placeholder="price">
  </div>
</div>
<div class="row mt-3 mb-5 justify-content-center">
  <div class="row">
    <button class="btn btn-primary" id ="btn-add-prodcut">Add to Local Storage</button>
  </div>
</div>
</div>` 

const nav = ` <nav class="navbar navbar-expand-lg bg-light p-0">
<a class="navbar-brand" href="#">Start bootstrap</a>
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
  aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarScroll">
  <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
    <li class="nav-item">
      <a class="nav-link active" aria-current="page" href="index.html">Home</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="add.html">add product</a>
    </li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
        aria-expanded="false">
        shope
      </a>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li>
          <hr class="dropdown-divider">
        </li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
      </ul>
    </li>
  </ul>
  <button class="btn btn-outline-dark ">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-fill"
      viewBox="0 0 16 16">
      <path
        d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z">
      </path>
    </svg>
    cart
    <span class="bg-dark rounded-circle text-white p-sm-1 p-0"> 0 </span>
  </button>
</div>
</nav>
`
var nav2=`<nav class="navbar navbar-expand-lg bg-body-tertiary">
<div class="container-fluid">
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <a class="navbar-brand" href="#">Navbar</a>
  <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" aria-disabled="true">Disabled</a>
      </li>
    </ul>
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</div>
</nav>`

const header = ` 
<header class="bg-dark center-div h-100 ">
<div class="text-white d-flex justify-content-center h1"> shope is style</div>
<div class=" d-flex fs-6 justify-content-center text-light"> shope in style</div>
</header>`

const main = `
<main class="list-group mt-5">
<div class="row row-cols-1 row-cols-md-3 m-0   ">        
<div class="col position-relative col-md-3 p-0 border border-1">
  <!-- <img src="" class="card-img-top" alt="..."> -->
  <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg"
    role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false">
    <title>Placeholder</title>
    <rect width="100%" height="100%" fill="#868e96"></rect>
    <text class="text-light" x="50%" y="50%" fill="#dee2e6" dy=".3em ">450 * 300</text>
  </svg>
  <div class="card-body p-4 ">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">
      <span class="text-decoration-none"> $80.00 </span>  $40.00
    </p>
    <p class="card-text"> 
      <span class="rating-stars m-0 gold-rating-stars">&nbsp</span>   
     </p>
    <a href="#" class="btn btn-outline-dark ">add to cart</a>
  </div>
</div>
<div class="col position-relative col-md-3 p-0 border border-1">
  <!-- <img src="" class="card-img-top" alt="..."> -->
  <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg"
    role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false">
    <title>Placeholder</title>
    <rect width="100%" height="100%" fill="#868e96"></rect>
    <text class="text-light" fill="#dee2e6"> 450 * 300</text>
  </svg>
  <div class="card-body p-4">
    <span class="bg-dark text-white btn btn-sm p-sm-0  position-absolute top-0 end-0  me-3 mt-1 me-3 mt-1"> sale</span>
    <h5 class="card-title">Card title</h5>
    <p class="card-text"> 
      <span class="rating-stars m-0 gold-rating-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span> </p>
    <p>  <span class="text-decoration-line-through"> $80.00 </span>  $40.00
    </p>
    <a href="#" class="btn btn-outline-dark">add to cart</a>
  </div>
</div>
<div class="col position-relative col-md-3 p-0 border border-1">
  <!-- <img src="" class="card-img-top" alt="..."> -->
  <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg"
    role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false">
    <title>Placeholder</title>
    <rect width="100%" height="100%" fill="#868e96"></rect>
    <text class="text-light" fill="#dee2e6"> 450 * 300</text>
  </svg>
  <div class="card-body p-4">
    <span class="bg-dark text-white btn btn-sm p-sm-0  position-absolute top-0 end-0  me-3 mt-1 me-3 mt-1"> sale</span>
    <h5 class="card-title">Card title</h5>
    <p class="card-text"> 
      <span class="text-muted"> $80.00 </span>  $40.00
    </p>
    <p class="card-text"> 
      <span class="rating-stars m-0 gold-rating-stars">&nbsp</span>   
     </p>
    <a href="#" class="btn btn-outline-dark">add to cart</a>
  </div>
</div>        

<div class="col position-relative col-md-3 p-0 border border-1">
  <!-- <img src="" class="card-img-top" alt="..."> -->
  <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg"
    role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false">
    <title>Placeholder</title>
    <rect width="100%" height="100%" fill="#868e96"></rect>
    <text class="text-light" fill="#dee2e6"> 450 * 300</text>
  </svg>
  <div class="card-body p-4">
    <h5 class="card-title">Card title</h5>
    <p class="card-text"> 
      <span class="rating-stars m-0 gold-rating-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span> 
      </p>
     <p>   $40.00
    </p>
    <a href="#" class="btn btn-outline-dark">add to cart</a>
  </div>
</div>
<div class="col position-relative col-md-3 p-0 border border-1">
  <!-- <img src="" class="card-img-top" alt="..."> -->
  <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg"
    role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false">
    <title>Placeholder</title>
    <rect width="100%" height="100%" fill="#868e96"></rect>
    <text class="text-light" fill="#dee2e6"> 450 * 300</text>
  </svg>
  <div class="card-body p-4">
    <span class="bg-dark text-white btn btn-sm p-sm-0  position-absolute top-0 end-0  me-3 mt-1"> sale</span>
    <h5 class="card-title">Card title</h5>
    <p class="card-text"> 
      <span class="text-muted"> $80.00 </span>  $40.00
    </p>
    <p class="card-text"> 
      <span class="rating-stars m-0 gold-rating-stars">&nbsp</span>   
     </p>
    <a href="#" class="btn btn-outline-dark">add to cart</a>
  </div>
</div>        
<div class="col position-relative col-md-3 p-0 border border-1">
  <!-- <img src="" class="card-img-top" alt="..."> -->
  <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg"
    role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false">
    <title>Placeholder</title>
    <rect width="100%" height="100%" fill="#868e96"></rect>
    <text class="text-light" x="50%" y="50%" fill="#dee2e6" dy=".3em ">450 * 300</text>
  </svg>
  <div class="card-body p-4 ">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">
      <span class="text-decoration-none"> $80.00 </span>  $40.00 
    </p>
    <p class="card-text"> 
      <span class="rating-stars m-0 gold-rating-stars">&nbsp</span>   
     </p>
    <a href="#" class="btn btn-outline-dark ">add to cart</a>
  </div>
</div>
<div class="col position-relative col-md-3 p-0 border border-1">
  <!-- <img src="" class="card-img-top" alt="..."> -->
  <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg"
    role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false">
    <title>Placeholder</title>
    <rect width="100%" height="100%" fill="#868e96"></rect>
    <text class="text-light" fill="#dee2e6"> 450 * 300</text>
  </svg>
  <div class="card-body p-4">
    <span class="bg-dark text-white btn btn-sm p-sm-0  position-absolute top-0 end-0 me-3 mt-1"> sale</span>
    <h5 class="card-title">Card title</h5>
    <p class="card-text"> 
      <span class="rating-stars m-0 gold-rating-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span>   
     </p>
     <p> 
      <span class="text-decoration-line-through"> $80.00 </span>  $40.00
     </p>
    <a href="#" class="btn btn-outline-dark">add to cart</a>
  </div>
</div>

<div class="col position-relative col-md-3 p-0 border border-1">
  <!-- <img src="" class="card-img-top" alt="..."> -->
  <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg"
    role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false">
    <title>Placeholder</title>
    <rect width="100%" height="100%" fill="#868e96"></rect>
    <text class="text-light" fill="#dee2e6"> 450 * 300</text>
  </svg>
  <div class="card-body p-4">
    <h5 class="card-title">Card title</h5>
    <p class="card-text"> 
      <span class="rating-stars m-0 gold-rating-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span> 
    </p>
       <p> $40.00
    </p>
    <a href="#" class="btn btn-outline-dark">add to cart</a>
  </div>
</div> 


</div>
</main>
`

const main_variable = `
<main class="list-group mt-5">
  <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 m-0 justify-content-center">
    ${keysSimpleproducts? keysSimpleproducts.map(element => `
    <div class="col position-relative p-0 border border-1">
      <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg"
        role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false">
        <title>Placeholder</title>
        <rect width="100%" height="100%" fill="#868e96"></rect>
        <text class="text-light" x="50%" y="50%" fill="#dee2e6" dy=".3em">450 * 300</text>
      </svg>
      <div class="align-content-center card-body d-flex flex-column justify-content-center p-4">
        <h5 class="card-title d-flex justify-content-center">${element.name}</h5>
        <p class="card-text">
          <span class="text-decoration-none d-flex justify-content-center">${element.dtl}</span>
        </p>
        <p class="card-text"> 
          <span class="rating-stars m-0 gold-rating-stars d-flex justify-content-center">${element.price}'$'</span>   
        </p>
        <a href="#" class="btn btn-outline-dark">add to cart</a>
      </div>
    </div>
    `).join(''): ' Not Have any product'}
  </div>
</main>`



const footer= `
<footer class="bg-dark ">
<span class="text-light d-flex justify-content-center p-3">copy with &copy ebrahim</span>
</footer>
`



renderHtml(nav);

renderHtml(header);

if (document.title === 'start bootstrap')
    renderHtml(main_variable);
else if (document.title === 'add product')
    renderHtml(pagadd);

// renderHtmlC(pagadd, function() {
//     var addproduct = document.getElementById('productName');
//     console.log(addproduct);
//   });




const productsData= (getStorage('Simpleproducts')||[]);

document.addEventListener('click', function(event) {
    if (event.target.id === 'btn-add-prodcut') {
      var addproduct = event.target;
    //   console.log(addproduct);
let productName = el('#productName');
 let productDtl = el('#productDtl');
 let productPrice = el('#productPrice');
 let addMessage = el("#AddMessage");
 if (productName.value)
    {

        const newProduct = {
            name: productName.value,
            dtl: productDtl.value,
            price: productPrice.value,
            };

            productsData.push(newProduct);            
        // productsData = JSON.parse(localStorage.getItem("Simpleproducts")); 
        
         addMessage.classList.remove("d-none");
        
         addMessage.classList.add("text-white", "bg-success");

          setTimeout(() => {
                  addMessage.classList.add("d-none");
                  addMessage.classList.remove("text-white", "bg-success");
              }
            , 3000);  


        setStorage("Simpleproducts", productsData);

    // Check if productsData exists and is an array
    // if (!Array.isArray(productsData)) {
    // productsData = [];
    
    // console.log(productsData);
    // }
    // else
    // {
    //  console.log('no');
    
    // }

    
}
    

    el('#productName').value='';
    el('#productDtl').value='';
    el('#productPrice').value='';
    }
  });

//renderHtml(main);

renderHtml(footer);

// var addproduct = document.getElementById('productName');
// console.log(addproduct);

// el("#btn-add-prodcut").addEventListener("click", (e) => {
//          console.log("working");
//        });
       
// addproduct.addEventListener('click', function(){ alert("Hello World!"); });

// let productName = el('#productName');
// let productDtl = el('#productDtl');
// let productPrice = el('#productPrice');
// setStorage("products", {name: productName.value,
//                         dtl:productDtl.value,
//                         dtl:productPrice.value}

// );

// el('#btn-add-prodcut').addEventListener('click',() => {
//     console.log('hi')
// })

