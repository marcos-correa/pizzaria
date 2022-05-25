<?php


use Pecee\Http\Middleware\IMiddleware;
use Pecee\Http\Request as Requisicao;


class ApiVerification implements IMiddleware

{
    public Request $request;
    public Auth $auth;

    public function __construct()
        {
            
            $this -> requisicao = new Request();
            $this -> auth = new Auth();
           
        }

	public function handle(Requisicao $request):void
	{
		// Do authentication
        try{
            $token = $this -> requisicao -> dados -> token;


            if( !$this -> auth -> verificaTokenBody($token)){
                new Response(400, ['Sem acesso a esta rota ']);
                die;
            }
            
        }
        catch(Exception $e){
            new Response(400, ['Falha de rota -> ' . $e->getMessage()]);
            die;
        }

        
		
        
	}

}