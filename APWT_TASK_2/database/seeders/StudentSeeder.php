<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class StudentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        \App\Models\Student::factory()->create([
            'name' => 'Student1',
            'phone' => '0123',
            'email' => 'teacher@email.com',
            'password' => '1234',
        ]);
    }
}
