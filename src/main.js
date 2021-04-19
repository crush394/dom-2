// const api = window.
const x = jQuery('.test') // 不返回元素们，返回api对象
// api.addClass('red')  
// 遍历所有刚才获取的元素，添加.red
// api只使用一次 所有可省
// api
    .addClass('red')
    .addClass('blue')
    .addClass('green') // 链式操作
    .find('.child')
    .addClass('yellow')
    .end()
    .addClass('yellow')
x.each((div)=>console.log(div))
x.parent().print()
x.children().print()