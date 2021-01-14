$(function() { 
  let timer = 0;
  const classes = document.body.classList;
  window.addEventListener('resize', function () {
      if (timer) {
          clearTimeout(timer);
          timer = null;
      }
      else
          classes.add('stop-transitions');

      timer = setTimeout(() => {
          classes.remove('stop-transitions');
          timer = null;
      }, 100);
  });
});
