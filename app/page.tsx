'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-white">
      {/* Header */}
      <header className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Image 
              src="/logo.png" 
              alt="EduMatch Logo" 
              width={150} 
              height={40} 
              className="h-10 w-auto"
              priority
            />
          </div>
          
          <div className="hidden md:flex space-x-6">
            <a href="#about" className="text-gray-700 hover:text-[#69bd48]">À propos</a>
            <a href="#features" className="text-gray-700 hover:text-[#69bd48]">Fonctionnalités</a>
            <a href="#team" className="text-gray-700 hover:text-[#69bd48]">Équipe</a>
            <a href="#partners" className="text-gray-700 hover:text-[#69bd48]">Partenaires</a>
            <a href="#contact" className="text-gray-700 hover:text-[#69bd48]">Contact</a>
          </div>

          <motion.a
            href="https://www.linkedin.com/company/edu-match"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            className="inline-block bg-[#69bd48] text-white py-3 px-6 rounded-lg hover:bg-[#1878c1] transition-colors"
          >
            Suivez-nous
          </motion.a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto text-center"
        >
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#69bd48] to-[#1878c1] text-transparent bg-clip-text">
            Trouve ton but, marque ton avenir
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            La solution intelligente pour votre orientation scolaire et professionnelle
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-[#69bd48] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#1878c1] transition-colors"
          >
            Découvrir la solution
          </motion.button>
        </motion.div>
      </section>

      {/* Pourquoi EduMatch Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl text-gray-400 font-bold text-center mb-12">
              Pourquoi <span className="text-[#69bd48]">EduMatch</span> ?
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-[#1878c1]">La problématique</h3>
                  <p className="text-gray-600 mb-4">
                    En France, 1 étudiant sur 2 abandonne ses études après la première année. 
                    La principale raison ? Une orientation mal adaptée à leurs aspirations et leurs compétences.
                  </p>
                  <p className="text-gray-600">
                    Sans accompagnement personnalisé et sans contact avec des professionnels, 
                    il est difficile de faire les bons choix pour son avenir.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-[#1878c1]">Les chiffres clés</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <p className="text-3xl font-bold text-[#69bd48]">61%</p>
                      <p className="text-sm text-gray-600">des étudiants regrettent leur orientation</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <p className="text-3xl font-bold text-[#69bd48]">45%</p>
                      <p className="text-sm text-gray-600">changent de filière en cours d'études</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <p className="text-3xl font-bold text-[#69bd48]">87%</p>
                      <p className="text-sm text-gray-600">souhaitent un accompagnement personnalisé</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <p className="text-3xl font-bold text-[#69bd48]">92%</p>
                      <p className="text-sm text-gray-600">veulent échanger avec des professionnels</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <Image
                  src="/logo.png"
                  alt="Impact d'EduMatch sur l'orientation"
                  width={150}
                  height={150}
                  className="w-full"
                />
                <div className="mt-6 bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-[#1878c1] mb-3">Notre Impact</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-[#69bd48] mr-2"></div>
                      <span className="text-gray-600">Réduction de 70% des réorientations</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-[#69bd48] mr-2"></div>
                      <span className="text-gray-600">+85% de satisfaction dans les choix d'orientation</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-[#69bd48] mr-2"></div>
                      <span className="text-gray-600">Réseau de plus de 1000 alumni actifs</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Banner Section */}
      <section className="w-full relative py-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="container mx-auto px-4"
        >
          <div className="w-full rounded-xl shadow-lg overflow-hidden">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/baniere.mp4" type="video/mp4" />
              Votre navigateur ne supporte pas la lecture de vidéos.
            </video>
          </div>
        </motion.div>
      </section>

      {/* Fonctionnalités Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-3xl text-gray-400 font-bold text-center mb-16">
              Nos Fonctionnalités <span className="text-[#1878c1]">Principales</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Chatbot IA */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <Image
                    src="/chatbot-icon.svg"
                    alt="Chatbot IA"
                    width={64}
                    height={64}
                    className="flex-shrink-0"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-[#1878c1] mb-2">
                      Chatbot IA Intelligent
                    </h3>
                    <p className="text-gray-600">
                      Notre assistant virtuel analyse vos intérêts, compétences et aspirations 
                      pour vous guider vers les formations et métiers les plus adaptés à votre profil.
                      Disponible 24/7 pour répondre à vos questions.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Base de connaissances */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <Image
                    src="/knowledge-icon.svg"
                    alt="Base de connaissances"
                    width={64}
                    height={64}
                    className="flex-shrink-0"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-[#1878c1] mb-2">
                      Base de Connaissances Enrichie
                    </h3>
                    <p className="text-gray-600">
                      Accédez à une base de données complète sur les formations, écoles et métiers, 
                      constamment mise à jour avec les dernières tendances du marché du travail.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Système Alumni */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <Image
                    src="/alumni-icon.svg"
                    alt="Système Alumni"
                    width={64}
                    height={64}
                    className="flex-shrink-0"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-[#1878c1] mb-2">
                      Réseau Alumni & Mentorat
                    </h3>
                    <p className="text-gray-600">
                      Connectez-vous avec des professionnels et alumni qui partagent leur expérience. 
                      Bénéficiez de conseils personnalisés et construisez votre réseau professionnel.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Interface */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <Image
                    src="/interface-icon.svg"
                    alt="Interface"
                    width={64}
                    height={64}
                    className="flex-shrink-0"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-[#1878c1] mb-2">
                      Interface Intuitive
                    </h3>
                    <p className="text-gray-600">
                      Une plateforme simple et personnalisable qui s'adapte à vos besoins. 
                      Suivez votre progression, gérez vos favoris et personnalisez votre parcours 
                      d'orientation en toute autonomie.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-3xl text-gray-400 font-bold text-center mb-16">
              Notre <span className="text-[#69bd48]">Équipe</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Assia LOUBANE */}
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl overflow-hidden shadow-sm"
              >
                <div className="relative h-48 bg-gradient-to-br from-[#1878c1] to-[#69bd48] opacity-90">
                 
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800">Assia LOUBANE</h3>
                  <p className="text-[#1878c1] font-medium mb-3">Data Scientist</p>
                  <p className="text-gray-600 text-sm mb-4">
                    Experte en analyse de données et modélisation prédictive, 
                    spécialisée dans l'optimisation des algorithmes d'orientation.
                  </p>
                  <a 
                    href="https://linkedin.com/in/assia-loubane-b8b412261"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-[#1878c1] hover:text-[#69bd48] transition-colors"
                  >
                    <span>Voir profil</span>
                    <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                    </svg>
                  </a>
                </div>
              </motion.div>

              {/* Johann KIONGHAT */}
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl overflow-hidden shadow-sm"
              >
                <div className="relative h-48 bg-gradient-to-br from-[#1878c1] to-[#69bd48] opacity-90">
                  <Image
                    src="/johann.jpg"
                    alt="Background"
                    width={300}
                    height={300}
                    className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800">Johann KIONGHAT</h3>
                  <p className="text-[#1878c1] font-medium mb-3">Data Scientist</p>
                  <p className="text-gray-600 text-sm mb-4">
                    Spécialiste en intelligence artificielle et traitement du langage naturel,
                    responsable du développement du chatbot IA.
                  </p>
                  <a 
                    href="https://www.linkedin.com/in/cg-johann-kionghat/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-[#1878c1] hover:text-[#69bd48] transition-colors"
                  >
                    <span>Voir profil</span>
                    <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                    </svg>
                  </a>
                </div>
              </motion.div>

              {/* Eli Joel */}
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl overflow-hidden shadow-sm"
              >
                <div className="relative h-48 bg-gradient-to-br from-[#1878c1] to-[#69bd48] opacity-90">
                  <Image
                    src="/eli.jpg"
                    alt="Background"
                    width={300}
                    height={300}
                    className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800">Eli-Joël</h3>
                  <p className="text-[#1878c1] font-medium mb-3">BIM Data Analyst</p>
                  <p className="text-gray-600 text-sm mb-4">
                    Expert en analyse de données BIM et intégration de systèmes,
                    chargé de la structuration et de l'enrichissement de notre base de connaissances.
                  </p>
                  <a 
                    href="https://linkedin.com/in/eli-joël-emile-essono-nzoghe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-[#1878c1] hover:text-[#69bd48] transition-colors"
                  >
                    <span>Voir profil</span>
                    <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                    </svg>
                  </a>
                </div>
              </motion.div>

              {/* Fahira Abdoulalime */}
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl overflow-hidden shadow-sm"
              >
                <div className="relative h-48 bg-gradient-to-br from-[#1878c1] to-[#69bd48] opacity-90">
                  <Image
                    src="/fahira.jpg"
                    alt="Background"
                    width={300}
                    height={300}
                    className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800">Fahira Abdoulalime</h3>
                  <p className="text-[#1878c1] font-medium mb-3">Project Manager</p>
                  <p className="text-gray-600 text-sm mb-4">
                    Chef de projet expérimentée, coordonne le développement et l'implémentation
                    de la solution EduMatch, assurant la cohérence et la qualité du projet.
                  </p>
                  <a 
                    href="https://linkedin.com/in/fahira-abdoulalime"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-[#1878c1] hover:text-[#69bd48] transition-colors"
                  >
                    <span>Voir profil</span>
                    <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-3xl text-gray-400 font-bold text-center mb-8">
              Nos <span className="text-[#1878c1]">Partenaires</span>
            </h2>

            {/* Kesk'IA Special Feature */}
            <div className="mb-16 text-center">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-r from-[#1878c1]/10 to-[#69bd48]/10 rounded-xl p-8 max-w-3xl mx-auto"
              >
                <Image
                  src="/keskia.jpg"
                  alt="Kesk'IA Logo"
                  width={200}
                  height={80}
                  className="mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-[#1878c1] mb-4 text-center">
                  Programme Kesk'IA
                </h3>
                <p className="text-gray-600 text-center">
                  EduMatch est né au sein du programme Kesk'IA, une initiative visant à développer
                  des solutions innovantes basées sur l'intelligence artificielle.
                </p>
              </motion.div>
            </div>

            {/* Partners Carousel */}
            <div className="relative overflow-hidden w-full max-w-4xl mx-auto">
              <div className="flex animate-carousel">
                {/* First set of partners */}
                <div className="flex flex-nowrap min-w-full">
                  <motion.div className="w-1/3 px-4 flex-shrink-0">
                    <Image
                      src="/evolukid.png"
                      alt="evolukid"
                      width={200}
                      height={80}
                      className="mx-auto"
                    />
                  </motion.div>
                  <motion.div className="w-1/3 px-4 flex-shrink-0">
                    <Image
                      src="/villedetrappes.png"
                      alt="Ville de Trappes"
                      width={200}
                      height={80}
                      className="mx-auto"
                    />
                  </motion.div>
                  <motion.div className="w-1/3 px-4 flex-shrink-0">
                    <Image
                      src="/opcoatlas.jpg"
                      alt="Opco atlas"
                      width={200}
                      height={80}
                      className="mx-auto"
                    />
                  </motion.div>
                </div>
                {/* Second set of partners */}
                <div className="flex flex-nowrap min-w-full">
                  <motion.div className="w-1/3 px-4 flex-shrink-0">
                    <Image
                      src="/asusbusiness.jpg"
                      alt="Asus Business"
                      width={200}
                      height={80}
                      className="mx-auto"
                    />
                  </motion.div>
                  <motion.div className="w-1/3 px-4 flex-shrink-0">
                    <Image
                      src="/asuseducation.png"
                      alt="Asus education"
                      width={200}
                      height={80}
                      className="mx-auto"
                    />
                  </motion.div>
                  <motion.div className="w-1/3 px-4 flex-shrink-0">
                    <Image
                      src="/lapostegroup.png"
                      alt="La poste group"
                      width={200}
                      height={80}
                      className="mx-auto"
                    />
                  </motion.div>
                </div>
                {/* Duplicate first set for seamless loop */}
                <div className="flex flex-nowrap min-w-full">
                  <motion.div className="w-1/3 px-4 flex-shrink-0">
                    <Image
                      src="/evolukid.png"
                      alt="evolukid"
                      width={200}
                      height={80}
                      className="mx-auto"
                    />
                  </motion.div>
                  <motion.div className="w-1/3 px-4 flex-shrink-0">
                    <Image
                      src="/villedetrappes.png"
                      alt="Ville de Trappes"
                      width={200}
                      height={80}
                      className="mx-auto"
                    />
                  </motion.div>
                  <motion.div className="w-1/3 px-4 flex-shrink-0">
                    <Image
                      src="/opcoatlas.jpg"
                      alt="Opco atlas"
                      width={200}
                      height={80}
                      className="mx-auto"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl text-gray-400 font-bold text-center mb-12">
              Contact & <span className="text-[#69bd48]">Engagement</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <form 
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  className="space-y-6"
                  action="/success"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <div className="hidden">
                    <input name="bot-field" />
                  </div>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Nom complet
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#69bd48] focus:border-transparent text-gray-900 placeholder-gray-500"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#69bd48] focus:border-transparent text-gray-900 placeholder-gray-500"
                      placeholder="votre@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#69bd48] focus:border-transparent text-gray-900 placeholder-gray-500"
                      placeholder="Votre message..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#1878c1] text-white py-3 px-6 rounded-lg hover:bg-[#69bd48] transition-colors"
                  >
                    Envoyer le message
                  </button>
                </form>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-[#1878c1] mb-4">
                    Rejoignez notre communauté
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Participez à la révolution de l'orientation scolaire et professionnelle.
                    Rejoignez une communauté dynamique d'étudiants, professionnels et mentors.
                  </p>
                  <motion.a
                    href="https://www.linkedin.com/company/edu-match"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    className="inline-block bg-[#69bd48] text-white py-3 px-6 rounded-lg hover:bg-[#1878c1] transition-colors"
                  >
                    Rejoindre Linkedin
                  </motion.a>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-[#1878c1] mb-4">
                    Contactez-nous directement
                  </h3>
                  <div className="space-y-3">
                    <p className="text-gray-600">
                      <span className="font-medium">Email:</span>{" "}
                      <a href="mailto:contact.edumatch@gmail.com" className="text-[#69bd48] hover:underline">
                        contact.edumatch@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col items-center text-center mb-12">
            <Image 
              src="/logo.png" 
              alt="EduMatch Logo" 
              width={180} 
              height={60} 
              className="h-12 w-auto mb-6"
              priority
            />
            <p className="text-sm text-gray-600 max-w-md">
              EduMatch - La plateforme d'orientation innovante qui connecte les étudiants à leur avenir.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto text-center">
            {/* Contact */}
            <div>
              <h4 className="text-sm font-semibold text-[#1878c1] mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="text-sm text-gray-600">
                  Email: contact.edumatch@gmail.com
                </li>
                <li className="text-sm text-gray-600">
                  Adresse: Paris, France
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div className="flex flex-col items-center">
              <h4 className="text-sm font-semibold text-[#1878c1] mb-4">Suivez-nous</h4>
              <div className="flex justify-center space-x-4">
                <a 
                  href="https://www.linkedin.com/company/edu-match" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#69bd48] transform transition-transform hover:scale-110"
                >
                  <div className="w-8 h-8 bg-[#1878c1] rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </div>
                </a>
                <a 
                  href="https://www.instagram.com/edumatch78/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#69bd48] transform transition-transform hover:scale-110"
                >
                  <div className="w-8 h-8 bg-[#1878c1] rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85 .07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-200 mt-12 pt-8 text-center">
            <p className="text-sm text-gray-600">
              {new Date().getFullYear()} EduMatch. Tous droits réservés. Développé avec ❤️ par l'équipe EduMatch.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
