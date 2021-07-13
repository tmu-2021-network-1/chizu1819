//アニメーション
var tmp = {};
var tmp2 = {};
var tmp3 = {};
loadImageToTmp();
function loadImageToTmp(){
  for(var i=1;i<=300;i++){
    const _i = i;
    
    const img = new Image();
    tmp[_i] = null;
    img.src = "anim/00"+_i+".jpg";
    img.addEventListener("load",()=>{
        tmp[_i] = img;
    })

    const img2 = new Image();
    tmp2[_i] = null;
    img2.src = "anim_2/00"+_i+".jpg";
    img2.addEventListener("load",()=>{
        tmp2[_i] = img2;
    })

    const img3 = new Image();
    tmp3[_i] = null;
    img3.src = "anim_3/00"+_i+".jpg";
    img3.addEventListener("load",()=>{
        tmp3[_i] = img3;
    })
  }
}

const image = document.getElementById("anim_img");
const image2 = document.getElementById("anim_img2");
const image3 = document.getElementById("anim_img3");

var SIZE = 300;// 枚数
const PX = 500; // 100px分の移動ごと画像を1枚進める 
//const offset = $("#anim_img_box").offset();
const myMain = document.getElementById("anim_img_box");
const rect = myMain.getBoundingClientRect();
const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
const myTop = rect.top + scrollTop;

const myMain2 = document.getElementById("anim_img_box2");
const rect2 = myMain2.getBoundingClientRect();
const scrollTop2 = window.pageYOffset || document.documentElement.scrollTop;
const myTop2 = rect2.top + scrollTop2;

const myMain3 = document.getElementById("anim_img_box3");
const rect3 = myMain3.getBoundingClientRect();
const scrollTop3 = window.pageYOffset || document.documentElement.scrollTop;
const myTop3 = rect3.top + scrollTop3;

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

    if(myTop2 < y && y < myTop2 + SIZE*PX)
    {
        document.getElementById("anim_img_box2").style.top = "0px";
        const j = Math.floor(dy / PX);
        if(j<=0||j>=SIZE) return;
        if(tmp2[j].src) image2.src = tmp2[j].src;
    }
    else if(y>= myTop2 + SIZE*PX){
        document.getElementById("anim_img_box2").style.top = "-"+(dy-SIZE*PX) + "px";
    }

    if(myTop3 < y && y < myTop3 + SIZE*PX)
    {
        document.getElementById("anim_img_box3").style.top = "0px";
        const k = Math.floor(dy / PX);
        if(k<=0||k>=SIZE) return;
        if(tmp3[k].src) image3.src = tmp3[k].src;
    }
    else if(y>= myTop3 + SIZE*PX){
        document.getElementById("anim_img_box3").style.top = "-"+(dy-SIZE*PX) + "px";
    }
});

// スクロール分が終了したときに移動を始める
document.getElementById("anim_img_padding").style.height = SIZE*PX + 'px';
document.getElementById("anim_img_padding3").style.height = SIZE*PX + 'px';
document.getElementById("anim_img_padding2").style.height = SIZE*PX + 'px';


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
