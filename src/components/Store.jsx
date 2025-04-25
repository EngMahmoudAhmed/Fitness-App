import React from 'react'

const Store = () => {
    const products = [
        {
            id: 1,
            name: "Premium Yoga Mat",
            price: 29.99,
            image: "https://images.unsplash.com/photo-1593810450967-f9c42742e326?q=80&w=1470&auto=format&fit=crop",
            description: "High-quality, non-slip yoga mat perfect for all types of exercises"
        },
        {
            id: 2,
            name: "Resistance Bands Set",
            price: 24.99,
            image: "https://images.unsplash.com/photo-1598268030450-7b494e85d3c7?q=80&w=1470&auto=format&fit=crop",
            description: "Set of 5 resistance bands with different tension levels"
        },
        {
            id: 3,
            name: "Adjustable Dumbbell Set",
            price: 149.99,
            image: "https://images.unsplash.com/photo-1638536532686-d610adfc8e5c?q=80&w=1470&auto=format&fit=crop",
            description: "Adjustable weight dumbbells perfect for home workouts"
        },
        {
            id: 4,
            name: "Smart Water Bottle",
            price: 34.99,
            image: "https://images.unsplash.com/photo-1523362628745-0c100150b504?q=80&w=1473&auto=format&fit=crop",
            description: "Track your hydration with this smart water bottle"
        },
        {
            id: 5,
            name: "Fitness Tracker Watch",
            price: 99.99,
            image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?q=80&w=1476&auto=format&fit=crop",
            description: "Monitor your fitness activities and health metrics"
        },
        {
            id: 6,
            name: "Exercise Ball",
            price: 19.99,
            image: "https://images.unsplash.com/photo-1593476087123-36d1de271f08?q=80&w=1470&auto=format&fit=crop",
            description: "Multi-purpose exercise ball for core strength and stability"
        },
        {
            id: 7,
            name: "Smart Water Bottle",
            price: 34.99,
            image: "https://images.unsplash.com/photo-1523362628745-0c100150b504?q=80&w=1473&auto=format&fit=crop",
            description: "Track your hydration with this smart water bottle"
        },
        {
            id: 8,
            name: "Fitness Tracker Watch",
            price: 99.99,
            image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?q=80&w=1476&auto=format&fit=crop",
            description: "Monitor your fitness activities and health metrics"
        },
        {
            id: 9,
            name: "Exercise Ball",
            price: 19.99,
            image: "https://images.unsplash.com/photo-1593476087123-36d1de271f08?q=80&w=1470&auto=format&fit=crop",
            description: "Multi-purpose exercise ball for core strength and stability"
        },
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-8">Fitness Equipment Store</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                    <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                            <p className="text-gray-600 mb-2">{product.description}</p>
                            <div className="flex justify-between items-center">
                                <span className="text-xl font-bold text-teal-600">${product.price}</span>
                                <button className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Store
