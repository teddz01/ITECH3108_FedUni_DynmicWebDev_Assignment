<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
  
// include database and object files
include_once '../config/core.php';
include_once '../config/database.php';
include_once '../objects/earringpost.php';
  
// instantiate database and earring post object
$database = new Database();
$db = $database->getConnection();
  
// initialize object
$earringpost = new Earringpost($db);
  
// get keywords
$keywords=isset($_GET["s"]) ? $_GET["s"] : "";
  
// query earring post
$stmt = $earringpost->search($keywords);
$num = $stmt->rowCount();
  
// check if more than 0 record found
if($num>0){
  
    // earring post array
    $earringpost_arr=array();
    $earringpost_arr["records"]=array();

    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        // extract row
        extract($row);
  
        $earringpost_item=array(
            "id" => $id,
            "name" => $name,
            "text" => html_entity_decode($text),
            "likes" => $likes,
            "reply_to" => $reply_to,
            "post_date" => $post_date
        );
  
        array_push($earringpost_arr["records"], $earringpost_item);
    }
  
    // set response code - 200 OK
    http_response_code(200);
  
    // show earring post data
    echo json_encode($earringpost_arr);
}
  
else{
    // set response code - 404 Not found
    http_response_code(404);
  
    // tell the user no products found
    echo json_encode(
        array("message" => "No earring post found.")
    );
}
?>