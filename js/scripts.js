
function advantagesSlider() {

      var slideCount = $('#advantages-slider ul li').length;
      var slideWidth = $('#advantages-slider ul li').width();
      var slideHeight = $('#advantages-slider ul li').height();
      var sliderUlWidth = slideCount * slideWidth;
      
      $('#advantages-slider').css({ width: slideWidth, height: slideHeight });
      
      $('#advantages-slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
      
      $('#advantages-slider ul li:last-child').prependTo('#advantages-slider ul');
  
      function moveLeft() {
          $('#advantages-slider ul').animate({
              left: + slideWidth
          }, 200, function () {
              $('#advantages-slider ul li:last-child').prependTo('#advantages-slider ul');
              $('#advantages-slider ul').css('left', '');
          });
      };
  
      function moveRight() {
          $('#advantages-slider ul').animate({
              left: - slideWidth
          }, 200, function () {
              $('#advantages-slider ul li:first-child').appendTo('#advantages-slider ul');
              $('#advantages-slider ul').css('left', '');
          });
      };
  
      $('.advantages a.control_prev').click(function () {
          moveLeft();
      });
  
      $('.advantages a.control_next').click(function () {
          moveRight();
      });
  
}
advantagesSlider();

function recentProjectsSlider() {

    var slideCount = $('#recent-projects__slider ul li').length;
    var slideWidth = $('#recent-projects__slider ul li').width();
    var slideHeight = $('#recent-projects__slider ul li').height();
    var sliderUlWidth = slideCount * slideWidth;
    
    $('#recent-projects__slider').css({ width: slideWidth, height: slideHeight });
    
    $('#recent-projects__slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
    
    $('#recent-projects__slider ul li:last-child').prependTo('#recent-projects__slider ul');

    function moveLeft() {
        $('#recent-projects__slider ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#recent-projects__slider ul li:last-child').prependTo('#recent-projects__slider ul');
            $('#recent-projects__slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#recent-projects__slider ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#recent-projects__slider ul li:first-child').appendTo('#recent-projects__slider ul');
            $('#recent-projects__slider ul').css('left', '');
        });
    };

    $('.recent-projects a.control_prev').click(function () {
        moveLeft();
    });

    $('.recent-projects a.control_next').click(function () {
        moveRight();
    });

}
recentProjectsSlider();

function stocksSlider() {

    var slideCount = $('#stocks__slider ul li').length;
    var slideWidth = $('#stocks__slider ul li').width();
    var slideHeight = $('#stocks__slider ul li').height();
    var sliderUlWidth = slideCount * slideWidth;
    
    $('#stocks__slider').css({ width: slideWidth, height: slideHeight });
    
    $('#stocks__slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
    
    $('#stocks__slider ul li:last-child').prependTo('#stocks__slider ul');

    function moveLeft() {
        $('#stocks__slider ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#stocks__slider ul li:last-child').prependTo('#stocks__slider ul');
            $('#stocks__slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#stocks__slider ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#stocks__slider ul li:first-child').appendTo('#stocks__slider ul');
            $('#stocks__slider ul').css('left', '');
        });
    };

    $('.stocks a.control_prev').click(function () {
        moveLeft();
    });

    $('.stocks a.control_next').click(function () {
        moveRight();
    });

}
stocksSlider();
  

window.onload = function(){
	var popup = document.getElementById('popup');
    var overlay = document.getElementById('popup-bg');
    var openButton = document.getElementById('show-popup');
    document.onclick = function(e){
        if(e.target.id == 'popup-bg'){
            popup.style.display = 'none';
            overlay.style.display = 'none';
        }
        if(e.target === openButton){
         	popup.style.display = 'flex';
            overlay.style.display = 'flex';
        }
    };
};
