<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
  
// get database connection
include_once '../config/database.php';
  
// instantiate earring post object
include_once '../objects/earringpost.php';
  
$database = new Database();
$db = $database->getConnection();
  
$earringpost = new Earringpost($db);
  
// get posted data
$data = json_decode(file_get_contents("php://input"));
  
// make sure data is not empty
if(
    !empty($data->name) &&
    !empty($data->text) 
){
  
    // set earring post property values
    $earringpost->name = $data->name;
    $earringpost->text = $data->text;
    $earringpost->post_date = date('Y-m-d H:i:s');
	$earringpost->reply_to = $data->reply_to;
  
    // create the earring post
    if($earringpost->create()){
  
        // set response code - 201 created
        http_response_code(201);
  
        // tell the user
        echo json_encode(array("message" => "Earring post was created."));
    }
  
    // if unable to create the earringpost, tell the user
    else{
  
        // set response code - 503 service unavailable
        http_response_code(503);
  
        // tell the user
        echo json_encode(array("message" => "Unable to create earring post."));
    }
}
  
// tell the user data is incomplete
else{
  
    // set response code - 400 bad request
    http_response_code(400);
  
    // tell the user
    echo json_encode(array("message" => "Unable to create earring post. Data is incomplete."));
}
?>