// Question #3
// เริ่มเขียนโค้ดตรงนี้
function checkPassword(password){
  if(password.length < 6){
    return "Weak"
  }else if(password.length >= 6 && password.length < 10){
    return "Medium"
  }else{
    return "Strong"
  }
}
console.log(checkPassword("abcde"))
console.log(checkPassword("TechUp"))
console.log(checkPassword("swnalWadqQ"))