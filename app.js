let productJSON = [{
    id:0,
    name: "Razer Death Stalker",
    image:"https://assets2.razerzone.com/images/pnx.assets/6db3a32baec667f32c6a2565380a7a68/razer-deathstalker-v2-pro-tenkeyless-white-500x500.png",
    brand: "Razer",
    description: "Razer Death Stalker",
    price: "180"

  },
  {
    id:1,
    name: "Razer Huntsman",
    image:"https://assets2.razerzone.com/images/pnx.assets/dbbec6590b3befccb3b1d4d505a9bd83/huntsman-tkl-quartz-gallery_500x500.png",
    brand: "Bandai",
    description: "Huntsman",
    price: "200"
  },
  {
    id:2,
    name: "Razer Baracuda",
    image:"https://assets2.razerzone.com/images/pnx.assets/f5dfaa5d1d3af2050ea955b8cbc25ce7/razer-blackshark-v2-x-quartz-500x500.png",
    brand: "Namco",
    description: "Baracuda",
    price: "300"
  },
  {
    id:3,
    name: "Razer Basilisk",
    image:"https://assets2.razerzone.com/images/pnx.assets/30429ebe7890a17b8a6b0335d3cec61a/razer-basilisk-v3-pro-white_500x500.png",
    brand: "Bandai",
     description: "Basilisk",
    price: "280"
  },
  {
    id:4,
    name: "Kraken",
    image:"https://assets2.razerzone.com/images/pnx.assets/f803341be581ea600caf1596148e8f73/razer-huntsman-tournament-edition-green-500x500.png",
    brand: "Bandai",
    description: "Da Bomb",
    price: "1200"
  },
  {
    id:5,
    name: "Kishi",
    image:"https://assets2.razerzone.com/images/pnx.assets/0945753dfe42bdc9b29ee558b6aa230f/razerkishi-v2-android-500x500.png",
    brand: "Kishi",
     description: "Kishi",
    price: "800"
  },
  {
    id:6,
    name: "Seiren X",
    image:"https://assets2.razerzone.com/images/pnx.assets/1243cb012ee2f2c52854334a7062da7f/rz04-02830500-r3m1_500x500.png",
    brand: "Namco",
    description: "Seiren",
    price: "871"
  },
  {
    id:7,
    name: "Atheris",
    image:"https://assets2.razerzone.com/images/pnx.assets/43f74f12ac6bc539b7ede5fee5fdc1d3/razer-kishi-xbox-500x500.png",
    brand: "Bandai",
    description: "MG RX-93ff",
    price: "650"
  }
  ]

let shoppingCart = [];

let shop = document.getElementById("shop");

let basket = JSON.parse(localStorage.getItem("productJSON")) || [];

let generateShop = () => {
  return (shop.innerHTML = productJSON
    .map((x) => {
      let { id, name, price, description, image } = x;
      let search = basket.find((x) => x.name === name) || [];
      
      return `
    <div id=product-id-${name} class="item">
        <img width="220" src=${image} alt="">
        <div class="details">
          <h3>${name}</h3>
          <p>${description}</p>
          <div class="price-quantity">
            <h2>$ ${price} </h2>
            <div class="buttons">
              <button class="quantity" onclick = "addedCart(${id})">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    })
    .join(""));
};

generateShop();





//------------------Slide Show-------------------//

let slideIndex = 0;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // slideIndex++;
  // if (slideIndex > slides.length) {slideIndex = 1}
  // slides[slideIndex-1].style.display = "block";
  // setTimeout(showSlides, 2500); // Change image every 2 seconds

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

//-----------Cart Modal Box--------------//


var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("cartBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
  showCart();
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// -----------------------POP UP BOX-------------------------//
function addedCart(num) {
  alert(productJSON[num].name+" Added to Cart");
  addItem(num);
}

function addItem(a)
{
    shoppingCart.push(productJSON[a]);
    console.log(shoppingCart);
}



function showCart()
{
    modal.style.display = "block";
    console.log(shoppingCart.length);
    //document.getElementById("itemCount").innerHTML = shoppingCart.length;
    document.getElementById("shopping-cart").innerHTML = "";
    if (shoppingCart.length > 0)
    {
        for (let i = 0; i < shoppingCart.length; i++)
        {
            document.getElementById("shopping-cart").innerHTML +=
            
            
            "<div class='itemCart'> <img width='200px' class='imgsize-cart' src=" + shoppingCart[i].image + "></img>" +
            "    <p class='cartName'><b>" + shoppingCart[i].name + "</b></p>" +
            "    <p class='cartPrice'> $" + shoppingCart[i].price + "</p>" +
            "</div>";
        }
    }
    else{
      document.getElementById("shopping-cart").innerHTML +="<p>Shopping cart is empty</p>";
    }
     
}





