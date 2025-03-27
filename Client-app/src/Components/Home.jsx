import bg from './banner-home.jpeg';

function Home() {
    const products = [
        { id: 1, name: "Tomatoes", price: "RS 30/kg", image: "https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?cs=srgb&dl=pexels-julia-nagy-568948-1327838.jpg&fm=jpg" },
        { id: 2, name: "Carrots", price: "RS 25/kg", image: "https://media.istockphoto.com/id/1015995028/photo/fresh-carrot-bunches-in-open-air-market.jpg?s=612x612&w=0&k=20&c=aawVlKTmhZintF7sSJoklMfhT7yLmPQdubTlcF63gl4=" },
        { id: 3, name: "Dairy Milk", price: "Rs 50/L", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTbfoZTuRzEU33HfLNg8rICIS_Hueu3YnRXw&s" },
        { id: 4, name: "Apples", price: "RS 200/kg", image: "https://images.pexels.com/photos/1510392/pexels-photo-1510392.jpeg?cs=srgb&dl=pexels-suzyhazelwood-1510392.jpg&fm=jpg" },
    ];

    return (
        <div className="w-[99vw] -mt-[17px] -ml-[17px]">
          
            <div className="relative">
                <img src={bg} alt="Banner" className="w-full h-[70vh] object-cover" />
                <p className="absolute top-1/3 left-4 transform -translate-y-1/2 text-4xl font-bold text-white w-[350px]">
                    Bringing Farm Fresh Goodness to Your Doorstep!
                </p>
            </div>

         
            <div className="p-8">
                <h2 className="text-3xl font-bold text-green-700 mb-6">Featured Products</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <div key={product.id} className="bg-white shadow-lg p-4 rounded-xl text-center">
                            <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-md" />
                            <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
                            <p className="text-green-600 font-bold">{product.price}</p>
                        </div>
                    ))}
                </div>
            </div>

            <footer className="bg-green-600 text-white py-6 mt-10">
                <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between">
                  
                    <div>
                        <h3 className="text-2xl font-bold">AgriKart</h3>
                        <p className="text-sm mt-2">Delivering organic goodness to your home.</p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-lg">Quick Links</h4>
                        <ul className="mt-2 space-y-1">
                            <li><a href="#" className="hover:text-black">Home</a></li>
                            <li><a href="#" className="hover:text-black">About</a></li>
                            <li><a href="#" className="hover:text-black">Shop</a></li>
                            <li><a href="#" className="hover:text-black">Contact</a></li>
                        </ul>
                    </div>

                    
                    <div>
                        <h4 className="font-semibold text-lg">Contact Us</h4>
                        <p className="mt-2 text-sm">Email: AgriKart@farmfresh.com</p>
                        <p className="text-sm">Phone: +91 8459946986</p>
                    </div>

                  
                    <div>
                        <h4 className="font-semibold text-lg">Follow Us</h4>
                        <div className="flex space-x-4 mt-2">
                            <a href="#" className="hover:text-green-400">🌐</a>
                            <a href="#" className="hover:text-green-400">📘</a>
                            <a href="#" className="hover:text-green-400">🐦</a>
                            <a href="#" className="hover:text-green-400">📷</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Home;