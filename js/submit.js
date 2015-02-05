$(function () {
  var userData = $('#user-data').html();
  var template = _.template(userData, {variable: 'm'});

  $('.form').submit(function () {
    var userName = $('.username-input').val();

    $.getJSON('https://api.github.com/users/' + userName)
      .done(function (data) {
        console.log(data);
        $('.wrapper').html(template (data));
      })
      .fail(function (request, status, err) {
        console.log('This failed because ' + err);
      });
    return false;
  });

});
