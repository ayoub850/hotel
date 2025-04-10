<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::updateOrCreate(
            ['email' => 'admin@example.com'],
            [
                'name' => 'Administrateur',
                'email' => 'ayoubboutarefa2006@gmail.com',
                'password' => Hash::make('ayoubboutarefa2006@gmail.com'), 
                'is_admin' => true, 
            ]
        );

        $this->command->info('Utilisateur administrateur créé avec succès.');
}
    }

