$(document).ready( function(){
	/* ######### Trigger Nice scroll plugin  بتاع صفحة scroll هغير شكل ال ######### */
	$("body").niceScroll({
        cursorwidth:"10px"  
    });
    /* /////////////////////////// header section ////////////////////////////// */
    var headerVar= document.getElementById("headerId");
    $(window).scroll( function()
    {
        var scrollVar = $(window).scrollTop();
        /* --------------------------------------- navbar section --------------------------------------- */
        if( scrollVar >= 50 )
        {
            $("#headerId").css("backgroundColor","#000");
        }
        /* navbar لما المسافة الراسية اللي البكرة اتحركتها لاسفل اقل من 580 بيكسل مش هحط خلفية لل */
        else
        {
            $("#headerId").css("backgroundColor","transparent");
        }
        /* /////////////////////////// statistics : counter : count to library /////////////////////////// */
        // start counter when reach the top of statistics section
        var  statisticsVar = $(".statistics").offset().top ;
        if( scrollVar >= statisticsVar-150 )
           {
                // start counter
                $(".timer").countTo();
// لا تتغير counter عشان لما اطلع او انزل بالبكرة الارقم بتاع ال reload مش هيشتغل الا لما تعمل counter بعد كده الscroll يعمي مهما عملت  يخلص counter بعد ما ال scroll هيلغي تاثير ال 
               // مرة اخري counter ميرجعش يعيد ال scroll يخلص عشان لما اعمل counter بعد ما ال scroll لل stop هخليه يعمل
               $(window).off("scroll");
           }
    });
    /*  //////////////////////////////// portfolio section ///////////////////////////////////  */
    // -------------- portfolio tabs ---------------- */
    $(".portfolioTabs    button").click( function(){
        /* الاخري حيث هيخلي لون الخلفية اخضر tabs وهيحذف هذا الكلاس من كل ال active هيضيف له الكلاس tabs الزرار اللي هضغط عليه في ال */
        $(this).addClass("active").siblings().removeClass("active");
        // -------------- portfolio tabs and gallery : when click on tabs , appear specific images ---------------- */
        // ------- gallery اللي انا ضغطت عليه وعلي اساسه هظهر صور معينة في ال tab بتاع ال id هيجيب ال -------
        var filterVar = $(this).attr("id");
        if( filterVar === "all")
            {
                // gallery فهيظهر كل الصور في ال all الاولي  tab فكده تم الضغط علي ال allId اللي انا ضغطت عليه بيساوي tab بتاع ال id لو ال
                $(".Images  >  div ").fadeIn();
            }
        else
            {
        // ( gallery ) اللي هوه ال portfolioGallery فهيخفي كل الصور ثم هخليه يجيب كل المحتوي بتاع العنصر اللي واخد كلاس allId اللي انا ضغطت عليه مش بيساوي tab بتاع ال id لو ال
        //  بحيث تعطي اسم الكلاس بتاع الصور اللي اسم الكلاس بتاعها dot اللي انا ضغطت عليها وهيعمل لها دمج مع ال tab بتاع ال id يحيث هيجيب ال gallery للمحتوي بتاع ال filter ثم هعمل 
        // اللي انا ضغطت عليها tab بتاع ال id نفس اسم ال
                $(".Images  > div").fadeOut();                
                if ( $(".Images").contents().filter('.' +  filterVar ).fadeIn() );
                console.log( filterVar );
            }
    });
    
/* ///////////////////////////////////////////// our team section ////////////////////////////////////////////  */
/* ///////////////////////////////////////////// testimonials section ///////////////////////////////////////   */
// owl-carousel library
$('.owl-carousel').owlCarousel({
    //  يكون شغال دائما ويتكرر carousel عشان ال
    loop:true ,
    // 10px عن الاخر بمقدار item هيبعد كل 
    margin:10 ,
    /* هتخفيهم false ولو next , prev فهيظهر لي 2 زرار وهما ال true فالو قيمتها next , previous هو الزرار بتاع ال nav ال */
    nav:false ,
    /* هيخفيهم false فهيظهر لي 2 دائرة ولو true فالو قيمتها next , previous هو الدائرتين بتاع ال dots ال */
    // يكون متجاوب مع كل الشاشات carousel عشان ال
    responsive:
    {
        // small screen
        0:
        {
            items:1 
        } ,
        // medium screen
        600:
        {
            items:2
        },
        // large screen
        1000:
        {
            items:3
        }
    }
}); 
/* //////////////////////////////////////////// chooseUs section ////////////////////////////////////////////  */
    /* 
        about or service or contact سواء tab في ال link لما اضغط علي اي  
       links  حيث هيعطي خلفية للينك اللي ضغطت عليه ثم هيحذف هذا الكلاس من باقي ال selected هيضيف الكلاس 
        بتاع اللينك اللي انا ضغطت عليه data-class اللي الكلاس بتاعه نفس قيمة ال content ثم هيظهر ال .chooseUsLeftContent الموجودة في ال direct div هيخفي كل ال
    */
    $(".chooseUs   .chooseUsLeftPanel   ul     li").click( function()
    {
        /* حيث هيعطي خلفية للينك اللي ضغطت عليه selected هيضيف الكلاس   */
        $(this).addClass("selected");
        /* هيجيب كل اللينكات الاخواة للينك اللي ضغطت عليه و هيحذف هذا الكلاس منها */
        $(this).siblings().removeClass("selected");
        /*  .chooseUsLeftContent الموجودة في ال direct div هيخفي كل ال */
        $(".chooseUsLeftContent > div").hide() ; 
        /*  بتاع اللينك اللي انا ضغطت عليه data-class اللي الكلاس بتاعه نفس قيمة ال content ثم هيظهر ال  */
        $("." + $(this).data("class")).fadeIn() ;
    });
    
    // ----------------------------- popup video in chooseUs section -----------------------------
    $(".pop").magnificPopup({
        type:'iframe'
    });
    
});
/* //////////////////////////////////////////// pleasure section ////////////////////////////////////////////  */
// owl-carousel library
$('.owl_carousel_pleasure').owlCarousel({
    //  يكون شغال دائما ويتكرر carousel عشان ال
    loop:true ,
    // 10px عن الاخر بمقدار item هيبعد كل 
    margin:10 ,
    /* هتخفيهم false ولو next , prev فهيظهر لي 2 زرار وهما ال true فالو قيمتها next , previous هو الزرار بتاع ال nav ال */
    nav:false ,
    /* هيخفيهم false فهيظهر لي 2 دائرة ولو true فالو قيمتها next , previous هو الدائرتين بتاع ال dots ال */
    // يكون متجاوب مع كل الشاشات carousel عشان ال
    responsive:
    {
        // small screen
        0:
        {
            items:1 
        } ,
        // medium screen
        600:
        {
            items:1
        },
        // large screen
        1000:
        {
            items:1
        }
    }
}); 
/* //////////////////////////////////////////// contact section //////////////////////////////////////////// */
var nameInputVar = document.getElementById("nameInputId")       ,
    emailInputVar = document.getElementById("emailInputId")     ,
    websiteInputVar = document.getElementById("websiteInputId") ,
    subjectInputVar = document.getElementById("subjectInputId") ,
    messageVar = document.getElementById("messageId") ;
    
