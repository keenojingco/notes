<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
         DB::table('users')->insert([
            'name' => 'Enrique Jingco',
            'email' => 'enrique@app.com',
            'password' => bcrypt('secret'),
        ]);

        DB::table('users')->insert([
            'name' => 'Bruce Wayne',
            'email' => 'batman@app.com',
            'password' => bcrypt('secret'),
        ]);

        DB::table('users')->insert([
            'name' => 'Clark Kent',
            'email' => 'superman@app.com',
            'password' => bcrypt('secret'),
        ]);
    }
}
