/**
 *
 * @name jQuery sliding plugin
 * @namespace jQuery
 * @author Alexandre Magno (http://blog.alexandremagno.net)
 * @version 0.1
 * @description jQuery ui slider horizontal or vertical
 * @requires
 *   jquery.ui.core.js
 *   jquery.ui.widget.js
 */

(function( $, undefined ) {
$.widget( "ui.sliding", {
  options: {
    itens: 5,
    item: 'li',
    mode: 'horizontal'
  },
  _create: function() {
     
     containerSize = parseInt($(this.element).find(this.options.item).css('width')) * (this.options.itens);
     overallSize = parseInt($(this.element).find(this.options.item).css('width')) * ($(this.options.item, this.element).length);
     
     $(this.element).addClass('ui-widget ui-widget-content ui-corner-all ui-sliding-content');
     
     if(this.options.mode == 'horizontal') {
        $(this.element).find(this.options.item).css('float','left');
        $(this.element).css({
          'overflow' : 'hidden',
          'width' : containerSize
        });
        $(this.element).children().css({
          'width' : overallSize
        });              
     }
  },
  destroy: function() {
    
  }
});

$.extend( $.ui.sliding, {
  version: "0.1"
});
})(jQuery);