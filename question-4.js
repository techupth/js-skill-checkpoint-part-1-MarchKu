// Question #4
let checkLeastIndex = {}
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้

const leastPrice = function check(item){
  checkLeastIndex = item[0].quantity
  console.log(checkLeastIndex)
  for (let i = 1; i < item.length; i++) {
    if(checkLeastIndex> item[i].quantity){
      checkLeastIndex = item[i]
    }
    return `สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${checkLeastIndex.name} ซึ่งมี ${checkLeastIndex.quantity} ชิ้น`
  }
}
console.log(leastPrice(inventory))