<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Credentials: true");
header('Content-Type: application/json');
  
// include database and object files
include_once '../config/database.php';
include_once '../objects/earringpost.php';
  
// get database connection
$database = new Database();
$db = $database->getConnection();
  
// prepare earring post object
$earringpost = new Earringpost($db);
  
// set ID property of record to read
$earringpost->id = isset($_GET['id']) ? $_GET['id'] : die();
  
// read the details of earring post to be edited
$earringpost->readOne();
  
if($earringpost->name!=null){
    // create array
    $earringpost_arr = array(
        "id" =>  $earringpost->id,
        "name" => $earringpost->name,
        "text" => $earringpost->text,
        "post_date" => $earringpost->post_date,
        "likes" => $earringpost->likes,
        "reply_to" => $earringpost->reply_to
  
    );
  
    // set response code - 200 OK
    http_response_code(200);
  
    // make it json format
    echo json_encode($earringpost_arr);
}
  
else{
    // set response code - 404 Not found
    http_response_code(404);
  
    // tell the user earring post does not exist
    echo json_encode(array("message" => "Earring post does not exist."));
}
?>