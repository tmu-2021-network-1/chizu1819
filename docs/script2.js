/*画像アニメーション*/
var tmp = {};
loadImageToTmp();
function loadImageToTmp(){
    for(var i=1;i<=37;i++){
        const _i = i;
        const img = new Image();
        tmp[_i] = null;
        img.src = "anim/00"+_i+".jpg";
        img.addEventListener("load",()=>{
            tmp[_i] = img;
        })
    }
}
const image = document.getElementById("anim_img");

var SIZE = 37;// 枚数
const PX = 100; // 100px分の移動ごと画像を1枚進める 
//const offset = $("#anim_img_box").offset();
const myMain = document.getElementById("anim_img_box");
const rect = myMain.getBoundingClientRect();
const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
const myTop = rect.top + scrollTop;

// 画像を入れるdiv要素(position:stickyでトップに来たら固定される)
window.addEventListener('scroll', function(){
    const y = document.body.scrollTop;
    const dy = y - myTop;
    if(myTop < y && y < myTop + SIZE*PX)
    {
        document.getElementById("anim_img_box").style.top = "0px";
        const i = Math.floor(dy / PX);
        if(i<=0||i>=SIZE) return;
        if(tmp[i].src) image.src = tmp[i].src;
    }
    else if(y>= myTop + SIZE*PX){
        document.getElementById("anim_img_box").style.top = "-"+(dy-SIZE*PX) + "px";
    }
});

// スクロール分が終了したときに移動を始める
document.getElementById("anim_img_padding").style.height = SIZE*PX + 'px';

/*count*/
let count = 0;
const countUp = () => {
    time(count++);
    const timeoutId = setTimeout(countUp, 1000);

    $(window).scroll(function () {
        var pos = $('#anim_img_box').offset();/* mvを過ぎたmainタグの高さを取得して変数[pos]に格納 */

        if ($(this).scrollTop() > pos.top) {
            $('#js-scroll-top').show('fast', function() 
            {
                //待ち直すボタンの表示
            });
            clearTimeout(timeoutId);//timeoutIdをclearTimeoutで指定している
            console.log(count);
            if(count < 10){
                console.log("10秒未満");
                $('#hide1').show('fast', function() 
                {
                
                });
            }
            else if(count > 10)
            {
                $('#hide2').show('fast', function() 
                {
                });
                $('#hide1').hide('fast', function() 
                {
                });
            }
        }    
    });
}

//3,000ミリ秒後にcountUp関数を呼び出す処理を追加
setTimeout(countUp, 2000);
time = function (log) {
    const min =  Math.floor(log / 60);
    const sec =  log % 60;
    //console.log(min +"分" +sec +"秒");
    document.getElementById('console_log').innerHTML = "待ち時間 "+ min +"分"+ sec+ "秒";
}


/*リロードしたときに一番上に来る*/
$(function() {
    $('html,body').animate({ scrollTop: 0 }, '1');
});

/*バウンドスクロール禁止*/
$(window).on('touchmove', (e) => {
    let moveY = $(window).scrollTop();
    if(moveY !== 0){
      $(window).scrollTop(0);
    }
});

/*待ち直す = リロードボタン*/
const PageTopBtn = document.getElementById('js-scroll-top');
PageTopBtn.addEventListener('click', () =>{
    window.location.reload();
});