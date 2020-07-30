// JavaScript Document
$(document).ready(function () {

  // show list of product on first load
  showCommentsFirstPage();

  // when a 'page' button was clicked
  $(document).on('click', '.pagination li', function () {
    // get json url
    var json_url = $(this).find('a').attr('data-page');
    // show list of comments
    showPosts(json_url);
  });
});

function showCommentsFirstPage() {
  var json_url = "http://localhost/30320407/itech3108_weekly_lab_tutorials/Assignment%202/api/post/comments_paging.php";
  showPosts(json_url);
}

// function to show list of earring post comments
function showPosts(json_url) {

  // get list of earring post from the API
  $.getJSON(json_url, function (data) {

    // html for listing earring post
    readCommentsTemplate(data);
  });
}
