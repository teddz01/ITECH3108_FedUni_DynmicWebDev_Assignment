// JavaScript Document
$(document).ready(function () {

  // handle 'read one' button click
  $(document).on('click', '.read-one-post-button', function () {
    // get id
    var id = $(this).attr('data-id');

    // read post record based on given ID
    $.getJSON("http://localhost/30320407/itech3108_weekly_lab_tutorials/Assignment%202/api/post/read_one.php?id=" + id, function (data) {
      // start html
      var read_one_post_html = `
 
    <!-- 'read earringpost' button to show list of earring posts -->
	<div class="container">
	<div class="ctn-search-create pull-right">
    <div id='read-earringpost' class='btn btn-primary pull-right m-b-15px read-earringpost-button'>
        <span class='glyphicon glyphicon-list'></span> Read Posts
    </div>
  </div>
  </div>
	<br>
		<!-- posts layout -->
		<div class=" container main-post ">
          <div class="card"> 
			<div class="card-header">
			<div class="card-header-text text-left"> ` + data.name + ` </div> 
			<div class="text-muted text-right"> posted: ` + data.post_date + ` 
			 <span> | </span> <span>  likes: ` + data.likes + ` </span></div>
			</div>

			<div class="card-body">
            <p class="card-text"> ` + data.text + ` </p>
          </div>

        <div class='card-footer '> 
		<form class='like-unlike' id='like-unlike' action='#' method='POST'>

		 <!-- add comment button -->
		 <div id='share-opinion-button' class='btn btn-primary m-r-10px share-opinion-button' 
			data-id='` + data.id + `' ><span class='glyphicon glyphicon-bullhorn'>
			</span> Post Opinion </div>
        </div>

		 <!-- like button -->
		<div type="submit" id="like-earringpost-button" class="btn btn-info m-r-15px 
		like-earringpost-button" data-id='` + data.id + `'><span class='glyphicon glyphicon-thumbs-up'>
		</span> Like </div>
		<input type='hidden' class='likes' id='likes' value='0'>
		</form> `;

      read_one_post_html += `
		<!-- hidden text field - add comments to posts -->
		<div class="container add-post-comment" id=add-post-comment style="display: none;"> 
		<div class="container ">

		<form id='add-comment-form' action='#' method='post' border='0'>
		<div class="add-comment-section "> 	
          <div class="form-group">
              <textarea rows="5" cols="50" name="text" class="form-control" id="message" placeholder="Share your thoughts..." max-length="550" required></textarea>                                 
          </div>

		<div clas="container">
		<div class="field-btn-block">
		<div class="form-group">
             <input type="text" class="form-control" id="name" name="name" placeholder="Name" required>
             <input type="hidden" class="form-control" id="reply_to" name="reply_to" value=' ` + data.id + ` '>
          </div> 
          </div> 

        <!-- submit comment button -->
		<button type="submit" id="add-comment" class='btn btn-primary add-comment-button' >
		<span class='glyphicon glyphicon-ok'></span> SUBMIT </button>
        </div>
		</div>

		</form>
		</div>
		</div> 
		
		<!-- card end div -->
		</div>

		<br> 
		<!-- comments section header -->
		<div class="main-header-text"> Comments </div> 

		<!-- comments card container -->
		<div class="comment-card">
		<div class="comments_container_body">
		<h4> Hey there! </h4>
		<p class="text" id="text"> Looks like this post has no comments yet! </p>
		<p> Be the first to voice your opinion. </p>
		
        <div class="comment_details">
			<!-- date and time -->
            <ul>
				<li><div class="fa fa-pencil name" id="name"></div>
              <span> Earring Holler </span></li>
               <li><div class="fa fa-calendar post_date" id="post_date"></div>
              <span> 2020 </span></li>
            </ul>

			<!-- share/reply and love -->
			<ul>
                <li><i class="fa fa-share-alt"></i></li>
                <li><i class="fa fa-reply "></i></li>
                <li><i class="fa fa-heart love"></i></li>
            </ul>
        </div>
		</div>		
		</div> `;

      // inject html to 'page-content' of our app
      $("#page-content").html(read_one_post_html);

      // chage page title
      changePageTitle("Earring Post");
		
    });

  });

  // handle post reply 
  $(document).on('submit', '#add-comment-form', function () {
    // get form data
    var form_data = JSON.stringify($(this).serializeObject());
    // submit form data to api
    $.ajax({
      url: "http://localhost/30320407/itech3108_weekly_lab_tutorials/Assignment%202/api/post/post_reply.php",
      type: "POST",
      contentType: 'application/json',
      data: form_data,
      success: function (result) {
        // product was created, go back to posts list
        bootbox.alert({
          message: "Thank you. Your comment was added successfully!",
          callback: function () {
            $(".add-post-comment").hide(3000);
            $(document).ready(function () {
              $("#add-comment-form").trigger("reset");
            });
          }
        });
      },

      error: function (xhr, resp, text) {
        // show error to console
        console.log(xhr, resp, text);
      }
    });
    // prevents the page from refreshing
    return false;
  });
	


  // end of file
});


