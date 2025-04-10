import Navbar from "@/Components/Navbar";
import { Link, usePage } from "@inertiajs/react";

export default function ChambreDetail({isAdmin}) {
    // Récupérer les données de la chambre passées en props
    const { room } = usePage().props;

    return (
        <>
            <Navbar isAdmin={isAdmin}/>
            <div className="p-8 bg-gray-100 min-h-screen">
                <div className="max-w-6xl mx-auto">
                    {/* Titre de la page */}
                    <h1 className="text-3xl font-bold text-[#870303] mb-8">Détails de la chambre {room.number}</h1>

                    {/* Grille pour les images et les détails */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Section des images */}
                        <div className="grid grid-cols-2 gap-4">
                            {[room.photo1, room.photo2, room.photo3, room.photo4].map(
                                (photo, index) =>
                                    photo && (
                                        <div key={index} className="h-48 overflow-hidden rounded-lg shadow-lg">
                                            <img
                                                src={`/storage/${photo}`}
                                                alt={`Chambre ${room.number} - Image ${index + 1}`}
                                                className="w-full h-full object-cover"
                                                onError={(e) => {
                                                    e.target.src = "https://via.placeholder.com/300";
                                                }}
                                            />
                                        </div>
                                    )
                            )}
                        </div>

                        {/* Section des détails */}
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-bold text-[#870303] mb-4">Informations de la chambre</h2>
                            <div className="space-y-4">
                                <p>
                                    <span className="font-semibold">Numéro :</span> {room.number}
                                </p>
                                <p>
                                    <span className="font-semibold">Capacité :</span> {room.capacity} personnes
                                </p>
                                <p>
                                    <span className="font-semibold">Prix :</span> {room.price} € / nuit
                                </p>
                                <p>
                                    <span className="font-semibold">Dimensions :</span> {room.length}m x {room.width}m
                                </p>
                                <p>
                                    <span className="font-semibold">Disponibilité :</span>{" "}
                                    {room.is_available ? (
                                        <span className="text-green-600">Disponible</span>
                                    ) : (
                                        <span className="text-red-600">Indisponible</span>
                                    )}
                                </p>
                                <p>
                                    <span className="font-semibold">Description :</span> {room.description}
                                </p>
                            </div>

                            {/* Bouton de réservation */}
                            <div className="mt-6">
                                <Link href={route('reservation.create',{room_id:room.id})}
                                    className={`w-full block text-center ${
                                        room.is_available
                                            ? "bg-[#870303] text-white hover:bg-[#ad0000]"
                                            : "bg-gray-400 text-gray-700 cursor-not-allowed"
                                    } px-4 py-2 rounded-lg transition-all duration-300`}
                                >
                                    {room.is_available ? "Réserver maintenant" : "Indisponible"}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}