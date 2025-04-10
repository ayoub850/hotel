import Navbar from "@/Components/Navbar";
import { useForm } from "@inertiajs/react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Rooms({ rooms, isAdmin }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        number: '',
        capacity: '',
        price: '',
        length: '',
        width: '',
        description: '',
        is_available: true,
        photo1: null,
        photo2: null,
        photo3: null,
        photo4: null,
    });

    const [showForm, setShowForm] = useState(false); // État pour afficher/masquer le formulaire

    const submit = (e) => {
        e.preventDefault();
        post(route('rooms.store'), { onSuccess: () => reset() });
    };

    return (
        <>
            <Navbar isAdmin={isAdmin}/>
            <div className="p-8 bg-gray-100 min-h-screen">
                {/* Bouton pour afficher le formulaire */}
                <button
                    onClick={() => setShowForm(!showForm)}
                    className="mb-6 bg-[#870303] text-white px-6 py-2 rounded-lg hover:bg-[#ad0000] transition-all duration-300"
                >
                    {showForm ? "Masquer le formulaire" : "Ajouter une chambre"}
                </button>

                {/* Formulaire avec animation */}
                <AnimatePresence>
                    {showForm && (
                        <motion.form
                            onSubmit={submit}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white p-6 rounded-lg shadow-lg mb-8"
                        >
                            <h2 className="text-2xl font-bold text-[#870303] mb-4">Ajouter une chambre</h2>
                            <div className="space-y-4">
                                <input
                                    type="number"
                                    value={data.number}
                                    onChange={(e) => setData('number', e.target.value)}
                                    placeholder="Numéro de la chambre"
                                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ad0000]"
                                />
                                <input
                                    type="number"
                                    value={data.capacity}
                                    onChange={(e) => setData('capacity', e.target.value)}
                                    placeholder="Capacité"
                                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ad0000]"
                                />
                                <input
                                    type="number"
                                    value={data.price}
                                    onChange={(e) => setData('price', e.target.value)}
                                    placeholder="Prix"
                                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ad0000]"
                                />
                                <input
                                    type="number"
                                    value={data.length}
                                    onChange={(e) => setData('length', e.target.value)}
                                    placeholder="Longueur"
                                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ad0000]"
                                />
                                <input
                                    type="number"
                                    value={data.width}
                                    onChange={(e) => setData('width', e.target.value)}
                                    placeholder="Largeur"
                                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ad0000]"
                                />
                                <textarea
                                    value={data.description}
                                    onChange={(e) => setData('description', e.target.value)}
                                    placeholder="Description"
                                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ad0000]"
                                />
                                <label className="flex items-center space-x-2">
                                    <input
                                        type="checkbox"
                                        checked={data.is_available}
                                        onChange={(e) => setData('is_available', e.target.checked)}
                                        className="form-checkbox h-5 w-5 text-[#870303]"
                                    />
                                    <span>Disponible</span>
                                </label>
                                <input
                                    type="file"
                                    onChange={(e) => setData('photo1', e.target.files[0])}
                                    className="w-full p-2 border rounded-lg"
                                />
                                <input
                                    type="file"
                                    onChange={(e) => setData('photo2', e.target.files[0])}
                                    className="w-full p-2 border rounded-lg"
                                />
                                <input
                                    type="file"
                                    onChange={(e) => setData('photo3', e.target.files[0])}
                                    className="w-full p-2 border rounded-lg"
                                />
                                <input
                                    type="file"
                                    onChange={(e) => setData('photo4', e.target.files[0])}
                                    className="w-full p-2 border rounded-lg"
                                />
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="w-full bg-[#870303] text-white px-6 py-2 rounded-lg hover:bg-[#ad0000] transition-all duration-300"
                                >
                                    {processing ? "En cours..." : "Confirmer"}
                                </button>
                            </div>
                            {Object.keys(errors).map((key) => (
                                <p key={key} className="text-red-500 mt-2">{errors[key]}</p>
                            ))}
                        </motion.form>
                    )}
                </AnimatePresence>

                {/* Tableau des chambres */}
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <table className="w-full border">
                        <thead>
                            <tr className="bg-[#870303] text-white">
                                <th className="border px-4 py-2">Numéro</th>
                                <th className="border px-4 py-2">Capacité</th>
                                <th className="border px-4 py-2">Prix</th>
                                <th className="border px-4 py-2">Dimensions</th>
                                <th className="border px-4 py-2">Disponible</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rooms.map((room) => (
                                <tr key={room.id} className="border hover:bg-gray-50 transition-all">
                                    <td className="border px-4 py-2">{room.number}</td>
                                    <td className="border px-4 py-2">{room.capacity}</td>
                                    <td className="border px-4 py-2">{room.price} €</td>
                                    <td className="border px-4 py-2">{room.length}m x {room.width}m</td>
                                    <td className="border px-4 py-2">{room.is_available ? 'Oui' : 'Non'}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
    </>
);
}