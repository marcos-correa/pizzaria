<?php



class Controller
{
    
    public string $action = '';

    /**
     * @var \thecodeholic\phpmvc\BaseMiddleware[]
     */
    protected array $middlewares = [];



    public function registerMiddleware(BaseMiddleware $middleware)
    {
        $this->middlewares[] = $middleware;
    }

    /**
     * @return \thecodeholic\phpmvc\middlewares\BaseMiddleware[]
     */
    public function getMiddlewares(): array
    {
        return $this->middlewares;
    }
}