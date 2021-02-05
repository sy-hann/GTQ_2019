$(function(){
    $('.bxSlider').bxSlider({
        auto:true,control:false,pagerCustom:'.bxPager',startSlide:5
    })
    
    
    $('.tab_st1 .tab_title li').on('click',function(e){
        e.preventDefault();
        $(this).addClass('active')
        $(this).siblings().removeClass('active')
        var index=$(this).index();
        $('.tab_st1 .tab_contents ul').eq(index).show();
        $('.tab_st1 .tab_contents ul').eq(index).siblings().hide();
    })
    $('.tab_st2 .tab_title li').on('click',function(e){
        e.preventDefault();
        $(this).addClass('active')
        $(this).siblings().removeClass('active')
        var index=$(this).index();
        $('.tab_st2 .tab_contents ul').eq(index).show();
        $('.tab_st2 .tab_contents ul').eq(index).siblings().hide();
    })
    
    $('.m_btn').on('click',function(){
        $(this).toggleClass('on')
        $('.m_all_menu').slideToggle()
        
    })
    
    /*$('.m_all_menu>li>a').on('click',function(){
        $('.depth1').slideUp()
        $(this).next('.depth1').slideToggle()
        
    })*/
    
    $('.m_all_menu>li>a').on('click',function(){
        $(this).next('.depth1').slideToggle();
        $(this).parent().siblings().children('.depth1').slideUp()
    })
    
    $('.depth1>li>a').on('click',function(){
        $(this).next('.depth2').slideToggle();
        $(this).parent().siblings().children('.depth2').slideUp()
    })
    
})










