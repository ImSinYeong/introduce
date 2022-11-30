/* 스크롤러 */
var s = skrollr.init();

$(window).scroll(function(){
    var wScroll = parseInt($(this).scrollTop());
    console.log(wScroll);
    $('.text').text(wScroll);
})
/* page1 */



/* 스킬바 */
var offset = $('.page2').offset().top - 300;
var executed = false;


$(window).scroll(function(){
    var wscroll = $(this).scrollTop();
    //console.log(wscroll);

    if(wscroll > offset){

       if(!executed){
       $('.skill-per').each(function(){//각각이 할일
           var $this = $(this);
           var per = $this.attr('per');
           //console.log(per);
           $this.css({width:per+"%"})

        $({aniValue:0}).animate({aniValue:per},{
            //옵션
            duration:1000,
            progress:function(){//애니메이션 중간중간 할일
               //A.attr(B) :A에있는 속성 B의 속성값을 가져와라
               //A.attr(B,C) :A에있는 속성 B를 C로 바꿔라는 의미
               //this는 animate를 의미
               $this.attr('per',Math.floor(this.aniValue))
            } 
        })
       });//each
       executed = true;
   }//if문
    }
});


/*페이지 스크롤*/
var scrollBody = $('.fix_motion');
var scrollHeight;//스크롤의 높이
var sectionOffsetTop;
var sectionScrollTop;
var scrollRealHeight;//스크롤이 실제움직이는 높이
var winSrollTop; //스코롤바의 높이를 담을 변수
var scrollPercent; //스크롤 백분률값
var percent;


function scrollFunc(){
    setProperty();
    contentIn();
}
function setProperty(){
    scrollHeight= scrollBody.height();//스크롤의 높이
    sectionOffsetTop = scrollBody.offset().top;
    //실제로 스크롤되어야할 높이
    scrollRealHeight = scrollHeight - $(window).height();
    sectionScrollTop = $(window).scrollTop() -  sectionOffsetTop;
    scrollPercent = sectionScrollTop / scrollRealHeight;
   
    percent=scrollPercent * 100;
    
    
}
function contentIn(){
   var deviceImg = $('.device_fix .slide_wrap .slide .child');
   var imgWidth = deviceImg.width();

   console.log(percent);

   if(percent >=0 && percent <25){
       slideChage(imgWidth * 0);
       $('.device_fix .slide_wrap .slide .child1').addClass('active');
   }
   if(percent >=25 && percent <50){
    slideChage(imgWidth * 1);
    $('.device_fix .slide_wrap .slide .child2').addClass('active');
    }
    if(percent >=50 && percent <75){
        slideChage(imgWidth * 2);
        $('.device_fix .slide_wrap .slide .child3').addClass('active');
    }
    
    if(percent >=75){
        slideChage(imgWidth * 3);
        $('.device_fix .slide_wrap .slide .child4').addClass('active');
    }
    if(percent<0){
        $('.device_fix .slide_wrap .slide .child1').removeClass('active')
        $('.device_fix .slide_wrap .slide .child2').removeClass('active')
        $('.device_fix .slide_wrap .slide .child3').removeClass('active')
        $('.device_fix .slide_wrap .slide .child4').removeClass('active')
    }

    }

function slideChage(moveX){
    var slide = $('.fix_motion .device_fix .slide_wrap .slide');
    slide.css({transform:'translateX(' + -moveX + 'px)'})

}

$(window).scroll(function(){
    scrollFunc();
});
scrollFunc();


/* mix */
var mixer = mixitup('.mix-wrapper',{
    "animation": {
"duration": 406,
"nudge": true,
"reverseOut": false,
"effects": "fade translateZ(-56px) rotateY(65deg)"
} 
});



$("#filer-select").change(function(){
  var value = $(this).val();
  console.log(value);
  mixer.filter(value);
});

$("#sort-select").change(function(){
        var value = $(this).val();
        console.log(value);
        mixer.sort(value)
});









/*라이트갤러리 */
lightGallery(document.getElementById('lightgallery'), {
    plugins: [lgThumbnail],

});
/*page5 */