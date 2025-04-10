import Navbar from "@/Components/Navbar";
import { Head, Link, useForm } from "@inertiajs/react";

export default function ReservationForm({ room }) {
    const { data, setData, post, processing, errors } = useForm({
        room_id: room.id,
        guest_name: "",
        guest_email: "",
        check_in_date: "",
        check_out_date: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("recervation.store"));
    };

    return (
        <>
            <Head title="Réserver une chambre" />
            <Navbar></Navbar>
            <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                    <h1 className="text-2xl font-bold text-[#870303] mb-6">Réserver la chambre {room.number}</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="guest_name" className="block text-gray-700 font-semibold mb-2">
                                Nom complet
                            </label>
                            <input
                                type="text"
                                id="guest_name"
                                value={data.guest_name}
                                onChange={(e) => setData("guest_name", e.target.value)}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#870303]"
                                required
                            />
                            {errors.guest_name && <p className="text-red-500 text-sm mt-1">{errors.guest_name}</p>}
                        </div>

                        <div className="mb-4">
                            <label htmlFor="guest_email" className="block text-gray-700 font-semibold mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="guest_email"
                                value={data.guest_email}
                                onChange={(e) => setData("guest_email", e.target.value)}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#870303]"
                                required
                            />
                            {errors.guest_email && <p className="text-red-500 text-sm mt-1">{errors.guest_email}</p>}
                        </div>

                        <div className="mb-4">
                            <label htmlFor="check_in_date" className="block text-gray-700 font-semibold mb-2">
                                Date d'arrivée
                            </label>
                            <input
                                type="date"
                                id="check_in_date"
                                value={data.check_in_date}
                                onChange={(e) => setData("check_in_date", e.target.value)}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#870303]"
                                required
                            />
                            {errors.check_in_date && <p className="text-red-500 text-sm mt-1">{errors.check_in_date}</p>}
                        </div>

                        <div className="mb-6">
                            <label htmlFor="check_out_date" className="block text-gray-700 font-semibold mb-2">
                                Date de départ
                            </label>
                            <input
                                type="date"
                                id="check_out_date"
                                value={data.check_out_date}
                                onChange={(e) => setData("check_out_date", e.target.value)}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#870303]"
                                required
                            />
                            {errors.check_out_date && <p className="text-red-500 text-sm mt-1">{errors.check_out_date}</p>}
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#870303] text-white px-4 py-2 rounded-lg hover:bg-[#ad0000] transition-colors"
                            disabled={processing}
                        >
                            {processing ? "En cours..." : "Réserver"}
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}