// ============================================
// Addis Eats - Static Menu
// ============================================

import Header from './Header';
import Dish from './Dish';
import './App.css';

function App() {
    // Array of dishes
    const dishes = [
        { id: 1, name: 'Doro Wat', price: 350 },
        { id: 2, name: 'Kitfo', price: 400 },
        { id: 3, name: 'Tibs', price: 380 },
        { id: 4, name: 'Shiro', price: 250 },
        { id: 5, name: 'Injera', price: 50 },
        { id: 6, name: 'Beyainatu', price: 300 }
    ];

    return (
        <div className="app">
            <Header />
            <main className="menu">
                <h2>Our Menu</h2>
                <div className="dish-grid">
                    {dishes.map((dish) => (
                        <Dish key={dish.id} name={dish.name} price={dish.price} />
                    ))}
                </div>
            </main>
        </div>
    );
}

export default App;