/*
 * JQuery Tabs
 *
 * https://github.com/shoyan/jquery.tabs.js
 */
;(function($) {
  'use strict';

  $.fn.extend({
    tabs: function(options) {
      options = options || {};

      return this.each(function() {
        var target = $(this).find('a');

        $(this).children().addClass("jquery-tabs");

        target.on('click', function(e) {
          e.preventDefault();
          var $this = $(this),
          tabID = $this.data('target');

          $(tabID).siblings().removeClass('active');
          $(tabID).addClass('active');

          $this.parent('li').siblings().children().removeClass('active');
          $this.addClass('active');

          // コールバック関数が設定されてあれば実行する
          if(typeof options.callback === 'function') {
            options.callback();
          }
        });
        if(options.active_tab) {
          activateTab(options.active_tab);
        }
      });
    },
    activateTab: function(target) {
      activateTab(target);
    }
  });

  function activateTab(target) {
    $(".jquery-tabs > [data-target='" + target + "']").trigger("click");
  }
})(jQuery);

