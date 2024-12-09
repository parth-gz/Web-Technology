import React from "https://cdn.jsdelivr.net/npm/react@18/umd/react.development.js";
import ReactDOM from "https://cdn.jsdelivr.net/npm/react-dom@18/umd/react-dom.development.js";

const App = () => {
    return (
        <div>
            <header className="header">
                <h1>Welcome to Food Paradise</h1>
                <nav>
                    <ul className="nav-links">
                        <li><a href="#menu">Menu</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </header>
            <section id="menu" className="menu-section">
                <h2>Our Menu</h2>
                <table className="menu-table">
                    <thead>
                        <tr>
                            <th>Dish</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Spaghetti</td>
                            <td>$12</td>
                        </tr>
                        <tr>
                            <td>Grilled Chicken</td>
                            <td>$15</td>
                        </tr>
                        <tr>
                            <td>Salad</td>
                            <td>$8</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section id="about">
                <h2>About Us</h2>
                <p>Food Paradise is a cozy restaurant that offers a variety of delicious meals made with love and fresh ingredients.</p>
            </section>
            <section id="contact">
                <h2>Contact Us</h2>
                <form>
                    <label for="name">Name:</label>
                    <input type="text" id="name" placeholder="Enter your name" required />
                    <label for="email">Email:</label>
                    <input type="email" id="email" placeholder="Enter your email" required />
                    <label for="message">Message:</label>
                    <textarea id="message" placeholder="Enter your message" required></textarea>
                    <button type="submit">Send</button>
                </form>
            </section>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
