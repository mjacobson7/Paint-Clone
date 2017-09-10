$( document ).ready(function() {

  var chosenColor = '#ffffff';
  var isDown = false;

  //Show selected color when color is chosen
  $('#white').click(function() {
    chosenColor = '#ffffff';
    $('#current-color').css('background-color', '#ffffff');
  });
  $('#navy').click(function() {
    chosenColor = '#001f3f';
    $('#current-color').css('background-color', '#001f3f');
  });
  $('#blue').click(function() {
    chosenColor = '#0074D9';
    $('#current-color').css('background-color', '#0074D9');
  });
  $('#aqua').click(function() {
    chosenColor = '#7FDBFF';
    $('#current-color').css('background-color', '#7FDBFF');
  });
  $('#olive').click(function() {
    chosenColor = '#3D9970';
    $('#current-color').css('background-color', '#3D9970');
  });
  $('#green').click(function() {
    chosenColor = '#2ECC40';
    $('#current-color').css('background-color', '#2ECC40');
  });
  $('#lime').click(function() {
    chosenColor = '#01FF70';
    $('#current-color').css('background-color', '#01FF70');
  });
  $('#yellow').click(function() {
    chosenColor = '#FFDC00';
    $('#current-color').css('background-color', '#FFDC00');
  });
  $('#orange').click(function() {
    chosenColor = '#FF851B';
    $('#current-color').css('background-color', '#FF851B');
  });
  $('#red').click(function() {
    chosenColor = '#FF4136';
    $('#current-color').css('background-color', '#FF4136');
  });
  $('#maroon').click(function() {
    chosenColor = '#85144b';
    $('#current-color').css('background-color', '#85144b');
  });
  $('#fuchsia').click(function() {
    chosenColor = '#F012BE';
    $('#current-color').css('background-color', '#F012BE');
  });
  $('#purple').click(function() {
    chosenColor = '#B10DC9';
    $('#current-color').css('background-color', '#B10DC9');
  });
  $('#black').click(function() {
    chosenColor = '#111111';
    $('#current-color').css('background-color', '#111111');
  });
  $('#gray').click(function() {
    chosenColor = '#AAAAAA';
    $('#current-color').css('background-color', '#AAAAAA');
  });
  $('#silver').click(function() {
    chosenColor = '#DDDDDD';
    $('#current-color').css('background-color', '#DDDDDD');
  });
  $('#brown').click(function() {
    chosenColor = '#a05548';
    $('#current-color').css('background-color', '#a05548');
  });

  //clear board from any colors
  $('#clear').click(function() {
    $('.box').css('background', '#ffffff');
  })

  //color boxes based on color chosen
  $('.box').click(function() {
    $(this).css('background-color', chosenColor);
  })

  $(document).mousedown(function() {
    isDown = true;
  })

  $(document).mouseup(function() {
    isDown = false;
  })

  $('.box').mouseenter(function() {
    if(isDown) {
      $(this).css('background-color', chosenColor);
    }
  });




}); //end Jquery
