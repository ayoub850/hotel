import { Link, useForm } from '@inertiajs/react';


export default function Navbar({isAdmin}) {
  
  const { post } = useForm();
  const handleLogout = (e) => {
        e.preventDefault();
        post('/logout');
};


  return (
    <>
     
      <nav
        className= 'bg-white flex justify-between items-center h-20 w-full z-50 transition-all duration-300 rounded-xl shadow-lg md:p-6 navbar'
        style={{
          position: 'fixed',
          top:  '2px',
          transition: 'transform 0.3s ease-in-out',
        }}
      >
        <div className="block md:hidden mx-2 ">

          
        </div>
        
        <div className="text-red-600 hidden md:flex items-center space-x-9 ">
        <Link href="/" className="text-3xl font-bold text-black mx-6">Smotel</Link> 

          <div className="flex space-x-6">
            {/* <Link href="/" className="hover:text-blue-800">Home</Link> */}
            <Link href="/" className="hover:text-red-800">Home</Link>
            {isAdmin && (<>
              <Link href="/Room" className="hover:text-red-800">Chambre</Link>
              <Link href="/List" className="hover:text-red-800">La List De Reservation</Link>
              <form onSubmit={handleLogout} method="POST" className="inline">
                  <button type="submit" className="hover:text-red-800">Logout</button>
              </form>
            </>)}
           
            

      </div>
          
            
        </div>

</nav>
      <div className="demo">
                <div className="gradient"></div>       
            </div>
</>
);
}