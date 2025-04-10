<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AdminLoginController extends Controller
{
    public function login(Request $request){
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if (Auth::attempt($request->only('email', 'password'), $request->boolean('remember'))) {
            if (Auth::user()->is_admin) {
                return redirect()->route('Home')->with(['isAdmin' => true]);
            }

            Auth::logout();
            return back()->withErrors(['email' => 'Non autorisé en tant qu\'administrateur']);
        }

        return back()->withErrors(['email' => 'Identifiants incorrects']);
    }
}
