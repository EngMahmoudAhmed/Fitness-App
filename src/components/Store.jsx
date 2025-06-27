import { useState, useEffect } from 'react'
import axios from 'axios'
import Cart from './Cart'
import { ShoppingCart } from 'lucide-react'

const Store = () => {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('https://urchin-app-2qxwc.ondigitalocean.app/api/products')
            .then(res => {
                setProducts(res.data)
            })
            .catch(err => console.error('Error fetching products:', err))
    }, [])

    const addToCart = (product) => {
        setCartItems(prev => {
            const existingItem = prev.find(item => item.id === product.id)
            if (existingItem) {
                return prev.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            }
            return [...prev, { ...product, quantity: 1 }]
        })
        setTimeout(() => setIsCartOpen(true), 0)
    }

    return (
        <div className="container mx-auto px-4 py-8 relative">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Fitness Equipment Store</h1>
                <button
                    onClick={() => setIsCartOpen(true)}
                    className="flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors"
                >
                    <ShoppingCart className="w-5 h-5" />
                    <span>View Cart</span>
                </button>
            </div>

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
                                <button
                                    onClick={() => addToCart(product)}
                                    className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition"
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <Cart
                isOpen={isCartOpen}
                onClose={() => setIsCartOpen(false)}
                cartItems={cartItems}
                setCartItems={setCartItems}
            />
        </div>
    )
}

export default Store
