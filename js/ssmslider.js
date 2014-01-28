(function ( $ ) {
	$.fn.ssmSlider = function( args ) {
		var global = {
			'$this' 			: $( this ), 
			'$children'  		: $( this ).children(),
			'$grandChildren'   : $( this ).children().children(),
			'$width'		   : ( args.width ) ? args.width : '100%' ,
			'$height'		  : ( args.height ) ? args.height : 'auto' ,
			'$z_index'		 : ( args.z_index ) ? args.z_index : 100 ,	
			'$animationType'   : ( args.animationType ) ? args.animationType : 'fade' ,
			'$eachWidth' 	   : $( this ).children().width(),
			'$totalChildren'   : $( this ).children().length,
			'$tickTock'		: ( args.tickTock ) ? args.tickTock : 2000 ,
			'setHightWidth' : function(){
				this.$this.setThisHightWidth( this.$height , this.$width );
				this.$children.setThisHightWidth( this.$height , this.$width );
				this.$grandChildren.setThisHightWidth( this.$height , this.$width );
			},
			'makeAnimation' : function(){
				 if( this.$animationType === 'fade' )
				 	this.fade();
				 else if( this.$animationType === 'slide' )
				 	this.slide(); 			
			},
			'fade' : function(){
				this.setCss();
				this.setId();
				html = $( ".ssm_fadein" ).last().html();
				$( ".ssm_fadein" ).last().delay( global.$tickTock ).animate({ "opacity": "0" }, global.$tickTock / 2 , 'linear' , function(){
					$( this ).remove();
					$( ".ssm_fadein" ).parent().prepend('<div class="ssm_fadein" style="position: absolute;">'+ html +'</div>');
					global.fade();	 
				});
			},
			'tick' : function(){
				
			},
			'slide' : function(){
				this.setCss();	
			   	this.setId();
				html = $( ".ssm_fadein" ).last().html();
				$( ".ssm_fadein" ).last().delay( global.$tickTock ).animate({ "left": global.$eachWidth }, global.$tickTock / 2 , 'linear' , function(){
					$( this ).remove();
					$( ".ssm_fadein" ).parent().prepend('<div class="ssm_fadein" style="position: absolute; width: 100%; height: auto;left:0;top:0;">'+ html +'</div>');
					global.slide();	 
				});
				
			},
			'setCss' : function(){
				this.$this.css({'position' : 'relative' });
				this.$children.css({ 'position' : 'absolute' , 'left':0 ,'top':0 });	
			},
			'setId' : function(){
				$.each( this.$children , function( index , value ){
					$( this ).attr( { 'id' : 'ssmId_' + index , 'class' : 'ssm_fadein' });		
				});	
			}, 
		};
		global.setHightWidth( args );
		global.makeAnimation();
	};
	$.fn.setThisHightWidth = function( height , width ){
		$( this ).css({ 'width' : width , 'height' : height })
	};
}( jQuery ));