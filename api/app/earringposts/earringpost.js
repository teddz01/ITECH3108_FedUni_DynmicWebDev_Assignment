// JavaScript Document

function readPostsTemplate(data, keywords) {

  var read_earringpost_html = `

        <!-- search earringpost form -->
		<div class="ctn-search-create ">

        <form id='search-earringpost-form' action='#' method='post'>
        <div class='input-group pull-left w-30-pct'>
 
            <input type='text' value='` + keywords + `' name='keywords' class='form-control earringpost-search-keywords' placeholder='Search Posts...' />
 
            <span class='input-group-btn'>
            <button type='submit' class='btn btn-default' type='button'>
            <span class='glyphicon glyphicon-search'></span>
            </button></span>
        </div>
        </form>

        <!-- when clicked, it will load the create earring post form -->
		<div class="row">
        <div id='create-earringpost' class='btn btn-primary pull-right m-b-15px create-earringpost-button'>
            <span class='glyphicon glyphicon-plus'></span> Add New Post </div>
        </div>

		</div>
		<br> 

		<div class="main-header-text"> Recents Posts </div> 
		`;

  // loop through returned list of data
  $.each(data.records, function (key, val) {
   
      // creating new table row per record
      read_earringpost_html += `

		 <!-- posts layout -->
		<div class="wrapper">
		
		<div class=" container main-post">
		<div class="card ">
          <div class="card-header "> 

			<div class="card-header-text text-left"> ` + val.name + ` </div> 
			<div class="text-muted text-right"> posted: ` + val.post_date + ` 
			 <span> | </span> <span>  likes: ` + val.likes + ` </span></div> 

			</div>
          
			<div class="card-body">
            <p class="card-text"> ` + val.text + ` </p>
          </div> 
	  
        <div class="card-footer "> 
		<form id='like-unlike' action='#' method='post'>
		 <!-- add comment button -->
		 <div id='read-one-post-button' class='btn btn-primary m-r-10px read-one-post-button'  data-id='` + val.id + `' ><span class='glyphicon glyphicon-eye-open'></span> View Post </div>
        </div> `;

      read_earringpost_html += `

		</div>
        </div>
        </div>
         `;
  });

  // end table
  read_earringpost_html += `</div>`;

  // pagination
  if (data.paging) {
    read_earringpost_html += "<div class='container m-t-10px'><ul class='pagination pull-left margin-zero padding-bottom-2em'>";

    // first page
    if (data.paging.first != "") {
      read_earringpost_html += "<li><a data-page='" + data.paging.first + "'>First Page</a></li>";
    }

    // loop through pages
    $.each(data.paging.pages, function (key, val) {
      var active_page = val.current_page == "yes" ? "class='active'" : "";
      read_earringpost_html += "<li " + active_page + "><a data-page='" + val.url + "'>" + val.page + "</a></li>";
    });

    // last page
    if (data.paging.last != "") {
      read_earringpost_html += "<li><a data-page='" + data.paging.last + "'>Last Page</a></li>";
    }
    read_earringpost_html += "</ul></div>";
  }

  // inject to 'page-content' of our app
  $("#page-content").html(read_earringpost_html);
}
