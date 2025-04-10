import Navbar from "@/Components/Navbar";
import { Link } from "@inertiajs/react";
import { motion } from "framer-motion";
import { Clock, Search, Shield, Star } from "lucide-react";


export default function Home({isAdmin,featuredRooms}) {
     
    const timeOfDayImages = {
        morning: '/image/hotel20.jpg',
        night: '/image/hotel10.jpg',
      };

      const getTimeOfDay = () => {
        const hour = new Date().getHours();
      
        if (hour >= 6 && hour < 19) {
          return 'morning';
        } else {
          return 'night';
        }
      };
      
      const currentTimeOfDay = getTimeOfDay();
      const currentImage = timeOfDayImages[currentTimeOfDay];
    return (
        <>
            <Navbar isAdmin={isAdmin}/> 
            <div 
        className="relative bg-cover bg-center h-96" 
        style={{ 
          backgroundImage:`url('${currentImage}')` 
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Bienvenue à HôtelRéserve
          </h1>
          <p className="mt-3 max-w-md text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl">
            Découvrez le confort et l'élégance dans nos chambres soigneusement conçues pour votre séjour parfait.
          </p>
          <div className="mt-8">
            <Link
              href="/Decouvrir"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Voir nos chambres
            </Link>
          </div>
        </div>
</div>
<div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-red-900 sm:text-4xl">
              Pourquoi choisir HôtelRéserve?
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-red-500 mx-auto">
              Nous nous engageons à offrir une expérience exceptionnelle à chaque client.
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="pt-6">
                <div className="flow-root bg-red-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-red-500 rounded-md shadow-lg">
                        <Search className="h-6 w-6 text-white" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Réservation facile</h3>
                    <p className="mt-5 text-base text-red-500">
                      Trouvez et réservez la chambre parfaite en quelques clics seulement.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flow-root bg-red-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-red-500 rounded-md shadow-lg">
                        <Star className="h-6 w-6 text-white" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-red-900 tracking-tight">Qualité supérieure</h3>
                    <p className="mt-5 text-base text-red-500">
                      Des chambres élégantes avec des équipements modernes pour votre confort.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flow-root bg-red-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-red-500 rounded-md shadow-lg">
                        <Clock className="h-6 w-6 text-white" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-red-900 tracking-tight">Service 24/7</h3>
                    <p className="mt-5 text-base text-red-500">
                      Notre équipe est disponible à tout moment pour répondre à vos besoins.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flow-root bg-red-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-red-500 rounded-md shadow-lg">
                        <Shield className="h-6 w-6 text-white" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-red-900 tracking-tight">Paiement sécurisé</h3>
                    <p className="mt-5 text-base text-red-500">
                      Vos transactions sont protégées par les dernières technologies de sécurité.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
<div className="py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Nos chambres en vedette
                    </h2>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                        Découvrez nos chambres les plus populaires et commencez à planifier votre séjour.
                    </p>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {featuredRooms.map((room) => (
                        <div key={room.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <img
                                src={room.photo1 ? `/storage/${room.photo1}` : "https://via.placeholder.com/400"}
                                alt={`Chambre ${room.number}`}
                                className="w-full h-48 object-cover"
                                onError={(e) => {
                                    e.target.src = "https://via.placeholder.com/400"; // Image de remplacement
                                }}
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900">Chambre {room.number}</h3>
                                <p className="mt-2 text-gray-600">{room.description}</p>
                                <p className="mt-4 text-lg font-semibold text-red-600">
                                    {room.price} € / nuit
                                </p>
                            </div>
                            <Link href={`room/${room.id}`} className="mt-4 inline-block px-4 py-2 w-full text-center bg-red-700 text-gray-900 font-bold uppercase text-xs">Detail</Link>
                        </div>
                    ))}
                </div>

                <div className="mt-10 text-center">
                    <Link
                        href="/Decouvrir"
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                    >
                        Voir toutes les chambres
                    </Link>
                </div>
            </div>
        </div>
</>)}