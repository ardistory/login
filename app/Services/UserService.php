<?php

namespace App\Services;

class UserService
{
    public function login(string $email, string $password): bool
    {
        $user = [
            'ardistory@gmail.com' => 'rahasia123'
        ];

        if (!isset($user[$email])) {
            return false;
        }

        $correctPassword = $user[$email];

        return $correctPassword == $password;
    }
}