import Navbar from "@/Components/Navbar";
import { Link, router } from "@inertiajs/react";
import { motion } from "framer-motion";

export default function Decouvrir({ rooms,isAdmin }) {
    // Fonction pour changer l'état de disponibilité
    const handleAvailabilityChange = (roomId, isAvailable) => {
        router.patch(`/rooms/${roomId}/toggle-availability`, {
            is_available: !isAvailable, // Inverse l'état actuel
        });
    };

    return (
        <>
            <Navbar isAdmin={isAdmin}/>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="p-8 min-h-screen bg-gradient-to-b from-[#f9f9f9] to-[#eaeaea]"
            >
                {/* Titre */}
                <motion.h1
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="text-4xl font-bold text-[#870303] text-center mb-12"
                >
                    Découvrez nos chambres
                </motion.h1>

                {/* Grille des chambres */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                >
                    {rooms.map((room, index) => (
                        <motion.div
                            key={room.id}
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
                            className={`bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 ${
                                !room.is_available ? "opacity-50 grayscale" : "hover:scale-105 hover:shadow-2xl"
                            }`}
                        >
                            {/* Image de la chambre */}
                            <div className="h-56 overflow-hidden">
                                <img
                                    src={room.photo1 ? `/storage/${room.photo1}` : "https://via.placeholder.com/400"}
                                    alt={`Chambre ${room.number}`}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        e.target.src = "https://via.placeholder.com/400"; // Image de remplacement
                                    }}
                                />
                            </div>

                            {/* Contenu de la carte */}
                            <div className="p-6">
                                <h2 className="text-2xl font-bold text-[#870303] mb-2">Chambre {room.number}</h2>
                                <p className="text-lg text-gray-700 font-semibold mb-4">{room.price} € / nuit</p>
                                <p className="text-gray-600 mb-6">
                                    {room.description.length > 100
                                        ? `${room.description.substring(0, 100)}...`
                                        : room.description}
                                </p>

                                {/* Checkbox pour changer la disponibilité */}
                                {isAdmin && (<label className="flex items-center space-x-2">
                                    <input
                                        type="checkbox"
                                        checked={room.is_available}
                                        onChange={() => handleAvailabilityChange(room.id, room.is_available)}
                                        className="form-checkbox h-5 w-5 text-[#870303]"
                                    />
                                    <span className="text-gray-700">Disponible</span>
                                </label>)}
                                <Link href={`room/${room.id}`} className="mt-4 inline-block px-4 py-2 w-full text-center bg-red-700 text-gray-900 font-bold uppercase text-xs">Detail</Link>
                                <Link href={`deleteroom/${room.id}`} className="mt-4 inline-block px-4 py-2 w-full text-center bg-red-700 text-gray-900 font-bold uppercase text-xs">Delete</Link>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </>
    );
}
