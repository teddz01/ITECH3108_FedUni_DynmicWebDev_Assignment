<?php
// required headers
header( "Access-Control-Allow-Origin: *" );
header( "Content-Type: application/json; charset=UTF-8" );
header( "Access-Control-Allow-Methods: POST" );
header( "Access-Control-Max-Age: 3600" );
header( "Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With" );

// include database and object files
include_once '../config/database.php';
include_once '../objects/earringpost.php';

// get database connection
$database = new Database();
$db = $database->getConnection();

// prepare earring post object
$earringpost = new Earringpost( $db );

// get id of post to be edited
$data = json_decode( file_get_contents( "php://input" ) );

// set ID property of earring post to be edited
$earringpost->id = $data->id;

// set post property values
$earringpost->likes = $data->likes;

// update the post
if ( $earringpost->likeUnlike() ) {

  // set response code - 200 ok
  http_response_code( 200 );

  // tell the user
  echo json_encode( array( "message" => "Earring post like was updated." ) );
}

// if unable to update the post, tell the user
else {

  // set response code - 503 service unavailable
  http_response_code( 503 );

  // tell the user
  echo json_encode( array( "message" => "Unable to like post." ) );
}
?>