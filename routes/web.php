<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\RoomsController;
use App\Http\Controllers\RecervationController;
use App\Http\Controllers\AdminLoginController;
use App\Http\Middleware\AdminMiddleware;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//Route::get('/', function () {
  //  return Inertia::render('Home',['isAdmin' => auth()->check() && auth()->user()->is_admin]);
//})->name('Home');

Route::get("/",[RoomsController::class,'featuredRooms'])->name('Home');

Route::get('/Room', [RoomsController::class, 'index'])->name('rooms.index');

Route::post('/rooms', [RoomsController::class, 'store'])->name('rooms.store');

Route::get('/Decouvrir', [RoomsController::class, 'Decouvrir'])->name('rooms.Decouvrir');
   
Route::get('/room/{id}', [RoomsController::class, 'RoomDetail'])->name('rooms.Detail');

Route::get('/recervation/create/{room_id}', [RecervationController::class, 'create'])->name('reservation.create');

Route::post('/Recervation', [RecervationController::class, 'store'])->name('recervation.store');

Route::get('/reservation/{reservation}/payment',[RecervationController::class, 'showPayement'])->name('reservation.payement');

Route::put('/reservation/{reservation}', [RecervationController::class, 'updatePayement'])->name('reservation.update');

Route::get('/reservation/{reservation}/confirmation', [RecervationController::class, 'showConfirmation'])->name('reservation.confirmation');

Route::get('/List',[RecervationController::class,'List'])->Middleware('admin');

Route::put('/reservations/{reservation}/check', [RecervationController::class, 'check'])->name('reservations.check');

Route::get('/login-admin', fn() => Inertia::render('loginAdmin'))->name('login-admin');

Route::post('/login-admin',[AdminLoginController::class,'login']);

Route::post('/logout', function () {
    auth()->logout();
    return redirect('/');
})->name('logout');


Route::middleware(['admin'])->group(function () {

    // ghat ktb hna les routes li baghi tprotegi
    Route::get('/List',[RecervationController::class,'List']);
    });

Route::get('/deleteroom/{id}',[RoomsController::class,'del'])->name('room.del');

Route::patch('/rooms/{room}/toggle-availability', [RoomsController::class, 'toggleAvailability'])->name('rooms.toggle-availability');
require __DIR__.'/auth.php';
