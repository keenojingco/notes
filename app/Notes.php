<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Notes extends Model
{
    protected $fillable = ['user_id', 'title', 'note'];

    public function __construct()
    {
        $this->middleware('auth');
    }
}
