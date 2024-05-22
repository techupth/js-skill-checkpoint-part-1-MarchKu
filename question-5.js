// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "";
// เริ่มเขียนโค้ดตรงนี้
function calculateTotalPrice(index,promotionCode){
  if(promotionCode === "SALE50"){
    for (let i = 0; i < products.length; i++) {
      if(products[i].name === index){
        return (products[i].price * products[i].quantity)-((products[i].price * products[i].quantity)*0.5)
      }
    }
  }else if(promotionCode === "SALE20"){
  if(promotionCode === "SALE20"){
    for (let i = 0; i < products.length; i++) {
      if(products[i].name === index){
        return (products[i].price * products[i].quantity)-((products[i].price * products[i].quantity)*0.2)
      }
    }
  }
  }else if(promotionCode === ""){
    for (let i = 0; i < products.length; i++) {
      if(products[i].name === index){
        return products[i].price * products[i].quantity
      }
    }
  }else{
    for (let i = 0; i < products.length; i++) {
      if(products[i].name === index){
        return products[i].price * products[i].quantity
      }
    }
  }
}

console.log(calculateTotalPrice("เสื้อยืด",""))
console.log(calculateTotalPrice("เสื้อยืด","SALE20"))
console.log(calculateTotalPrice("เสื้อยืด","SALE50"))
