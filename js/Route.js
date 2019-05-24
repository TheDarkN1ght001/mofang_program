//  幻灯片部分
; (function () {
    // 阻止a标签跳转函数
    // function noSkip() {
    //     var aList = document.getElementsByTagName('a');
    //     for (var i = 0; i < aList.length; i++) {
    //         aList[i].onclick = function () {
    //             return false;
    //         }
    //     }
    // }
    // 默认阻止a标签跳转
    // noSkip();


    //获取到幻灯片的每一张图
    var slist = document.getElementsByClassName('rslide1');
    //获取到幻灯片主体大块区域
    var slide = document.querySelector('.rs-Slide');
    // 获取到上一页点击按钮
    var prev = document.querySelector('.prev');
    // 获取到下一页点击按钮
    var next = document.querySelector('.next');
    // 获取到底部页码索引按钮
    var sliTab = document.getElementsByClassName('rslide_tabs');
    // 声明一个对应幻灯片的数字

    // noSkip()
    var i = 0;
    //清空层级与透明
    function sliClear() {
        for (var j = 0; j < slist.length; j++) {
            slist[j].style.zIndex = 0;
            slist[j].style.opacity = 0;
        }
    }
    // 判断与赋值
    function sliGive() {
        if (i > slist.length - 1) {
            i = 0;
        } else if (i < 0) {
            i = slist.length - 1;
        }
        slist[i].style.zIndex = 1;
        slist[i].style.opacity = 1;
    }
    // 创建一个页码发光的函数
    function sliTabTime() {
        // 循环一遍让所有页码的发光去掉
        for (var l = 0; l < sliTab.length; l++) {
            sliTab[l].classList.remove('show');
        }
        // 让i对应的页码发光
        sliTab[i].classList.add('show');
    }
    // 创建一个幻灯片往下一页滚的函数
    function slideTimeN() {
        // 循环一遍让层级变低与变透明
        sliClear();
        i++;
        sliGive();
        sliTabTime();
    }
    // 创建一个幻灯片往上一页滚的函数
    function slideTimeP() {
        // 循环一遍让层级变低与变透明
        sliClear();
        i--;
        sliGive();
        sliTabTime();
    }
    // 创建点击底部页码跳转函数
    function slTab() {
        for (var k = 0; k < sliTab.length; k++) {
            //遍历所有页码先把每个页码的下标存到页码的类里
            sliTab[k].setAttribute('index', k);
            // 给页码加点击事件
            sliTab[k].onclick = function () {
                // 获取到每个页码
                var index = this.getAttribute('index');
                //点击调用一次函数
                // setTimeout(function () {
                sliClear();
                // 把页码给i赋值
                i = index;
                sliGive();
                //循环把每个页码的光亮去掉
                sliTabTime();
                // }, 10)
            }
        }
    }


    // 初始打开页码默认执行一次幻灯片样式
    setTimeout(function () {
        //清空层级与透明
        sliClear();
        //判断与赋值
        sliGive();
        // 页码发光
        sliTabTime();
    }, 50)

    // 默认启动计时器
    var timerID = setInterval(slideTimeN, 2500)

    // 鼠标移入停止计时器
    slide.onmouseover = function () {
        clearInterval(timerID);
    }

    // 鼠标移出启用计时器
    slide.onmouseout = function () {
        timerID = setInterval(slideTimeN, 2500)
    }

    // 点击下一页按钮调用函数跳转
    next.onclick = function () {
        // setTimeout(slideTimeN, 10)
        sliClear();
        i++;
        sliGive();
        sliTabTime();
    }

    // 点击上一页按钮调用函数跳转
    prev.onclick = function () {
        sliClear();
        i--;
        sliGive();
        sliTabTime();
        // setTimeout(slideTimeP, 10)
    }

    //调用点击底部页码控制幻灯片函数
    slTab();

}())

    // 幻灯片部分结束

    // -----------------------------------------------------------------


    //列表菜单部分
    ; (function () {
        // 获取地域列
        var navList1_a = document.querySelector('.navBoxList-1').getElementsByTagName('a')
        // 获取类型列
        var navList2_a = document.querySelector('.navBoxList-2').getElementsByTagName('a')
        // 获取标签列
        var navList3_a = document.querySelector('.navBoxList-3').getElementsByTagName('a')
        // 获取更多按钮
        var lastBtn = document.querySelector('.lastMove');
        // 获取更多扩展出来的区块
        var zoneModal = document.getElementById('zoneModal');



        //封装点击上色
        function navSelected(arr) {
            for (var i = 0; i < arr.length; i++) {
                arr[i].onclick = function () {
                    for (var j = 0; j < arr.length; j++) {
                        arr[j].classList.remove('selected');
                    }
                    this.classList.add('selected');
                    return false;
                }
            }
        }
        // 地域列调用点击上色
        navSelected(navList1_a);
        // 类型列调用点击上色
        navSelected(navList2_a);
        // 标签列调用点击上色
        navSelected(navList3_a);

        // 点击更多按钮扩展出区块
        lastBtn.onclick = function (e) {
            e.stopPropagation();
            lastBtn.classList.toggle('active');
            if (lastBtn.classList.contains('active')) {
                zoneModal.classList.add('zoneActive');
            } else {
                zoneModal.classList.remove('zoneActive');
            }
            return false;
        }
        document.body.onclick = function () {
            // e.stopPropagation();
            if (lastBtn.classList.contains('active')) {
                lastBtn.classList.toggle('active');
                zoneModal.classList.remove('zoneActive');
            }
        }
        zoneModal.onclick = function (e) {
            e.stopPropagation();
        }
    }())
    // 列表部分结束


    // 列表扩展部分
    ; (function () {
        var ctTabs = document.querySelector('.ct-tab').getElementsByTagName('a');
        var imgs = document.getElementsByClassName('ct-tabct');
        //封装点击上色
        function navSelected(arr) {
            for (var i = 0; i < arr.length; i++) {
                arr[i].setAttribute('index', i);
                arr[i].onclick = function (e) {
                    e.stopPropagation();
                    for (var j = 0; j < arr.length; j++) {
                        arr[j].classList.remove('active');
                        imgs[j].classList.remove('active');
                    }
                    var num = this.getAttribute('index');
                    this.classList.add('active');
                    imgs[num].classList.add('active');
                    return false;
                }
            }
        }
        navSelected(ctTabs)
    }())

    // 列表扩展部分结束

    // ----------------------------------------------------------------



    // 底部翻页部分


    ; (function () {
        // 获取底部每个点击按钮
        var pageList = document.querySelector('.rs-page').getElementsByTagName('a');
        // 获取点击上一页
        var pagePrev = document.querySelector('.page-prev')
        // 获取点击下一页
        var pageNext = document.querySelector('.page-next');

        // 把每个i存到每个页面按钮里
        for (var i = 0; i < pageList.length; i++) {
            pageList[i].setAttribute('index', i);
        }

        // 创建存下标的num
        var num = 0;

        //封装清空颜色
        function clearActive() {
            for (var j = 0; j < pageList.length; j++) {
                pageList[j].classList.remove('active');
            }
        }

        // 封装上色
        function showActive() {
            pageList[num].classList.add('active');
        }

        // 封装判断上一页是否出现
        function ifPage() {
            if (num < 1) {
                pagePrev.style.visibility = 'hidden';
            } else {
                pagePrev.style.visibility = 'visible';
            }
        }

        // 点击每个按钮
        function pageActive(arr) {
            for (var i = 0; i < arr.length; i++) {
                arr[i].onclick = function () {
                    // 清空颜色
                    clearActive();
                    // 把点击的下标存入num
                    num = this.getAttribute('index');
                    // 调用上色
                    showActive();
                    // 调用判断
                    ifPage();
                    return false;
                }
            }
        }

        //点击下一页按钮 
        function nextActive() {
            pageNext.onclick = function () {
                // 清空颜色
                clearActive();
                // num加一
                if (num < 9) {
                    num++;
                }
                // 调用对应num下标上色
                showActive();
                // 调用判断
                ifPage();

            }
        }

        // 点击上一页按钮
        function prevActive() {
            pagePrev.onclick = function () {
                // 清空颜色
                clearActive();
                // num加一
                num--;
                // 调用对应num下标上色
                showActive();
                // 调用判断
                ifPage();

            }
        }
        // 调用点击每个按钮
        pageActive(pageList);
        // 调用点击下一页
        nextActive();
        // 调用点击上一页
        prevActive();
    }())
    // 底部翻页部分结束
