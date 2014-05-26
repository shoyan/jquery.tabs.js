/*
 * JQuery Tabs
 *
 * https://github.com/shoyan/jquery.tabs.js
 */
;(function($) {
  'use strict';

  $.fn.extend({
    tabs: function(options) {
      var options = options || {};

      return this.each(function() {
        var target = $(this).find('a');

        $(this).children().addClass("jquery-tabs");

        if(options.active_tab) {
          $(".jquery-tabs > [data-target='" + options.active_tab + "']").trigger("click");
        }

        target.on('click', function(e) {
          e.preventDefault();
          var $this = $(this),
          tabID = $this.data('target');

          $(tabID).siblings().removeClass('active')
          $(tabID).addClass('active');

          $this.parent('li').siblings().children().removeClass('active');
          $this.addClass('active');
        });
      });
    }
  });
})(jQuery);

