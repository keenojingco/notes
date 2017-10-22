<?php

namespace App\Http\Controllers;

use App\Comment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CommentController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index()
    {
        return Comment::with('user')->orderBy('created_at','desc')->get();
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'comment'      => 'required'
        ]);

        $comment = Comment::create([
            'comment'   => request('comment'),
            'user_id'   => Auth::user()->id,
            'note_id'   => request('note_id')
        ]);

        $comment = Comment::with('user')->find($comment->id);

        return response()->json([
            'note'      => $comment,
            'message'   => 'Success'
        ], 200);
    }

    public function getComments($id)
    {
        return response()->json([
            'comments'      => Comment::where('note_id', $id)->with('user')->orderBy('created_at','desc')->get(),
            'message'   => 'Success'
        ], 200);
    }
}
