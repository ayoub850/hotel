<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Room;
use App\Models\Reservation;
use Inertia\Inertia;

class RecervationController extends Controller
{
    public function create($room_id){
        $ayoub = Room::findOrFail($room_id);
        return inertia('ReservationForm',['room'=>$ayoub]);
    }
    public function store(Request $request)
{
    $request->validate([
        'room_id' => 'required|exists:rooms,id',
        'guest_name' => 'required',
        'guest_email' => 'required|email',
        'check_in_date' => 'required|date',
        'check_out_date' => 'required|date|after:check_in_date',
    ]);

    $room = Room::find($request->room_id);

    if (!$room->is_available) {
        return redirect()->back()->withErrors(['room_id' => 'La chambre n\'est pas disponible.']);
    }

    $Reservation=Reservation::create($request->all());

    return redirect()->route('reservation.payement',$Reservation->id);
}
    public function showPayement(Reservation $Reservation)
    {
        return inertia('PayementForm', [
            'reservation' => $Reservation,
        ]);
    }
    public function updatePayement(Request $request,Reservation $Reservation){
        $request->validate([
            'payement'=>'required|boolean',
        ]);
        $Reservation->update(['payement' => $request->payement]);
        return redirect()->route('reservation.confirmation', $Reservation->id)->with('success', 'nadi canadi');
    }
    public function showConfirmation(Reservation $reservation)
    {
    return inertia('ReservationConfirmation', [
        'reservation' => $reservation,
        'room' => $reservation->room,
    ]);}
    public function List(){
        $Reservation = Reservation::orderBy('id', 'desc')->with('room')->get();
        return Inertia::render('ListReservation',['Reservation'=>$Reservation,'isAdmin' => auth()->check() && auth()->user()->is_admin]);
    }
    public function check(Reservation $Reservation){
       // $Reservation ->room->update(['is_available'=>False]);
        return redirect()->route('Home');
    }
    }

