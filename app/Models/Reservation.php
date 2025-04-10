<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Reservation extends Model
{
    protected $fillable = [
        'room_id', 'guest_name', 'guest_email', 'check_in_date', 'check_out_date', 'payement'
    ];

    protected static function booted()
    {
        // Lorsqu'une réservation est créée ou mise à jour
        static::saved(function ($reservation) {
            if ($reservation->payement) {
                // Mettre à jour la disponibilité de la chambre
                $room = $reservation->room;
                $room->is_available = false; // La chambre n'est plus disponible
                $room->save();
            }
        });

        // Lorsqu'une réservation est supprimée
        static::deleted(function ($reservation) {
            $room = $reservation->room;
            $room->is_available = true; // La chambre redevient disponible
            $room->save();
        });
    }

    public function room()
    {
        return $this->belongsTo(Room::class);
}
}
