<?php
class QueryBuilder
{
  protected $bd;

  public function __construct($bd)
  {
    $this->bd = $bd;
  }

  public function selectAll($table)
  {
    $statement = $this->bd->prepare("select * from {$table}");
    $statement->execute();
    return  $statement->fetchAll(PDO::FETCH_CLASS);
  }
  public function insert($table, $parameters)
  {
    $sql = sprintf(
      'insert into %s (%s) values (%s)',
      $table,
      implode(', ', array_keys($parameters)),
      ':' . implode(', :', array_keys($parameters))
    );

    try {
      // print_r($sql);
      $statement = $this->bd->prepare($sql);

      $statement->execute($parameters);
    } catch (Exception $e) {
      throw new Exception($e->getMessage());
    }
  }

  public function selectCarById($table, $model)
  {
    $statement = $this->bd->prepare("select * from {$table} where model = '{$model}'");
    // print_r($statement);
    try {
      $statement->execute();
      return  $statement->fetchAll(PDO::FETCH_CLASS);
    } catch (Exception $e) {
      throw new Exception($e->getMessage());
    }
  }

  public function delete($table, $model){
    $statement = $this -> bd -> prepare("delete from {$table} where model = '{$model}' limit 1");
    print_r($statement);
    try{
        $statement -> execute();
    }
    catch(Exception $e){
        throw new Exception($e->getMessage());
    }
  }
  public function update($table, $parameters ){
    $statement = $this -> bd -> prepare("update {$table}  set price = '{$parameters['price']}', model = '{$parameters['model']}' where id = '{$parameters['id']}'");
    //print_r($statement);
    try{
        $statement -> execute();
    }
    catch(Exception $e){
        throw new Exception($e->getMessage());
    }
  }
}
