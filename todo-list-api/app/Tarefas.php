<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tarefas extends Model
{
    protected $fillable = ['titulo','descricao','status'];
    protected $guarded = ['id', 'created_at', 'updated_at'];
    protected $table = 'tarefas';
}
