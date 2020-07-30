// Handle Like Unlike
$(document).ready(function () {

  $(document).on('click', 'like-earringpost-button', function () {

    // increment  by 1 on click
    //var counter = parseInt($("#likes").val());
    var counter = document.getElementById('#likes');
    counter++;

    // serialize data
    var form_data = JSON.stringify($(this).serializeObject());
    // submit form data to api
    $.ajax({
      url: "http://localhost/30320407/itech3108_weekly_lab_tutorials/Assignment%202/api/post/like_unlike.php?",
      method: "PUT",
      contentType: 'application/json',
      data: (id, counter),
      success: function (result) {
        alert("like was added.")
      },

      error: function (xhr, resp, text) {
        // show error to console
        console.log(xhr, resp, text);
      }

    });
  });
});
