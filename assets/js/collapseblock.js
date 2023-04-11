$(document).ready(function () {
  $('.collapseblock').each(function () {
    var uncollapse_text = $('.collapseblock').attr('data-uncollapse');
    var collapse_text = $('.collapseblock').attr('data-collapse');

    var container = $('<div class="collapseblock-container"><blockquote class="collapseblock-collapsed-block"></div></div>')
      .insertBefore(this);

    $(container).find('.collapseblock-collapsed-block').append(this);

    $(container).append('<div class="collapseblock-control"></div>');

    $(container).find('.collapseblock-control').append('<a href="#" role="switch" aria-checked="false">[+] '+uncollapse_text+'</a>');

    $(container).find('.collapseblock-control a').click(function (event) {
      event.preventDefault();
      var block = $(container).find('.collapseblock-collapsed-block');
      if (block.length > 0) {
        $(block).removeClass('collapseblock-collapsed-block').addClass('collapseblock-expanded-block');
        $(container).find('.collapseblock-control a').html('[-] '+collapse_text).attr('aria-checked', 'false');
      } else {
        $(container).find('.collapseblock-expanded-block').removeClass('collapseblock-expanded-block').addClass('collapseblock-collapsed-block');
        $(container).find('.collapseblock-control a').html('[+] '+uncollapse_text).attr('aria-checked', 'false');
      }
    });
  });
});
