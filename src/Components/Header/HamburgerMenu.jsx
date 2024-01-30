// Just a set of links to home, shop, cart

import { useState } from 'react'
import MenuLogo from '../../assets/hamburger.png'
import { Link } from 'react-router-dom'

export default function HamburgerMenu() {
    const [MenuVisible, setMenuVisible] = useState(false)
    function toggleMenuVisibility() {
        if (MenuVisible === false) setMenuVisible(true)
        else setMenuVisible(false)
    }
    return (
        <>
            <img src={MenuLogo} onClick={() => toggleMenuVisibility()}/>
            {MenuVisible && <div id="menu-container" onMouseLeave={() => setMenuVisible(false)}>
                    <div id="menu">
                        <Link to='/cart'>Cart</Link>
                        <Link to='/checkout'>Checkout</Link>
                        <Link to='/'>Home</Link>
                        <Link to='/store'>Store</Link>
                    </div>
                </div>}
         </>

    )
}