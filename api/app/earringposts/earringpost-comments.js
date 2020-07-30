// JavaScript Document
function readCommentsTemplate(data) {
	// creating new table row per record
    var read_earringpost_html = `

		<!-- comments card container -->
		<div class="comment-card">
		<div class="comments_container_body">
		<p> ` + data.text + ` </p>
		
        <div class="comment_details">
			<!-- date and time -->
            <ul>
				<li><div class="fa fa-pencil"></div>
              <span> ` + data.name + ` </span></li>
               <li><div class="fa fa-calendar"></div>
              <span> ` + data.post_date + ` </span></li>
            </ul>

			<!-- share/reply and like -->
			<ul>
                <li><i class="fa fa-share-alt"></i></li>
                <li><i class="fa fa-reply "></i></li>
                <li><i class="fa fa-heart love"></i></li>
            </ul>
        </div>
		</div>		
		</div> `;

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
