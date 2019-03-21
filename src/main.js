//main.js是我们项目的js入口文件

//导入jquery
// import *** from *** 是ES6中导入模块的方式
//由于es6代码太高级了，所以这一行执行会报错
import $ from 'jquery'
// const $ = require('jquery')//node里面引用jquery

$(function(){
    $("li:odd").css('backgroundColor','lightblue')
    $('li:even').css('backgroundColor',function(){
        return '#' + 'd97634'
    })
})