import Navbar from "@/Components/Navbar";
import { motion } from "framer-motion";

export default function ListReservation({ Reservation,isAdmin }) {
    // Animation pour les cartes de réservation
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <>
            <Navbar isAdmin={isAdmin}/>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="min-h-screen bg-gradient-to-b from-[#f9f9f9] to-[#eaeaea] p-8"
            >
                <motion.h1
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="text-3xl font-bold text-[#870303] mb-8"
                >
                    Liste des réservations
                </motion.h1>

                <div className="space-y-6">
                    {Reservation.map((reservation, index) => (
                        <motion.div
                            key={reservation.id}
                            variants={cardVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            className="bg-white p-6 rounded-xl shadow-lg"
                        >
                            <h2 className="text-xl font-bold text-[#870303] mb-2">
                                Réservation de {reservation.guest_name}
                            </h2>
                            <p className="text-gray-700 mb-2">
                                <strong>Chambre :</strong> {reservation.room.number}
                            </p>
                            <p className="text-gray-700 mb-2">
                                <strong>Arrivée :</strong>{" "}
                                {new Date(reservation.check_in_date).toLocaleDateString()}
                            </p>
                            <p className="text-gray-700 mb-2">
                                <strong>Départ :</strong>{" "}
                                {new Date(reservation.check_out_date).toLocaleDateString()}
                            </p>
                            <p className="text-gray-700">
                                <strong>Statut :</strong>{" "}
                                <span
                                    className={`font-semibold ${
                                        reservation.room.is_available ? "text-red-600" : "text-green-600"
                                    }`}
                                >
                                    {reservation.room.is_available ? "En attend" : "Payée"}
                                </span>
                            </p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </>
    );
}