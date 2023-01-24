import { useRef } from 'react';
import styles from '../index.module.css';
import { HiOutlineMail } from 'react-icons/hi';
import { BsMessenger, BsWhatsapp } from 'react-icons/bs';
import emailjs from 'emailjs-com';
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_6b6cacl', 'template_oqed4go', form.current, 'rzHIGvyEWhK1l2MR_')
        document.querySelector('#name').value = '';
        document.querySelector('#email').value = '';
        document.querySelector('#message').value = '';
        toast.success("email sent successfully", {
            className: "custom-toast",
            draggable: true,
            position: toast.POSITION.TOP_RIGHT,
        });
    };

    return (
        <section id={styles.contact}>
            <h5>Get in Touch</h5>
            <h2>Contact Me</h2>
            <div className={styles.contacts_container}>
                <div className={styles.contact_options}>
                    <article className={styles.contact_option}>
                        <HiOutlineMail className={styles.contact_icons} />
                        <h4>Email</h4>
                        <h5>maneshram20@gmail.com</h5>
                        <a href="mailto:maneshram20@gmail.com" target="_blank" rel="noreferrer">Send a Message</a>
                    </article>
                    <article className={styles.contact_option}>
                        <BsMessenger className={styles.contact_icons} />
                        <h4>Messenger</h4>
                        <h5>Manesh ram</h5>
                        <a href="https://m.me/manish.ram.73744" target="_blank" rel="noreferrer">Send a Message</a>
                    </article>
                    <article className={styles.contact_option}>
                        <BsWhatsapp className={styles.contact_icons} />
                        <h4>WhatsApp</h4>
                        <h5>+916304409399</h5>
                        <a href="https://wa.me/+916304409399?text='Hi I'm messaging you from your portofolio website'" target="_blank" rel="noreferrer">Send a Message</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" id="name" placeholder="Your Full Name" required />
                    <input type="email" name="email" id="email" placeholder="Your Email" required />
                    <textarea name="message" cols="20" rows="10" id="message" minLength={25} placeholder="Your Message" required></textarea>
                    <button type="submit" className={`${styles.btn} ${styles.btn_primary}`}>Send Message</button>
                </form>
            </div>
            <ToastContainer draggable={false} transition={Zoom} autoClose={8000} />
        </section>
    )
}

export default Contact;