<?php
class Earringpost {

  // database connection and table name
  private $conn;
  private $table_name = "earringpost";

  // object properties
  public $id;
  public $name;
  public $text;
  public $post_date;
  public $likes;
  public $reply_to;

  // constructor with $db as database connection
  public function __construct( $db ) {
    $this->conn = $db;
  }

  // READ POSTS
  function read() {

    // select all query
    $query = "SELECT * FROM " . $this->table_name;

    // prepare query statement
    $stmt = $this->conn->prepare( $query );

    // execute query
    $stmt->execute();

    return $stmt;
  }

  // CREATE POSTS
  function create() {

    // query to insert record
    $query = "INSERT INTO
                " . $this->table_name . "
            SET
                name=:name, text=:text, post_date=:post_date";

    // prepare query
    $stmt = $this->conn->prepare( $query );

    // sanitize
    $this->name = htmlspecialchars( strip_tags( $this->name ) );
    $this->text = htmlspecialchars( strip_tags( $this->text ) );
    $this->post_date = htmlspecialchars( strip_tags( $this->post_date ) );

    // bind values
    $stmt->bindParam( ":name", $this->name );
    $stmt->bindParam( ":text", $this->text );
    $stmt->bindParam( ":post_date", $this->post_date );

    // execute query
    if ( $stmt->execute() ) {
      return true;
    }

    return false;

  }

  // READ_ONE POST
  function readOne() {

    // query to read single record
    $query = "SELECT
                id, name, text, post_date, likes, reply_to
            FROM
                " . $this->table_name . " 
            WHERE
                id = ?
            LIMIT
                0,1";

    // prepare query statement
    $stmt = $this->conn->prepare( $query );

    // bind id of post to be updated
    $stmt->bindParam( 1, $this->id );

    // execute query
    $stmt->execute();

    // get retrieved row
    $row = $stmt->fetch( PDO::FETCH_ASSOC );

    // set values to object properties
    $this->name = $row[ 'name' ];
    $this->text = $row[ 'text' ];
    $this->post_date = $row[ 'post_date' ];
    $this->likes = $row[ 'likes' ];
    $this->reply_to = $row[ 'reply_to' ];
  }

  // UPDATE POSTS TEXT
  function update() {

    // update query
    $query = "UPDATE
                " . $this->table_name . "
            SET
                text = :text
            WHERE
                id = :id";

    // prepare query statement
    $stmt = $this->conn->prepare( $query );

    // sanitize
    $this->text = htmlspecialchars( strip_tags( $this->text ) );

    // bind new values
    $stmt->bindParam( ':text', $this->text );
    $stmt->bindParam( ':id', $this->id );

    // execute the query
    if ( $stmt->execute() ) {
      return true;
    }

    return false;
  }

  // DELETE POSTS
  function delete() {

    // delete query
    $query = "DELETE FROM " . $this->table_name . " 
				WHERE id = ?";

    // prepare query
    $stmt = $this->conn->prepare( $query );

    // sanitize
    $this->id = htmlspecialchars( strip_tags( $this->id ) );

    // bind id of record to delete
    $stmt->bindParam( 1, $this->id );

    // execute query
    if ( $stmt->execute() ) {
      return true;
    }

    return false;
  }

  // SEARCH POSTS
  function search( $keywords ) {

    // select all query
    $query = "SELECT * FROM " . $this->table_name . " WHERE
                name LIKE ? ORDER BY post_date DESC";

    // prepare query statement
    $stmt = $this->conn->prepare( $query );

    // sanitize
    $keywords = htmlspecialchars( strip_tags( $keywords ) );
    $keywords = "%{$keywords}%";

    // bind
    $stmt->bindParam( 1, $keywords );

    // execute query
    $stmt->execute();

    return $stmt;
  }

  // POSTS PAGINATION 
  public function readPaging( $from_record_num, $records_per_page ) {

    // select query
    $query = "SELECT
                id, name, text, post_date, likes, reply_to
            FROM
                " . $this->table_name . "
			WHERE reply_to IS NULL
            ORDER BY post_date DESC
            LIMIT ?, ?";

    // prepare query statement
    $stmt = $this->conn->prepare( $query );

    // bind variable values
    $stmt->bindParam( 1, $from_record_num, PDO::PARAM_INT );
    $stmt->bindParam( 2, $records_per_page, PDO::PARAM_INT );

    // execute query
    $stmt->execute();

    // return values from database
    return $stmt;
  }

  // PAGINATION COUNT FUNCTION
  public function count() {
    $query = "SELECT COUNT(CASE WHEN " . $this->table_name . ".reply_to IS NULL THEN 1 END) AS total_rows 
				FROM "
    . $this->table_name .
    " ";

    $stmt = $this->conn->prepare( $query );
    $stmt->execute();
    $row = $stmt->fetch( PDO::FETCH_ASSOC );

    return $row[ 'total_rows' ];
  }

  // COMMENTS
  function post_reply() {

    // query to insert record
    $query = "INSERT INTO
                " . $this->table_name . "
            SET
                name=:name, text=:text, post_date=:post_date, reply_to=:reply_to";

    // prepare query
    $stmt = $this->conn->prepare( $query );

    // sanitize
    $this->name = htmlspecialchars( strip_tags( $this->name ) );
    $this->text = htmlspecialchars( strip_tags( $this->text ) );
    $this->post_date = htmlspecialchars( strip_tags( $this->post_date ) );
    $this->reply_to = htmlspecialchars( strip_tags( $this->reply_to ) );

    // bind values
    $stmt->bindParam( ":name", $this->name );
    $stmt->bindParam( ":text", $this->text );
    $stmt->bindParam( ":post_date", $this->post_date );
    $stmt->bindParam( ":reply_to", $this->reply_to );

    // execute query
    if ( $stmt->execute() ) {
      return true;
    }

    return false;

  }

  // COMMENTS PAGINATION 
  public function commentsPaging( $from_record_num, $records_per_page ) {

    // select query
    $query = "SELECT
                id, name, text, post_date, likes, reply_to
            FROM
                " . $this->table_name . "
			WHERE reply_to IS NOT NULL
            ORDER BY post_date DESC
            LIMIT ?, ?";

    // prepare query statement
    $stmt = $this->conn->prepare( $query );

    // bind variable values
    $stmt->bindParam( 1, $from_record_num, PDO::PARAM_INT );
    $stmt->bindParam( 2, $records_per_page, PDO::PARAM_INT );

    // execute query
    $stmt->execute();

    // return values from database
    return $stmt;
  }

  // PAGINATION COUNT FUNCTION
  public function countComments() {
    $query = "SELECT COUNT(*) as total_comments_rows 
			  FROM "
      . $this->table_name .
    " WHERE reply_to IS NOT NULL";

    $stmt = $this->conn->prepare( $query );
    $stmt->execute();
    $row = $stmt->fetch( PDO::FETCH_ASSOC );

    return $row[ 'total_comments_rows' ];
  }

  // LIKE UNLIKE
  function likeUnlike() {

    // update query
    $query = "UPDATE
                " . $this->table_name . "
            SET
                likes = :likes
            WHERE
                id = :id";

    // prepare query statement
    $stmt = $this->conn->prepare( $query );

    // sanitize
    $this->text = htmlspecialchars( strip_tags( $this->text ) );

    // bind new values
    $stmt->bindParam( ':likes', $this->likes );
    $stmt->bindParam( ':id', $this->id );

    // execute the query
    if ( $stmt->execute() ) {
      return true;
    }

    return false;
  }
  // end of file
}
?>