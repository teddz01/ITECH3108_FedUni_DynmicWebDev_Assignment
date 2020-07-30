<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
  
// include database and object files
include_once '../config/core.php';
include_once '../shared/utilities.php';
include_once '../config/database.php';
include_once '../objects/earringpost.php';
  
// utilities
$utilities = new Utilities();
  
// instantiate database and earring post object
$database = new Database();
$db = $database->getConnection();
  
// initialize object
$earringpost = new Earringpost($db);
  
// query posts
$stmt = $earringpost->commentsPaging($from_record_num, $records_per_page);
$num = $stmt->rowCount();
  
// check if more than 0 record found
if($num>0){
  
    // earring post array
    $earringpost_arr=array();
    $earringpost_arr["records"]=array();
    $earringpost_arr["comments_paging"]=array();
  
    // retrieve our table contents
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        // extract row
        extract($row);
  
        $earringpost_item=array(
            "id" => $id,
            "name" => $name,
            "text" => html_entity_decode($text),
            "post_date" => $post_date,
            "likes" => $likes,
            "reply_to" => $reply_to
        );
  
        array_push($earringpost_arr["records"], $earringpost_item);
    }
  
  
    // include paging
    $total_rows=$earringpost->countComments();
    $page_url="{$home_url}post/comments_paging.php?";
    $paging=$utilities->commentsPaging($page, $total_rows, $records_per_page, $page_url);
    $earringpost_arr["comments_paging"]=$paging;
  
    // set response code - 200 OK
    http_response_code(200);
  
    // make it json format
    echo json_encode($earringpost_arr);
}
  
else{
  
    // set response code - 404 Not found
    http_response_code(404);
  
    // tell the user post does not exist
    echo json_encode(
        array("message" => "No posts found.")
    );
}
?>