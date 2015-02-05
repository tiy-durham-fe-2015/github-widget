$(function () {
  var userData = $('#user-data').html();
  var template = _.template(userData, {variable: 'm'});
  var repoData = $('#repose').html();
  var template2 = _.template(repoData, {variable: 'm'});

  $('.form').submit(function () {
    var userName = $('.username-input').val();

    $.getJSON('https://api.github.com/users/' + userName)

      .done(function (data) {
        console.log(data);
        $('.wrapper').html(template (data));
        // we cannot pass undefined to click,
        // so we place the empty function instead
        // with show-Repos as a parameter.
        $('.show-repos').click (function() {
          showRepos(data.repos_url);
        });
      })

      .fail(function (request, status, err) {
        console.log('This failed because ' + err);
      });

    return false;
  });

  function showRepos(url) {
    $.getJSON(url)
      .done(function (data){
        $('.repos-list').html(template2(data));

      })
  }
});
