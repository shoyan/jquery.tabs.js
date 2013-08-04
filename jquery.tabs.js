/*
 * JQuery Tabs
 *
 * https://github.com/shoyan/jquery.tabs.js
 */
;(function($) {

  'use strict';

  $.fn.tabs= function() {
    var target = $(this).find('a');

    target.on('click', function(e) {
      e.preventDefault();
      var $this = $(this),
      tabID = $(this).data('target');

      $(tabID).siblings().removeClass('active')
      $(tabID).addClass('active');

      $this.parent('li').siblings().children().removeClass('active');
      $this.addClass('active');
      return true;
    });
  }
})(jQuery);

