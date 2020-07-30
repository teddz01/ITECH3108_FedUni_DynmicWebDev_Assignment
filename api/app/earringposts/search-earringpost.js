// JavaScript Document
$(document).ready(function () {

  // when a 'search earring post' button was clicked
  $(document).on('submit', '#search-earringpost-form', function () {

    // get search keywords
    var keywords = $(this).find(":input[name='keywords']").val();

    // get data from the api based on search keywords
    $.getJSON("http://localhost/30320407/itech3108_weekly_lab_tutorials/Assignment%202/api/post/search.php?s=" + keywords, function (data) {

      // template in earringposts.js
      readPostsTemplate(data, keywords);

      // chage page title
      changePageTitle("Search Posts: " + keywords);

    });

    // prevent whole page reload
    return false;
  });

});
