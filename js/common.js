    function animate(obj,target) {

            clearInterval(obj.timerID);
            
            obj.timerID = setInterval(function () {

                //先获得它当前的位置
                var currentLeft = obj.offsetLeft;

                if ( Math.abs(target - currentLeft) > 10) {

                    //如果目标比当前位置大，就是往右走就给正10
                    //否则-10
                    var step = target > currentLeft ? 10 :  -10;
                    //在当前的位置上多加
                    currentLeft += step;

                    //设置给它的位置
                    obj.style.left = currentLeft + "px";
                } else {

                    obj.style.left = target + "px";
                    clearInterval(obj.timerID);
                }

            }, 10);
    }


/**
 * 获得样式的兼容函数
 */
function getStyle(obj,attr) {
    if (window.getComputedStyle) {
        return getComputedStyle(obj)[attr];
    } else {
        return obj.currentStyle[attr];
    }
}

/**
 * 获得页面滚出去的距离
 */
function getPageScroll(){

    var sTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    var sLeft = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;

    return { 'scrollLeft': sLeft, 'scrollTop': sTop };
}


/**
 * 获取事件对象相对于页面左上角的坐标
 * @param {传入事件对象} e 
 */
function getEventPagePoint(e){
    e = e || window.event;
    var pageX = e.clientX + getPageScroll().scrollLeft;
    var pageY = e.clientY + getPageScroll().scrollTop;

    return { 'pageX': pageX, 'pageY':pageY }
}