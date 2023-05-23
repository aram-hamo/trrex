<?php declare(strict_types=1);
namespace AramHamo\Mvc\Controllers;
use AramHamo\MvcCore\View;

class Calc{
  public function get(){
    return View::render("calc",array("title"=>"calc"));
  }
  public function post(){
  }
  public function update(){
  }
  public function delete(){
  }
}