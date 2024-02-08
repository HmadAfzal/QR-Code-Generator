let input = document.querySelector(".input")
let qrcode = document.querySelector(".qrcode")
let btn = document.querySelector(".btn")
let qrdownload=document.querySelector(".download")

let url="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="
btn.addEventListener("click",()=>{
    let URL=url+input.value
    qrcode.src=URL
})