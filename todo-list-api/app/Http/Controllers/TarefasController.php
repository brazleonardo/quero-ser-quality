<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

use App\Tarefas;

class TarefasController extends Controller
{
	public function __construct()
	{
        $this->middleware('auth', ['except' => ['index', 'show', 'store', 'create', 'update', 'edit', 'destroy']]);
	}

    public function index()
    {
        $tarefas = Tarefas::orderBy('created_at', 'desc')->get();
        return response()->json($tarefas);
    }

    public function show($id)
    {
        $tarefas = Tarefas::find($id);

        if(!$tarefas) {
            return response()->json([
                'message'   => 'Registro não encontrado',
            ], 404);
        }

        return response()->json($tarefas);
    }

    public function store(Request $request)
    {
        $tarefas = new Tarefas();
        $tarefas->fill($request->all());
        $tarefas->save();

        return response()->json($tarefas, 201);
    }

    public function update(Request $request, $id)
    {
        $tarefas = Tarefas::find($id);

        if(!$tarefas) {
            return response()->json([
                'message'   => 'Registro não encontrado',
            ], 404);
        }

        $tarefas->fill($request->all());
        $tarefas->save();

        return response()->json($tarefas);
    }

    public function destroy($id)
    {
        $tarefas = Tarefas::find($id);

        if(!$tarefas) {
            return response()->json([
                'message'   => 'Registro não encontrado',
            ], 404);
        }

        $tarefas->delete();
        return response()->json(array('message' => 'Tarefa removida com sucesso'));
    }
}
