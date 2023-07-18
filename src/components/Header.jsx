import React, { useState } from 'react'
import App from "../App";

export default function Header() {
    return(
    <div className='header'>
        <ul>
            <li><a target='blank' href="http://emirhankadiroglu.me/">Who am ı</a></li>
            <li>Home</li>
            <li>Contact</li>
            <li>About</li>
            </ul>
            <h2>emirhan'ın mekanına hoşgeldiniz</h2>
            <p>Şuan Tic-Tac-Toe oynamaktasınız</p>
        </div>
        )
}
