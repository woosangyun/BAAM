// JavaScript Document


////////////////////     BROWSER POPUP      ////////////////////
	
function openWin(url, width, height){
	window.open(url, "", "width="+width+", height="+height+", toolbar=no, menubar=no, scrollbars=yes, resizable=no" );
} 

$(function(){
	
	
	////////////////////     HEADER     ////////////////////
	
	/*   HEADER 로드   */
	$("header").load('../_inc/gnb.html',function(){
        gnbInit();
    });
	
	
	
	////////////////////     FOOTER     ////////////////////
	
	/*   FOOTER 로드 */  
	$("footer").load('../_inc/footer.html');
	
    
    ////////////////////     MENU     ////////////////////
    
    $(document).on('click',".btn-menu",function(e){
        
        $(".btn-menu").toggleClass("on");
        $("#gnb").toggleClass("on");
        
        if($(this).hasClass("on")){
            $(".menu-wrap ul li").each(function(index){
           
                var item = $(this).find("a");
                setTimeout(function(){
                    item.removeClass("init");
                },150*index + 500);

            });
        }else{
            $(".menu-wrap ul li").each(function(index){
           
                 $(this).find("a").addClass("init");
            });
        }

        e.preventDefault();
        
    });
    
    $(document).on('mouseover',".menu-wrap a",function(){
        
        $(".menu-wrap").addClass("on");
        
    });
    
    $(document).on('mouseout',".menu-wrap",function(){
        
        $(".menu-wrap").removeClass("on");
        
    });
    
    
    
    ////////////////////     Text Animation     ////////////////////
    
    function gnbInit(){
        $('.order').html(function(i, html) {
        
            var chars = $.trim(html).split("");

            return '<span>' + chars.join('</span><span>') + '</span>';
        });
    }
    
    
    ////////////////////     Type Mask     ////////////////////
    
    
    function corpShow(){
        
        $(".init-mask").each(function(index){

            var item = $(this);
            setTimeout(function(){
                item.addClass("type-show");
            },50*index);

        });
        
    }
    
    corpShow();
    
    
    ////////////////////     Works     ////////////////////
    
    
    $(document).on('click',".ui-wrap .btn-grid",function(e){
        
        $(".works").removeClass("show");
        $(".works").addClass("hide");

        e.preventDefault();
        
    });
    
    $(document).on('click',".ui-wrap .btn-slide",function(e){
        
        $(".works").removeClass("hide");
        $(".works").addClass("show");

        e.preventDefault();
        
    });
    
    
    ////////////////////     Swiper     ////////////////////
    
    var mySwiper = new Swiper ('.swiper-container', {
        // Optional parameters
        effect: 'coverflow',
        direction: 'horizontal',
        loop: true,
        speed:1000,
        coverflowEffect: {
            rotate: 100,
            stretch: 50,
            depth: 500,
            modifier: 1,
            slideShadows : true,
        },

        /*// If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },*/

        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

        /*// And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },*/
      });
    
    var prevIndex;
    var worksTotal = $(".text-wrap .mask").length; 
    
    mySwiper.on('slideNextTransitionStart', function () {
        
        console.log("realIndex : " + mySwiper.realIndex);
        
        if(mySwiper.realIndex == 0){
           prevIndex = worksTotal - 1;
        }else{
           prevIndex = mySwiper.realIndex - 1;
        };
        typeHide();
    });
    mySwiper.on('slidePrevTransitionStart', function () {
        if(mySwiper.realIndex == worksTotal -1){
           prevIndex = 0;
        }else{
           prevIndex = mySwiper.realIndex + 1;
        };
        typeHide();
    });
    mySwiper.on('slideChange', function () {
        setTimeout(function(){
            
            typeShow()
            
        },1);

    });

    function typeShow(){
        
        
        vNum = mySwiper.realIndex;
        $(".mask").find("p").removeClass("type-show");
        $(".mask").eq(vNum).find("p").each(function(index){

            var item = $(this);
            setTimeout(function(){
                item.addClass("type-show");
            },50*index);

        });
        
        $(".works .text-wrap li").css("z-index",-1);
        $(".works .text-wrap li").eq(vNum).css("z-index",1);
        
    }
    
    typeShow();
    
    function typeHide(){
        
        vNum = prevIndex;
        
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
	
	////////////////////     MODAL POPUP     ////////////////////
	
	/*   Sitemap 로드   */
	/*$("#modal-wrap").load('../_inc/modal.html',function(){
		
		modal(); 
		accessibilityFocus();
		
	});*/
	
	/*function accessibilityFocus() {
		
		$(document).on('keydown', '[data-focus-prev], [data-focus-next]', function(e){
			var next = $(e.target).attr('data-focus-next'), 
				prev = $(e.target).attr('data-focus-prev'), 
				target = next || prev || false; 
			
			if(!target || e.keyCode !== 9) {
				return;
				
			} 
			
			if( (!e.shiftKey && !!next) || (e.shiftKey && !!prev) ) { 
				
				setTimeout(function(){
					$('[data-focus="' + target + '"]').focus(); 
				}, 1);
				
			} 
		}); 
	} 
	
	function modal() {
		
		var openBtn = '[data-modal]', 
			closeBtn = '.modal-close'; 
		
		function getTarget(t) { 
			
			return $(t).attr('data-modal'); 
		
		} 
		
		function open(t) { 
			
			var showTarget = $('[data-modal-con="' + t + '"]');
			
			
			window.setTimeout(function(){
				var pop_height = showTarget.height()/-2;
				var pop_width = showTarget.innerWidth()/-2;
				showTarget.attr("tabindex","0");
				showTarget.show().css({"margin-top":pop_height,"margin-left":pop_width});
				showTarget.focus();
				showTarget.find('.modal-close').data('activeTarget', t);
			},500);
			
		} 
		
		function close(t) { 
			
			var activeTarget = $('[data-modal-con="' + t + '"]'); 
			activeTarget.hide(); 
			$('[data-modal="' + t + '"]').focus(); 
		} 
		
		$(document).on('click', openBtn, function(e){ 
			open(getTarget($(this)));
			//alert(getTarget($(this)));
			$("#modal-wrap").show();
			e.preventDefault(); 
		}) .on('click', closeBtn, function(e) { 
			e.preventDefault(); 
			close($(this).data('activeTarget'));
			$("#modal-wrap").hide();
		}); 
	}*/
	
});
