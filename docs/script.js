//アニメーション
var tmp = {};
var tmp2 = {};
var tmp3 = {};
loadImageToTmp();
function loadImageToTmp(){
  for(var i=1;i<=600;i++){
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

var SIZE = 600;// 枚数
const PX = 1000; // 100px分の移動ごと画像を1枚進める 
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
        var pos2 = $('.oyuboxContainer').offset();
    
        if($(this).scrollTop() > pos2.top) {
            $('#lside').show('fast', function() 
            {
            });
            $('#rside').show('fast', function() 
            {
            });
        }
        
        if ($(this).scrollTop() > pos.top) {
            $('#js-scroll-top').show('fast', function() 
            {
                //待ち直すボタンの表示
            });
            $('#final_lside').show('fast', function() 
            {
                
            });
            $('#final_rside').show('fast', function() 
            {
                
            });
        
            clearTimeout(timeoutId);//timeoutIdをclearTimeoutで指定している
            console.log(count);
            if(count < 60){
                console.log("10秒未満");
                $('#hide1').show('fast', function() 
                {
                
                });
            }
            else if(count >= 60 && count < 120)
            {
                $('#hide2').show('fast', function() 
                {
                });
                $('#hide1').hide('fast', function() 
                {
                });
            }
            else if(count >= 120 && count <180)
            {
                $('#hide3').show('fast', function() 
                {
                });
                $('#hide1').hide('fast', function() 
                {
                });
                $('#hide2').hide('fast', function() 
                {
                });
            }
            else if(count >= 180 && count <240)
            {
                $('#hide4').show('fast', function() 
                {
                });
                $('#hide1').hide('fast', function()
                {
                });
                $('#hide2').hide('fast', function() 
                {
                });
                $('#hide3').hide('fast', function() 
                {
                });
            }
            else if(count >= 240)
            {
                $('#hide5').show('fast', function() 
                {
                });
                $('#hide1').hide('fast', function() 
                {
                });
                $('#hide2').hide('fast', function() 
                {
                });
                $('#hide3').hide('fast', function() 
                {
                });
                $('#hide4').hide('fast', function() 
                {
                });
            }
        }    
    });
}

//5,000ミリ秒後にcountUp関数を呼び出す処理を追加
setTimeout(countUp, 20000);
time = function (log) {
    const min =  Math.floor(log / 60);
    const sec =  log % 60;
    //console.log(min +"分" +sec +"秒");
    document.getElementById('console_log').innerHTML = "待ち時間（スクロールしてる時間) "+ min +"分"+ sec+ "秒";
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

// ローディング画面をフェードインさせてページ遷移
$(function(){
    // リンクをクリックしたときの処理。外部リンクやページ内移動のスクロールリンクなどではフェードアウトさせたくないので少し条件を加えてる。
    $('a[href ^= "https://newstella.co.jp"]' + 'a[target != "_blank"]').click(function(){
        var url = $(this).attr('href'); // クリックされたリンクのURLを取得
        $('#js-loader').fadeIn(600);    // ローディング画面をフェードイン
        setTimeout(function(){ location.href = url; }, 800); // URLにリンクする
        return false;
    });
});
 
$(function() {
    var h = $(window).height();
     $('#loading__wrapper').css('display','none');
     $('#is-loading ,#loading').height(h).css('display','block');
});
   
$(window).on('load', function() {
    $('#is-loading').delay(900).fadeOut(800);
    $('#loading').delay(600).fadeOut(300);
    $('#loading__wrapper').css('display', 'block');
});

$(function(){
    setTimeout('stopload()',10000);
});
   
function stopload(){
    $('#loading__wrapper').css('display','block');
    $('#is-loading').delay(900).fadeOut(800);
    $('#loading').delay(600).fadeOut(300);
}

/* */

new Vivus('rcanvas1', {
    start: 'autostart', 
    type: 'delayed',duration: 5000,
    animTimingFunction: Vivus.EASE
    }, 
    function(car){
        setTimeout(function(){ car.reset().play(); }, 3000);
    }
);

new Vivus('rcanvas2', {
    start: 'autostart', duration: 20000,
    type: 'delayed',
    animTimingFunction: Vivus.EASE
    }, 
    function(car){
      setTimeout(function(){ car.reset().play(); }, 3000);
    }
  );
  
  new Vivus('rcanvas3', {
    start: 'autostart', 
    type: 'delayed', duration: 20000,
    animTimingFunction: Vivus.EASE
    }, 
    function(car){
      setTimeout(function(){ car.reset().play(); }, 3000);
    }
);

new Vivus('rcanvas4', {
    start: 'autostart', 
    type: 'delayed', duration: 10000,
    animTimingFunction: Vivus.EASE
    }, 
    function(car){
      setTimeout(function(){ car.reset().play(); }, 3000);
    }
  );


new Vivus('men1', {
    start: 'autostart', 
    type: 'delayed', duration: 20000,
    animTimingFunction: Vivus.EASE
    }, 
    function(car){
      setTimeout(function(){ car.reset().play(); }, 3000);
    }
);

new Vivus('men2', {
    start: 'autostart', 
    type: 'delayed', duration: 30000,
    animTimingFunction: Vivus.EASE
    }, 
    function(car){
        setTimeout(function(){ car.reset().play(); }, 3000);
    }
);
  
new Vivus('men3', {
    start: 'autostart', 
    type: 'delayed', duration: 40000,
    animTimingFunction: Vivus.EASE
    }, 
    function(car){
        setTimeout(function(){ car.reset().play(); }, 3000);
    }
);

new Vivus('men4', {
    start: 'autostart', 
    type: 'delayed', duration: 50000,
    animTimingFunction: Vivus.EASE
    }, 
    function(car){
        setTimeout(function(){ car.reset().play(); }, 3000);
    }
);

/*
new Vivus('yakan1', {
    start: 'autostart', 
    type: 'delayed', duration: 1000, 
    animTimingFunction: Vivus.EASE
    }, 
    function(car){
      setTimeout(function(){ car.reset().play(); }, 3000);
    }
);

new Vivus('sunadokei1', {
    start: 'autostart', 
    type: 'delayed', 
    animTimingFunction: Vivus.EASE
    }, 
    function(car){
      setTimeout(function(){ car.reset().play(); }, 3000);
    }
);
*/