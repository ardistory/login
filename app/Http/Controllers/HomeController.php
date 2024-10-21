<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Session;

class HomeController extends Controller
{
    public function getHome(): Response
    {
        return response()->view('home.template');
    }

    public function postLogout()
    {
        Session::forget('name');

        return redirect()->action([UserController::class, 'getLogin']);
    }
}
