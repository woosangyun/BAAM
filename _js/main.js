// JavaScript Document

$(function(){
	
    var item1,item2,item3,vNum;
    var isMove = false;
    var visualNum = 0;
    var total = $(".text-wrap").length - 1;
    
    
	$(document).on("click",".ui .next",function(e){  
        
        e.preventDefault();
        
        if(isMove == false){
            isMove = true;
            init();
            item1.addClass("v3");
            item1.removeClass("v1");
            item1.addClass("visual-out-next");
            item2.addClass("v1");
            item2.removeClass("v2");
            item2.addClass("unexpand-next");
            item3.addClass("v2");
            item3.removeClass("v3");
            item3.addClass("visual-in-next");
            removeInter();
            typeHide();
            loaderCollaps();
            plusNum();
            loaderExpand();
            typeShow();
        }
    });
    
    $(document).on("click",".ui .prev",function(e){  
        
        e.preventDefault();
        
        if(isMove == false){
            isMove = true;
            init();
            item1.addClass("v2");
            item1.removeClass("v1");
            item1.addClass("visual-out-prev");
            item2.addClass("v3");
            item2.removeClass("v2");
            item2.addClass("unexpand-prev");
            item3.addClass("v1");
            item3.removeClass("v3");
            item3.addClass("visual-in-prev");
            removeInter();
            typeHide();
            loaderCollaps();
            minusNum();
            loaderExpand();
            typeShow();
        }
    });
    
    
    function init(){
        item1 = $("#visual .v1");
        item2 = $("#visual .v2");
        item3 = $("#visual .v3");
    }
    
    function removeInter(){
        $("#visual .interaction").each(function(index){
           
            var item = $(this);
            setTimeout(function(){
                item.removeClass("unexpand-next");
                item.removeClass("unexpand-prev");
                item.removeClass("visual-out-next");
                item.removeClass("visual-out-prev");
                item.removeClass("visual-in-next");
                item.removeClass("visual-in-prev");
                isMove = false;
            },1500);

        });
    }
    
    
    
    function typeHide(){
        
        vNum = visualNum;
        
       $(".mask").eq(vNum).find("p").each(function(index){
            
            var item = $(this);

            item.removeClass("type-show");

            setTimeout(function(){
                item.addClass("type-hide");
            },50*index + 50);
            setTimeout(function(){
                item.removeClass("type-hide");
            },750);

        }); 
        
    }
    
    function typeShow(){
        vNum = visualNum;
        $(".mask").eq(vNum).find("p").each(function(index){

            var item = $(this);
            item.removeClass("type-hide");
            setTimeout(function(){
                item.addClass("type-show");
            },50*index);

        });
    }
    
    function plusNum(){
        if(visualNum < total){
            visualNum++;
        }else{
            visualNum = 0;
        }
    }
    
    function minusNum(){
        if(visualNum > 0){
            visualNum--;
        }else{
            visualNum = total;
        }
    }
    
    function loaderCollaps(){
        
        vNum = visualNum;
        $("#loader .item").eq(vNum).addClass("loader-collaps");
        $("#loader .item").eq(vNum).removeClass("loader-expand");
    
    }
    
    function loaderExpand(){
        
        vNum = visualNum;
        $("#loader .item").eq(vNum).addClass("loader-expand");
        $(".slogan .text-wrap").css("z-index",-1);
        $(".slogan .text-wrap").eq(vNum).css("z-index",1);
    }
    
    /*$(window).onresize(function(){
       $(".interaction.v2").css({"opacity":0}); 
    });*/
    
    loaderExpand();
    typeShow();
    init();
    
    
    
    
    
    
    
	
});
