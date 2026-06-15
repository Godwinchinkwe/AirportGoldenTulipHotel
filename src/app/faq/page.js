"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

import "./Faq.css";


const faqData = [
  {
    question: "How far is Airport Golden Tulip Hotel from Lagos Airport?",
    answer:
      "Airport Golden Tulip Hotel is located approximately 2 minutes away from Murtala Muhammed International Airport, Lagos, making it ideal for travelers needing convenient airport accommodation."
  },

  {
    question: "Do you provide airport shuttle services?",
    answer:
      "Yes, we provide airport transfer services for guests. Please contact our reservations team before arrival to arrange pickup or drop-off."
  },

  {
    question: "What time is check-in and check-out?",
    answer:
      "Check-in starts from 2:00 PM while check-out is at 12:00 PM. Early check-in or late checkout may be available depending on room availability."
  },

  {
    question: "Does the hotel offer free WiFi?",
    answer:
      "Yes, complimentary high-speed WiFi is available throughout the hotel including rooms, restaurants, and public areas."
  },

  {
    question: "Do your rooms include breakfast?",
    answer:
      "Selected room packages include breakfast. Guests can also enjoy our restaurant services offering local and international cuisine."
  },

  {
    question: "What types of rooms are available?",
    answer:
      "We offer Deluxe Rooms, Executive Rooms, and Luxury Suites designed for business travelers, families, and leisure guests."
  },

  {
    question: "Does the hotel have conference facilities?",
    answer:
      "Yes, Airport Golden Tulip Hotel provides meeting rooms, conference halls, and event spaces suitable for corporate meetings and celebrations."
  },

  {
    question: "Do you have a swimming pool and gym?",
    answer:
      "Yes, guests have access to our swimming pool and fitness facilities during their stay."
  },

  {
    question: "How can I make a reservation?",
    answer:
      "You can book directly through our website, contact our reservations team, or use our booking page."
  },

  {
    question: "What payment methods do you accept?",
    answer:
      "We accept major payment methods including debit cards, credit cards, and approved hotel payment options."
  }
];


export default function FAQ() {

  const [openIndex, setOpenIndex] = useState(null);


  return (

    <main className="faq-page">


      <section className="faq-hero">
        <motion.div
          initial={{opacity:0,y:30}}
          animate={{opacity:1,y:0}}
          transition={{duration:0.8}}
          className="container faq-hero-content">
          <h1>Frequently Asked Questions</h1>
          <p>
            Everything you need to know about staying with Airport Golden Tulip Hotel Lagos.
          </p>
        </motion.div>
      </section>

      <section className="faq-section">
        <div className="container">
          <div className="faq-list">
          {faqData.map((faq,index)=>(
            <motion.div
              key={index}
              initial={{opacity:0,y:20}}
              whileInView={{opacity:1,y:0}}
              viewport={{once:true}}
              className="faq-item">
               <button className="faq-question"onClick={()=> setOpenIndex(
                  openIndex === index ? null : index ) }>
                <span>{faq.question}</span>
                <FaChevronDown
                  className={
                    openIndex === index 
                    ? "rotate" : "" }/>
              </button>



              {openIndex === index && (
                <motion.div initial={{
                  opacity:0,
                  height:0 }}
                animate={{
                  opacity:1,
                  height:"auto"
                }}
                className="faq-answer">
                  <p>
                    {faq.answer}
                  </p>

                </motion.div> )}
        </motion.div>))}
          </div>
        </div>
      </section>
    </main>
  );
}