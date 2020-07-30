// JavaScript Document
$(document).ready(function () {

  // show html form when 'create earring post' button was clicked
  $(document).on('click', '.create-earringpost-button', function () {
    // load list of opinions
    $.getJSON("http://localhost/30320407/itech3108_weekly_lab_tutorials/Assignment%202/api/post/read.php", function (data) {
      // we have our html form here where posts information will be entered
      // we used the 'required' html5 property to prevent empty fields
      var create_earringpost_html = ` 

    <!-- 'read earringpost' button to show list of earring posts -->
	<div class="container">
	<div class="ctn-search-create pull-right">
    <div id='read-earringpost' class='btn btn-primary pull-right m-b-15px read-earringpost-button'>
        <span class='glyphicon glyphicon-list'></span> Read Posts
    </div>
  </div>
  </div>

	<br>

	<!-- 'create earring post' html form -->
	<div class="create-post">
	<form id='create-earringpost-form' action='#' method='post' border='0'>
	<div class="container-fluid">
      <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xs-offset-3">  

          <div class="form-group">
              <label class="form-label" for="name">Name</label>
              <input type="text" class="form-control" id="name" name="name" tabindex="3">
          </div>  

          <div class="form-group">
              <label class="form-label" for="message">Opinion</label>
              <textarea rows="5" cols="50" name="text" class="form-control" id="message" tabindex="4" max-length="550" required></textarea>                                 
          </div>

          <div class="text-center">
              <button type="submit" class="btn btn-start-order"><span class='glyphicon glyphicon-plus'></span> Add Post</button>
          </div>
  	</div>
	</div>
	</form>
	</div> `;

      // inject html to 'page-content' of our app
      $("#page-content").html(create_earringpost_html);

      // chage page title
      changePageTitle("Create Earring Post");
    });
  });

  // will run if create product form was submitted
  $(document).on('submit', '#create-earringpost-form', function () {
    // get form data
    var form_data = JSON.stringify($(this).serializeObject());
    // submit form data to api
    $.ajax({
      url: "http://localhost/30320407/itech3108_weekly_lab_tutorials/Assignment%202/api/post/create.php",
      type: "POST",
      contentType: 'application/json',
      data: form_data,
      success: function (result) {
        // product was created, go back to posts list
        bootbox.alert({
          message: "Post created successfully.",
          size: 'small'
        });
        showPosts(result);
      },
      error: function (xhr, resp, text) {
        // show error to console
        console.log(xhr, resp, text);
      }
    });

    return true;
  });
});
