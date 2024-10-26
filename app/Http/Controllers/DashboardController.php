<?php

namespace App\Http\Controllers;

use App\Models\TokoLbk;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function create()
    {
        $tokoLbk = TokoLbk::query()->join('available_users', 'tokolbk.area', '=', 'available_users.name')->select('tokolbk.*', 'available_users.nik')->inRandomOrder()->get();

        return Inertia::render('Dashboard/Dashboard', [
            'tokoLbk' => $tokoLbk
        ]);
    }
}
