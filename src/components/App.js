import Banner from './Banner'; 
import Cart from './Cart';
import Footer from './Footer';
import ShoppingList from './ShoppingList';
import logo from '../assets/logo.png';
import '../styles/Layout.css';
import { useEffect, useState } from 'react';

function App() {
  // permettre à l'utilisateur de garder son panier, même lorsqu'il rafraîchit la page. Pour cela, nous allons utiliser localStorage. 
  //sauvegarder le panier à chaque modification avec  localStorage.setItem()  . Attention, le cart étant maintenant un objet, il vous faudra passer par  JSON.stringify
  const savedCart = localStorage.getItem('cart');
  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : []);
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return <div>
        <Banner>
          <img src={logo} alt='La maison jungle' className='lmj-logo' />
          <h1 className='lmj-title'>La maison jungle</h1>
        </Banner>
        
        <div className='lmj-layout-inner'>
          <Cart cart={cart} updateCart={updateCart}/> 
          <ShoppingList cart={cart} updateCart={updateCart}/>
        </div>

        <Footer />
    </div>
}

export default App;
