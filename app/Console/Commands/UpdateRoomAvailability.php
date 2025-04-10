<?php 
namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Reservation;
use Carbon\Carbon;

class UpdateRoomAvailability extends Command
{
    protected $signature = 'rooms:update-availability';
    protected $description = 'Update room availability based on check_out dates';

    public function handle()
    {
        // Récupérer les réservations dont la date de check_out est passée
        $reservations = Reservation::where('check_out_date', '<=', Carbon::now())
            ->where('payement', true)
            ->get();

        foreach ($reservations as $reservation) {
            $room = $reservation->room;
            $room->is_available = true; // La chambre redevient disponible
            $room->save();
        }

        $this->info('Room availability updated successfully.');
}
}

