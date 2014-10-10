/*
 * JQuery Tabs
 *
 * https://github.com/shoyan/jquery.tabs.js
 */
;(function($) {
  'use strict';

  var activate = function() {
    var $this = $(this),
    tabID = $this.data('target');

    $(tabID).siblings().removeClass('active');
    $(tabID).addClass('active');

    $this.parent('li').siblings().children().removeClass('active');
    $this.addClass('active');
  };

  $.fn.extend({
    tabs: function(options) {
      options = options || {};

      return this.each(function() {
        var target = $(this).find('a');

        $(this).children().addClass("jquery-tabs");

        if(options.active_tab) {
          var $this = $(".jquery-tabs > [data-target='" + options.active_tab + "']");
          activate.call($this);
        }

        target.on('click', function(e) {
          e.preventDefault();

          /*
           * コールバック関数が設定されてあれば実行する
           * trueが返った場合は、タブの切り替えを行わない
           */
          if(typeof options.stopSwitching === 'function') {
            if (options.stopSwitching()) {
              return false;
            }
          }

          activate.call(this);

          // コールバック関数が設定されてあれば実行する
          if(typeof options.callback === 'function') {
            options.callback();
          }
        });
      });
    },
    activateTab: function(target) {
      var $this = $(".jquery-tabs > [data-target='" + target + "']");
      activate.call($this);
    }
  });
})(jQuery);
