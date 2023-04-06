import React from 'react';
import PizzaLeft from '../assets/pizzaLeft.jpg';
import '../styles/Contact.css';

function Contact() {
  return (
    <div className='contact'>
        <div className="leftSide"
        style={{ backgroundImage: `url(${PizzaLeft})` }}
        ></div>
        <div className="rightSide">
            <h1>Contact Us</h1>
            <form id="contact-form" method="POST">
                <label htmlFor="name">Nama Lengkap</label>
                <input name="name" placeholder="Tulis di sini ..." type="text"/>
                <label htmlFor="email">Email</label>
                <input name="email" placeholder="Masukkan email ..." type="email"/>
                <label htmlFor="message">Pesan</label>
                <textarea 
                  rows="6" 
                  placeholder="Tulis pesan Anda" 
                  name="message"
                ></textarea>
                <button type="submit">Kirim</button>
            </form>
        </div>
    </div>
  )
}


export default Contact