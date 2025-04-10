import Navbar from "@/Components/Navbar";
import { Head, Link, useForm } from "@inertiajs/react";

export default function ReservationConfirmation({ reservation, room }) {
    const { put } = useForm();
    const Checked = (reservationId) => {
        put(route("reservations.check", reservationId));
    };
    return (
        <>
        <Navbar></Navbar>
            <Head title="Confirmation de réservation" />
            <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md text-center">
                    <h1 className="text-2xl font-bold text-[#870303] mb-6">Réservation confirmée !</h1>

                    <div className="text-left mb-6">
                        <h2 className="text-xl font-semibold text-[#870303] mb-2">Détails de la réservation :</h2>
                        <p className="text-gray-700">
                            <strong>Chambre :</strong> {room.number}
                        </p>
                        <p className="text-gray-700">
                            <strong>Nom du client :</strong> {reservation.guest_name}
                        </p>
                        <p className="text-gray-700">
                            <strong>Email :</strong> {reservation.guest_email}
                        </p>
                        <p className="text-gray-700">
                            <strong>Date d'arrivée :</strong> {new Date(reservation.check_in_date).toLocaleDateString()}
                        </p>
                        <p className="text-gray-700">
                            <strong>Date de départ :</strong> {new Date(reservation.check_out_date).toLocaleDateString()}
                        </p>
                        <p className="text-gray-700">
                            <strong>Paiement :</strong> {reservation.payement ? "Confirmé" : "En attente"}
                        </p>
                    </div>

                    <button onClick={()=>Checked(reservation.id)}
                        className="w-full bg-[#870303] text-white px-4 py-2 rounded-lg hover:bg-[#ad0000] transition-colors"
                    >
                        Retourner à l'accueil
                    </button>
                </div>
            </div>
        </>
    );
}