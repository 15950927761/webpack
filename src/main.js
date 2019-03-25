import $ from 'jquery'
import './css/index.css'
import 'bootstrap/dist/css/bootstrap.css'

class Person{
    static info = { name:'zs',age:20 }
}

console.log(Person.info)

$(function(){
    $("li:odd").css('backgroundColor','lightblue')
    $('li:even').css('backgroundColor',function(){
        return '#' + 'd97634'
    })
})