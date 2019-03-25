import $ from 'jquery'
import './css/index.css'
import 'bootstrap/dist/css/bootstrap.css'



$(function(){
    $("li:odd").css('backgroundColor','lightblue')
    $('li:even').css('backgroundColor',function(){
        return '#' + 'd97634'
    })
})