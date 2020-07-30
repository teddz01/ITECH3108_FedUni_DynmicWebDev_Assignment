// JavaScript Document
$(document).ready(function () {

  // show list of product on first load
  showPostsFirstPage();

  // when a 'read earring post' button was clicked
  $(document).on('click', '.read-earringpost-button', function () {
    showPostsFirstPage();
  });

  // when a 'page' button was clicked
  $(document).on('click', '.pagination li', function () {
    // get json url
    var json_url = $(this).find('a').attr('data-page');

    // show list of products
    showPosts(json_url);
  });
});

function showPostsFirstPage() {
  var json_url = "http://localhost/30320407/itech3108_weekly_lab_tutorials/Assignment%202/api/post/read_paging.php";
  showPosts(json_url);
}

// function to show list of earring post
function showPosts(json_url) {

  // get list of earring post from the API
  $.getJSON(json_url, function (data) {

    // html for listing earring post
    readPostsTemplate(data, "");

    // chage page title
    changePageTitle("Earring Holler");

  });
}
