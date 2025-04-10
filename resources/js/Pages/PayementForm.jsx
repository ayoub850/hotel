import Navbar from "@/Components/Navbar";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
import { motion } from "framer-motion";

export default function PaymentForm({ reservation }) {
    const { data, setData, put, processing, errors } = useForm({
       // payement: reservation.payement,
       payement: true,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route("reservation.update", reservation.id));
    };

    return (
        <>
            <Navbar />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="min-h-screen bg-gradient-to-b from-[#f9f9f9] to-[#eaeaea] flex items-center justify-center p-8"
            >
                <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
                    <motion.h1
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="text-2xl font-bold text-[#870303] mb-6 text-center"
                    >
                        Confirmer le paiement
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="space-y-6"
                    >
                        <div className="text-center">
                            <p className="text-gray-700 font-semibold">
                                Réservation au nom de :{" "}
                                <span className="text-[#870303]">{reservation.guest_name}</span>
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="payement" className="block text-gray-700 font-semibold mb-2">
                                    Paiement effectué ?
                                </label>
                               {/* <select
                                    id="payement"
                                    value={data.payement}
                                    onChange={(e) => setData("payement", e.target.value === "true")}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#870303]"
                                    required
                                >
                                    <option value="false">Non</option>
                                    <option value="true">Oui</option>
                                </select>*/}
                                 <TextInput
                                        id="payement"
                                        type="number"
                                        name="payement"
                                        className="mt-1 block w-full"
                                        autoComplete="username"
                                        isFocused={true}
                                                    />
                                {errors.payement && (
                                    <p className="text-red-500 text-sm mt-1">{errors.payement}</p>
                                )}
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                type="submit"
                                className="w-full bg-[#870303] text-white px-4 py-2 rounded-lg hover:bg-[#ad0000] transition-colors"
                                disabled={processing}
                            >
                                {processing ? "En cours..." : "Confirmer"}
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </motion.div>
        </>
    );
}