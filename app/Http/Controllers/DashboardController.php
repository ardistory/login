<?php

namespace App\Http\Controllers;

use App\Models\TokoLbk;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function create()
    {
        $tokoLbk = TokoLbk::all();

        return Inertia::render('Dashboard', [
            'tokoLbk' => $tokoLbk
        ]);
    }
}
