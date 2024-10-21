<?php

namespace App\Http\Controllers;

use App\Services\UserService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class UserController extends Controller
{
    public function getLogin(): Response
    {
        return response()->view('user.child-login');
    }

    public function postLogin(Request $request): RedirectResponse|Response
    {
        $email = $request->post('email');
        $password = $request->post('password');

        $userService = new UserService;

        if ($userService->login($email, $password)) {
            $request->session()->put('name', 'Ardi Putra');
            $request->session()->put('image', 'gif.gif');

            return redirect()->action([HomeController::class, 'getHome']);
        } else {
            return response()->view('user.child-login', [
                'error' => true,
                'pesan' => 'Email atau password salah!',
                'oldEmail' => $email,
                'is_invalid' => 'is-invalid'
            ]);
        }
    }
}
