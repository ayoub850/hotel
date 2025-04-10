<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Room;
use Inertia\Inertia;

class RoomsController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'number' => 'required|string|unique:rooms,number',
            'capacity' => 'required|integer',
            'price' => 'required|numeric',
            'length' => 'required|numeric',
            'width' => 'required|numeric',
            'description' => 'nullable|string',
            'is_available' => 'boolean',
            'photo1' => 'nullable|image|max:2048',
            'photo2' => 'nullable|image|max:2048',
            'photo3' => 'nullable|image|max:2048',
            'photo4' => 'nullable|image|max:2048',
        ]);

        if ($request->hasFile('photo1')) {
            $validated['photo1'] = $request->file('photo1')->store('rooms', 'public');
        }
        if ($request->hasFile('photo2')) {
            $validated['photo2'] = $request->file('photo2')->store('rooms', 'public');
        }
        if ($request->hasFile('photo3')) {
            $validated['photo3'] = $request->file('photo3')->store('rooms', 'public');
        }
        if ($request->hasFile('photo4')) {
            $validated['photo4'] = $request->file('photo4')->store('rooms', 'public');
        }

        Room::create($validated);

        return redirect()->back()->with('success','dazt');
}
        public function index(){
            $rooms = Room::all();
            return Inertia::render('Rooms',['rooms'=>$rooms,'isAdmin' => auth()->check() && auth()->user()->is_admin]);
        }
        public function featuredRooms()
    {
        // Récupérer 4 chambres aléatoires
        $featuredRooms = Room::inRandomOrder()->limit(4)->get();

        return Inertia::render('Home', [
            'featuredRooms' => $featuredRooms,'isAdmin'=>auth()->check() && auth()->user()->is_admin]);
}
        public function Decouvrir(){
            $rooms = Room::all();
            return Inertia::render('Decouvrir',['rooms'=>$rooms,'isAdmin' => auth()->check() && auth()->user()->is_admin]);
        }
        public function RoomDetail($id){
            $room = Room::findOrFail($id);
            return Inertia::render('RoomDetail',['room'=>$room,'isAdmin' => auth()->check() && auth()->user()->is_admin]);
        }
        public function del($id){
            $room=Room::findOrFail($id);
            $room->delete();
        }
        public function toggleAvailability(Room $room, Request $request)
    {
        // Inverse l'état de is_available
        $room->is_available = !$room->is_available;
        $room->save();

     {/* return response()->json([
            'success' => true,
     'is_available' => $room->is_available,
]);*/}
    
}
}
