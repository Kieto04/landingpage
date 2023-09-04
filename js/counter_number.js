// --------counter_content_02----------
var counted = 0;
$(window).scroll(function() {
  var oTop = $('#counter_02').offset().top - window.innerHeight;
  if (counted == 0 && $(window).scrollTop() > oTop) {
    $('.count').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2500,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum).toLocaleString('en-US'));
          },
          complete: function() {
            $this.text(this.countNum.toLocaleString('en-US'));
            //alert('finished');
          }

        });
    });
    counted = 1;
  }

});

// --------counter_content_06----------
var counted2 = 0;
$(window).scroll(function() {
  var oTop = $('#counter_06').offset().top - window.innerHeight;
  if (counted2 == 0 && $(window).scrollTop() > oTop) {
    $('.count2').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2700,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum).toLocaleString('en-US'));
          },
          complete: function() {
            $this.text(this.countNum.toLocaleString('en-US'));
            //alert('finished');
          }

        });
    });
    counted2 = 1;
  }

});