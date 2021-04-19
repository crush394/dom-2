window.jQuery =function(selectorOrArray){
    let elements
    if(typeof selectorOrArray === 'string'){
        elements = document.querySelectorAll(selectorOrArray)
    }else if(selectorOrArray instanceof Array){
        elements = selectorOrArray
    }
   
    // api 可以操作 elements
    // const api = 
    return {
        find(selector){
            let array = []
            for(let i = 0; i<elements.length;i++){
                const elements2 = Array.from(elements[i].querySelectorAll(selector))
                array = array.concat(elements2)
            }
            array.oldApi = this  // this是旧api
            return jQuery(array)
        },
        each(fn){
            for(let i = 0; i<elements.length;i++){
                fn.call(null,elements[i],i)
            }
            return this // this就是api对象
        },
        
       parent(){
            const array = []
            this.each((node)=>{
                if(array.indexOf(node.parentNode) === -1){
                    array.push(node.parentNode)
                }   
            })
            return jQuery(array)
       },
       children(){
           const array = []
           this.each((node)=>{
               if(array.indexOf(node.parentNode) === -1){
                   array.push(...node.children)
               }
           })
           return jQuery(array)
       },
       print(){
            console.log(elements) // elements就是对于的元素们
        },
        // 闭包：函数访问外部的变量
        addClass(className){
            for(let i = 0 ;i<elements.length;i++){
                elements[i].classList.add(className)
            }
           /* return api  链式操作
            * obj.fn(p1) 函数里的this就是obj
            * obj.fn.call(obj,p1)
            * 所有用下面的代码和上面的相同
            */
            return this
        },
        oldApi:selectorOrArray.oldApi,
        end(){
            return this.oldApi // this是新spi
        },
    }

}


