import './app1.css'
import $ from 'jquery'
const $add1 = $('#add1')
const $mins1 = $('#mins1')
const $mul2 = $('#mul2')
const $divide2 = $('#divide2')
const $number = $('#number')
const n = localStorage.getItem('n')
$number.text(n||100)

$add1.on('click',()=>{
    let n = parseInt($number.text())
    n+=1
    localStorage.setItem('n',n)
    $number.text(n)
})
$mins1.on('click',()=>{
    let n = parseInt($number.text())
    n-=1
    localStorage.setItem('n',n)
    $number.text(n)
})
$mul2.on('click',()=>{
    let n = parseInt($number.text())
    n*=2
    localStorage.setItem('n',n)
    $number.text(n)
})
$divide2.on('click',()=>{
    let n = parseInt($number.text())
    n/=2
    localStorage.setItem('n',n)
    $number.text(n)
})