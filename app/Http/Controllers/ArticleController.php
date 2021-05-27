<?php
 
namespace App\Http\Controllers;
 
use Illuminate\Http\Request;
 
class ArticleController extends Controller
{
    public function index()
    {
        $articles = \App\Article::all();
 
        return $articles->toJson();
    }
 
    public function store(Request $request)
    {
        $validatedData = $request->validate([
          'judul' => 'required',
          'genre' => 'required',
          'tahun' => 'required',
          'score' => 'required',
          'deskripsi' => 'required',
        ]);
 
        $project = \App\Article::create([
          'judul' => $validatedData['judul'],
          'genre' => $validatedData['genre'],
          'tahun' => $validatedData['tahun'],
          'score' => $validatedData['score'],
          'deskripsi' => $validatedData['deskripsi'],
        ]);
 
        $msg = [
            'success' => true,
            'message' => 'Article created successfully!'
        ];
 
        return response()->json($msg);
    }
 
    public function getArticle($id) // for edit and show
    {
        $article = \App\Article::find($id);
 
        return $article->toJson();
    }
 
    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            'judul' => 'required',
            'genre' => 'required',
            'tahun' => 'required',
            'score' => 'required',
            'deskripsi' => 'required',
        ]);
 
        $article = \App\Article::find($id);
        $article->judul = $validatedData['judul'];
        $article->genre = $validatedData['genre'];
        $article->tahun = $validatedData['tahun'];
        $article->score = $validatedData['score'];
        $article->deskripsi = $validatedData['deskripsi'];

        $article->save();
 
        $msg = [
            'success' => true,
            'message' => 'Article updated successfully'
        ];
 
        return response()->json($msg);
    }
 
    public function delete($id)
    {
        $article = \App\Article::find($id);
        if(!empty($article)){
            $article->delete();
            $msg = [
                'success' => true,
                'message' => 'Article deleted successfully!'
            ];
            return response()->json($msg);
        } else {
            $msg = [
                'success' => false,
                'message' => 'Article deleted failed!'
            ];
            return response()->json($msg);
        }
    }
}