/* ---------------------- name inputfield ---------------------- */
nameInputVar.onfocus= function()
{
    if( nameInputVar.getAttribute("placeholder")!=="")
        {
            nameInputVar.setAttribute("placeholder"," ");
        }
}
nameInputVar.onblur= function()
{
    if( nameInputVar.getAttribute("placeholder")==" ")
        {
            nameInputVar.setAttribute("placeholder","your name");
        }
}
/* ---------------------- email inputfield ---------------------- */
emailInputVar.onfocus= function()
{
    if( emailInputVar.getAttribute("placeholder")!=="")
        {
            emailInputVar.setAttribute("placeholder"," ");
        }
}
emailInputVar.onblur= function()
{
    if( emailInputVar.getAttribute("placeholder")==" ")
        {
            emailInputVar.setAttribute("placeholder","your email");
        }
}
/* ---------------------- website inputfield ---------------------- */
websiteInputVar.onfocus= function()
{
    if( websiteInputVar.getAttribute("placeholder")!=="")
        {
            websiteInputVar.setAttribute("placeholder"," ");
        }
}
websiteInputVar.onblur= function()
{
    if( websiteInputVar.getAttribute("placeholder")==" ")
        {
            websiteInputVar.setAttribute("placeholder","your website");
        }
}
/* ---------------------- subject inputfield ---------------------- */
subjectInputVar.onfocus= function()
{
    if( subjectInputVar.getAttribute("placeholder")!=="")
        {
            subjectInputVar.setAttribute("placeholder"," ");
        }
}
subjectInputVar.onblur= function()
{
    if( subjectInputVar.getAttribute("placeholder")==" ")
        {
            subjectInputVar.setAttribute("placeholder","your subject");
        }
}
/* ---------------------- message textarea ---------------------- */
messageVar.onfocus= function()
{
    if( messageVar.getAttribute("placeholder")!=="")
        {
            messageVar.setAttribute("placeholder"," ");
        }
}
messageVar.onblur= function()
{
    if( messageVar.getAttribute("placeholder")==" ")
        {
            messageVar.setAttribute("placeholder","your message");
        }
}
/* //////////////////////////// scroll to Top button /////////////////////////////// */
// javascript code 
window.onscroll = function()
{
    var scrollTopBtn = document.getElementById("scrollToId");
   /* ////////////////////////////////////////////////////// Go Up button /////////////////////////////////////////////// */
    window.onscroll = function()
    {
        console.log(scrollY);
        if( scrollY > 100 )
        {
            scrollTopBtn.style.display="block";
        }
        else
        {
            scrollTopBtn.style.display="none";
        }
    }
    /* --------------------- when click on "go up button : go to top of page : jquery code --------------------- */
    $("#scrollToId").click( function()
    {
        $("html,body").animate({
            scrollTop : 0
        } , 1000 );
    });
}
/*  //////////////////////////////// navbar section using grid system ///////////////////////////// */
$(".links  a").click( function(){
    /*  href بتاعه بيساوي قيمة ال id بتاع السكشن اللي ال offsetTop بتاع هذا اللينك ثم هيجيب قيمة ال href لما اضغط علي اي لينك فهيجيب ال */
    $("html,body").animate({
        scrollTop : $( $(this).attr("href") ).offset().top  - 50 
    } , 2000);
});