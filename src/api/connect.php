<?php
  $config = require("config.php");
  $table =  $config['database']['table'];
  require("query.php");

    class Conexao {

        public static function make($config) {
            try {
                return new PDO(
                    $config['conection'].';dbname='.$config['name'],
                    $config['username'],
                    $config['password'],
                    $config['options']
                );
            } catch(Exception $e) {
                throw new Exception($e->getMessage());
            }
        }
    }
    return new QueryBuilder(Conexao::make($config['database']));
