<?php

namespace Database\Seeders;

use App\Models\AvailableUsers;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AvailableUsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = [
            [
                'nik' => '2005008378',
                'name' => 'DHANIEL WHARDANA'
            ],
            [
                'nik' => '2010025220',
                'name' => 'MUHAMAD JANUAR'
            ],
            [
                'nik' => '2012090122',
                'name' => 'RIAN FAUZAL MUTAQIN'
            ],
            [
                'nik' => '2013168060',
                'name' => 'ROFI VOLIYANTRI'
            ],
            [
                'nik' => '2013190599',
                'name' => 'RAKI FATURAHMAN'
            ],
            [
                'nik' => '2013232591',
                'name' => 'DENI SETIAWAN'
            ],
            [
                'nik' => '2015033228',
                'name' => 'RUDI SETIAWAN'
            ],
            [
                'nik' => '2015113583',
                'name' => 'SURIYANSYAH ALBANZARI'
            ],
            [
                'nik' => '2015160509',
                'name' => 'PAHRUROJI'
            ],
            [
                'nik' => '2015171331',
                'name' => 'ARDIANSYAH PUTRA'
            ],
            [
                'nik' => '2015172780',
                'name' => 'EKO FAUZI'
            ],
            [
                'nik' => '2015208489',
                'name' => 'ACENG ABDUL FATAH'
            ],
            [
                'nik' => '2015219149',
                'name' => 'ALFI NURFIKRI'
            ],
            [
                'nik' => '2015331079',
                'name' => 'IRWANA'
            ],
            [
                'nik' => '2015344149',
                'name' => 'MUHAMAD SUBUR RIZKI'
            ],
            [
                'nik' => '2015383232',
                'name' => 'RAMIN'
            ],
            [
                'nik' => '2015398488',
                'name' => 'RIFKI DARMAWAN'
            ],
            [
                'nik' => '2015404776',
                'name' => 'AMAR MARUF N M'
            ],
            [
                'nik' => '2015415312',
                'name' => 'FAHRU ROZI'
            ],
            [
                'nik' => '2015446357',
                'name' => 'DANU RAIHAN'
            ],
            [
                'nik' => '2015446458',
                'name' => 'FIKRI ABIMANYU'
            ],
            [
                'nik' => '2015484747',
                'name' => 'GALIH PATMA'
            ],
            [
                'nik' => '2015484774',
                'name' => 'MUHAMAD RIFKI'
            ]
        ];

        foreach ($users as $user) {
            AvailableUsers::create($user);
        }
    }
}
