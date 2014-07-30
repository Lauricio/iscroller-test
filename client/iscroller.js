document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);

Template.main.rendered = function () {
  myScroll = new IScroll('#wrapper', { 
    mouseWheel: true,
    momentum: true,
    scrollbars: true,
    zoom: true
  });
};