
<?php    
    $query = require ('connect.php'); //conexao banco
    $query ->update('cars', [
        'model' => $_POST['model'],
        'price' => $_POST['price']
    ]);
    echo "Hello";
   


 
 
       