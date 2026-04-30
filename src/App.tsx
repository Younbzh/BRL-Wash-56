import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Phone, MapPin, ChevronRight, CheckCircle, AlertCircle, ArrowRight, Sparkles, Shield, Clock, Home } from 'lucide-react';
import { siteConfig } from './config/siteConfig';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const phoneHref = 'tel:+33673665298';
  const whatsappHref = 'https://wa.me/33673665298';

  return (
    <div className="min-h-screen bg-gray-950 text-white">

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-950/98 backdrop-blur-md shadow-2xl border-b border-cyan-500/10' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-full overflow-hidden shadow-xl shadow-cyan-500/20 bg-black border-2 border-cyan-500/30">
                <img src="/logo.jpeg" alt="BRL Wash 56 Logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <h1 className="text-xl font-black text-white tracking-tight">BRL Wash 56</h1>
                <p className="text-xs text-cyan-400 font-semibold">Vannes — Morbihan</p>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('accueil')} className="text-gray-300 hover:text-cyan-400 transition-colors font-semibold text-sm">Accueil</button>
              <button onClick={() => scrollToSection('formules')} className="text-gray-300 hover:text-cyan-400 transition-colors font-semibold text-sm">Formules</button>
              <button onClick={() => scrollToSection('realisations')} className="text-gray-300 hover:text-cyan-400 transition-colors font-semibold text-sm">Réalisations</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-cyan-400 transition-colors font-semibold text-sm">Contact</button>
              <a href={phoneHref} className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-black px-6 py-3 rounded-lg hover:from-cyan-400 hover:to-cyan-500 transition-all shadow-lg shadow-cyan-500/30 font-black text-sm">
                Appeler
              </a>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white p-2">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-gray-950 shadow-2xl py-4 border-t border-cyan-500/20">
              {['accueil', 'formules', 'realisations', 'contact'].map(section => (
                <button key={section} onClick={() => scrollToSection(section)} className="block w-full text-left px-6 py-4 text-gray-300 hover:bg-gray-900 hover:text-cyan-400 capitalize font-semibold">
                  {section === 'formules' ? 'Formules' : section}
                </button>
              ))}
              <div className="px-6 pt-2">
                <a href={phoneHref} className="block text-center bg-gradient-to-r from-cyan-500 to-cyan-600 text-black px-6 py-3 rounded-lg font-black">
                  Appeler — 06 73 66 52 98
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero */}
      <section id="accueil" className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/voiture-clean.jpeg" alt="BRL Wash 56 - Nettoyage intérieur automobile Vannes" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 py-32 relative z-10">
          <div className="max-w-3xl">

            <div className="inline-flex items-center gap-2 bg-cyan-500/90 backdrop-blur-sm px-5 py-2 rounded-full mb-6 shadow-lg">
              <Sparkles className="text-black" size={16} />
              <span className="text-black font-black text-sm tracking-wider">NETTOYAGE AUTO & MOBILIER — VANNES (56)</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              <span className="text-white drop-shadow-2xl">Votre voiture</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-sky-400 bg-clip-text text-transparent">
                propre à domicile
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-200 mb-4 leading-relaxed max-w-xl">
              Jean-Damien intervient directement chez vous avec son matériel professionnel autonome.
              Voiture, canapés, matelas — partout en Morbihan.
            </p>

            <p className="text-base text-cyan-400 font-bold mb-10">
              ⚡ 100% autonome — intervient même en appartement · Vannes, Morbihan (56)
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={phoneHref}
                className="group px-10 py-5 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full font-black text-lg text-black shadow-2xl shadow-cyan-500/40 hover:shadow-cyan-500/70 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <Phone size={22} />
                <span>06 73 66 52 98</span>
              </a>

              <button
                onClick={() => scrollToSection('formules')}
                className="px-10 py-5 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-full font-bold text-lg text-white border border-white/30 hover:border-cyan-400/60 transition-all flex items-center justify-center gap-3"
              >
                <span>Voir les formules</span>
                <ChevronRight size={20} />
              </button>
            </div>

          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight className="text-white/60 rotate-90" size={28} />
        </div>
      </section>

      {/* Bandeau valeurs */}
      <section className="py-8 px-4 bg-gray-900 border-y border-cyan-500/10">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {siteConfig.values.map((value, index) => (
              <div key={index} className="bg-gray-800/50 px-5 py-2 rounded-full flex items-center gap-2 border border-gray-700 hover:border-cyan-500/50 transition-all">
                <span className="text-lg">{value.icon}</span>
                <span className="font-semibold text-gray-300 text-sm">{value.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* À propos */}
      <section className="py-20 px-4 bg-gray-950">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-cyan-400 font-bold text-sm uppercase tracking-wider mb-4 block">Qui suis-je</span>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                18 ans, <span className="text-cyan-400">passionné</span>,<br />et déjà entrepreneur
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Né en Polynésie et vannetais depuis l'âge de 3 ans, Jean-Damien Barle a créé BRL Wash 56
                à 18 ans avec une ambition claire : vous apporter un nettoyage de qualité pro, sans que vous
                ayez à vous déplacer. Fourgon utilitaire aménagé, groupe électrogène, compresseur,
                aspirateur extracteur et nettoyeur haute pression :
                il est <strong className="text-white">totalement autonome</strong>.
              </p>
              <p className="text-gray-300 leading-relaxed mb-8">
                Il intervient chez les particuliers à leur domicile ou sur leur lieu de travail,
                y compris en appartement aux étages supérieurs, sans besoin d'eau ni d'électricité sur place.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { icon: <Home size={24} />, label: 'À domicile' },
                  { icon: <Shield size={24} />, label: '100% autonome' },
                  { icon: <Clock size={24} />, label: 'Sur rendez-vous' },
                ].map((item, idx) => (
                  <div key={idx} className="bg-gray-800/50 rounded-2xl p-4 text-center border border-gray-700">
                    <div className="text-cyan-400 flex justify-center mb-2">{item.icon}</div>
                    <p className="text-xs font-semibold text-gray-300">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-2 border-cyan-500/20">
                <img src="/gerant.avif" alt="Jean-Damien Barle — BRL Wash 56 Vannes" className="w-full h-[500px] object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-3xl"></div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl px-6 py-4 shadow-2xl shadow-cyan-500/40">
                <p className="text-black font-black text-2xl">100%</p>
                <p className="text-black/70 text-sm font-bold">Autonome sur site</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formules voiture */}
      <section id="formules" className="py-20 px-4 bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-cyan-400 font-bold text-sm uppercase tracking-wider mb-4 block">Nettoyage automobile</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Nos formules</h2>
            <p className="text-xl text-gray-400 mb-3">Nettoyage intérieur à domicile — 3 niveaux de prestation</p>
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 px-5 py-2 rounded-full">
              <span className="text-cyan-400 font-bold text-sm">💳 {siteConfig.paiement}</span>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {siteConfig.formules.map((formule, index) => (
              <div key={index} className={`bg-gray-800/50 rounded-3xl p-8 shadow-2xl transition-all border-2 ${formule.color} group relative`}>
                {formule.badge && (
                  <div className="absolute -top-3 left-8">
                    <span className="bg-cyan-500 text-black text-xs font-black px-4 py-1.5 rounded-full shadow-lg">{formule.badge}</span>
                  </div>
                )}
                <div className="mb-4">
                  <h3 className="text-2xl font-black text-white mb-1 group-hover:text-cyan-400 transition-colors">{formule.name}</h3>
                  <p className="text-cyan-400 font-black text-4xl">{formule.price}</p>
                </div>
                <ul className="space-y-2 mb-6">
                  {formule.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="text-cyan-500 flex-shrink-0 mt-0.5" size={15} />
                      <span className="text-sm text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
                {formule.deplacement && (
                  <div className="mb-4 bg-cyan-500/10 border border-cyan-500/20 rounded-xl px-4 py-2">
                    <p className="text-cyan-400 text-xs font-bold">🚐 {formule.deplacement}</p>
                  </div>
                )}
                <a
                  href={phoneHref}
                  className="block text-center py-3 rounded-xl border border-cyan-500/30 hover:border-cyan-500 hover:bg-cyan-500/10 text-cyan-400 font-semibold text-sm transition-all"
                >
                  Réserver cette formule →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nettoyage mobilier */}
      <section className="py-20 px-4 bg-gray-950">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <span className="text-cyan-400 font-bold text-sm uppercase tracking-wider mb-4 block">Service complémentaire</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Nettoyage Mobilier</h2>
            <p className="text-xl text-gray-400">Canapés & matelas — à votre domicile</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-gray-900 rounded-3xl overflow-hidden shadow-2xl border-2 border-cyan-500/20">
              <img src="/tarif-mobilier.jpeg" alt="Tarifs nettoyage mobilier BRL Wash 56" className="w-full object-contain" />
            </div>

            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed mb-6">
                Grâce à son aspirateur extracteur professionnel, Jean-Damien nettoie aussi vos canapés et matelas,
                directement chez vous. Résultat garanti.
              </p>
              {siteConfig.mobilier.tarifs.map((tarif, index) => (
                <div key={index} className="flex items-center justify-between bg-gray-800/50 rounded-xl px-5 py-3 border border-gray-700 hover:border-cyan-500/40 transition-all">
                  <span className="text-gray-300 font-semibold">{tarif.label}</span>
                  <span className="text-cyan-400 font-black text-xl">{tarif.price}</span>
                </div>
              ))}
              <p className="text-gray-500 text-xs mt-4">{siteConfig.mobilier.note}</p>
              <a
                href={phoneHref}
                className="block mt-6 text-center py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-cyan-600 text-black font-black text-lg shadow-lg shadow-cyan-500/20 hover:scale-105 transition-all"
              >
                Demander un devis mobilier
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Avant / Après */}
      <section id="realisations" className="py-20 px-4 bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-cyan-400 font-bold text-sm uppercase tracking-wider mb-4 block">Nos travaux</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Avant / Après</h2>
            <p className="text-xl text-gray-400">Les résultats parlent d'eux-mêmes</p>
          </div>

          <div className="space-y-8">

            {/* VW Passat — intérieur */}
            <div className="bg-gray-800 rounded-3xl overflow-hidden shadow-2xl border-2 border-cyan-500/20 hover:border-cyan-500/50 transition-all">
              <div className="grid md:grid-cols-2">
                <div className="relative bg-black flex items-center justify-center p-4">
                  <img src="/vw-avant.jpg" alt="VW Passat intérieur avant nettoyage BRL Wash 56" className="w-full object-contain max-h-[420px]" />
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-red-600 text-white text-xs font-black px-3 py-1 rounded-full shadow-lg">AVANT</span>
                  </div>
                </div>
                <div className="relative bg-black flex items-center justify-center p-4">
                  <img src="/vw-apres.jpg" alt="VW Passat intérieur après nettoyage BRL Wash 56" className="w-full object-contain max-h-[420px]" />
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-green-600 text-white text-xs font-black px-3 py-1 rounded-full shadow-lg">APRÈS</span>
                  </div>
                </div>
              </div>
              <div className="p-8 border-t border-gray-700">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div>
                    <span className="font-bold text-sm uppercase tracking-wider text-cyan-400">Nettoyage intérieur complet</span>
                    <h3 className="text-2xl font-black text-white mt-1">Volkswagen Passat</h3>
                  </div>
                  <p className="text-gray-400 md:ml-8 leading-relaxed">
                    Habitacle transformé : tapis et moquettes aspirés en profondeur, tableau de bord nettoyé,
                    plastiques traités, vitres dégraissées. Un intérieur retrouvé comme à la sortie de concession.
                  </p>
                </div>
              </div>
            </div>

            {/* Renault clean */}
            <div className="bg-gray-800 rounded-3xl overflow-hidden shadow-2xl border-2 border-cyan-500/20 hover:border-cyan-500/50 transition-all">
              <div className="relative bg-black flex items-center justify-center p-4">
                <img src="/voiture-clean.jpeg" alt="Renault Kadjar intérieur propre BRL Wash 56" className="w-full object-contain max-h-[420px]" />
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="bg-green-600 text-white text-xs font-black px-3 py-1 rounded-full shadow-lg">RÉSULTAT</span>
                </div>
              </div>
              <div className="p-8 border-t border-gray-700">
                <span className="text-cyan-400 font-bold text-sm uppercase tracking-wider">Nettoyage intérieur — formule Signature</span>
                <h3 className="text-2xl font-black text-white mt-1 mb-2">Renault Kadjar</h3>
                <p className="text-gray-400 leading-relaxed">
                  Intérieur noir soigneusement nettoyé : plastiques brillants, vitres cristallines, volant traité,
                  contours de portes détaillés. Ce Kadjar Black Edition retrouve tout son cachet.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-20 px-4 bg-gray-950">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Pourquoi BRL Wash 56 ?</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: '🏠', title: 'À domicile', desc: 'Je viens chez vous, sans déplacement de votre part' },
              { icon: '⚡', title: 'Autonome', desc: 'Groupe électrogène — intervient même en appartement' },
              { icon: '🧴', title: 'Matériel pro', desc: 'Aspirateur extracteur, nettoyeur vapeur, produits pros' },
              { icon: '💎', title: 'Résultat garanti', desc: 'Acompte au départ, solde une fois satisfait' },
            ].map((item, index) => (
              <div key={index} className="bg-gray-800/50 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/10 transition-all hover:-translate-y-2 border border-gray-700 hover:border-cyan-500/30 text-center">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-black text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zone d'intervention */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3">Zone d'intervention</h2>
            <p className="text-gray-400">Vannes (56) et tout le Morbihan</p>
          </div>
          <div className="bg-gray-800 rounded-3xl p-8 border border-cyan-500/10">
            <div className="flex flex-wrap justify-center gap-3">
              {siteConfig.zone.mainCities.map((city, index) => (
                <span key={index} className="bg-gray-700 px-4 py-2 rounded-full text-sm font-semibold text-gray-300 border border-gray-600 hover:border-cyan-500/40 transition-all">
                  {city}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Processus */}
      <section className="py-20 px-4 bg-gray-950">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Comment ça marche ?</h2>
          </div>
          <div className="grid md:grid-cols-5 gap-4">
            {siteConfig.process.steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-gray-800/50 rounded-3xl p-5 shadow-xl text-center border border-gray-700 hover:border-cyan-500/30 transition-all">
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-3 text-black font-black text-xl shadow-lg shadow-cyan-500/20">
                    {step.number}
                  </div>
                  <h3 className="font-black text-white mb-1 text-sm">{step.title}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{step.description}</p>
                </div>
                {index < siteConfig.process.steps.length - 1 && (
                  <ChevronRight className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 text-cyan-500/40" size={20} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Questions fréquentes</h2>
          </div>
          <div className="space-y-4">
            {siteConfig.faq.map((item, index) => (
              <div key={index} className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-cyan-500/30 transition-all">
                <h3 className="font-black text-white mb-3 flex items-start gap-3">
                  <span className="text-cyan-500 flex-shrink-0">Q:</span>
                  {item.question}
                </h3>
                <p className="text-gray-400 leading-relaxed pl-8">
                  <span className="text-cyan-400 font-bold">R:</span> {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-4 bg-gray-950">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-cyan-400 font-bold text-sm uppercase tracking-wider mb-4 block">Me contacter</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Prendre rendez-vous</h2>
            <p className="text-gray-400">Appelez ou envoyez un message — je réponds rapidement</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-5">

              <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-3xl p-7 shadow-2xl shadow-cyan-500/20 text-black">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-black/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-black" size={22} />
                  </div>
                  <div>
                    <h3 className="font-black mb-1">Téléphone</h3>
                    <a href={phoneHref} className="text-3xl font-black hover:text-black/70 transition-colors block mb-1">
                      {siteConfig.contact.phone}
                    </a>
                    <p className="text-black/70 text-sm font-semibold">Appel & SMS — réponse rapide</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 rounded-3xl p-7 border border-gray-700">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-cyan-500/20">
                    <Mail className="text-black" size={22} />
                  </div>
                  <div>
                    <h3 className="font-black text-white mb-1">Email</h3>
                    <a href={`mailto:${siteConfig.contact.email}`} className="text-cyan-400 font-bold hover:text-cyan-300 transition-colors">
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 rounded-3xl p-7 border border-gray-700">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-cyan-500/20">
                    <MapPin className="text-black" size={22} />
                  </div>
                  <div>
                    <h3 className="font-black text-white mb-1">Zone d'intervention</h3>
                    <p className="text-gray-300 font-bold">Vannes et tout le Morbihan</p>
                    <p className="text-gray-400 text-sm mt-1">Service à domicile — je viens chez vous</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 rounded-3xl p-7 border border-gray-700">
                <h3 className="font-black text-white mb-4">Réseaux sociaux</h3>
                <div className="flex flex-col gap-3">
                  <a
                    href={siteConfig.contact.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors font-semibold"
                  >
                    <span className="text-xl">📷</span>
                    <span>Instagram — @brlwash56</span>
                  </a>
                  <a
                    href={siteConfig.contact.social.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors font-semibold"
                  >
                    <span className="text-xl">🎵</span>
                    <span>TikTok — @brl.wash.56</span>
                  </a>
                  <a
                    href={siteConfig.contact.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors font-semibold"
                  >
                    <span className="text-xl">📘</span>
                    <span>Facebook — BRL Wash 56</span>
                  </a>
                </div>
              </div>

            </div>

            <div className="space-y-5">
              <div className="rounded-3xl overflow-hidden shadow-2xl h-[350px] border-2 border-cyan-500/20">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42950.9!2d-2.7900!3d47.6558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4810b10e84b2e131%3A0x44ef0e9da31cfc3c!2sVannes!5e0!3m2!1sfr!2sfr!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="BRL Wash 56 - Vannes Morbihan"
                ></iframe>
              </div>

              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-7 border-2 border-cyan-500/20">
                <h3 className="text-xl font-black text-white mb-5 flex items-center gap-3">
                  <AlertCircle className="text-cyan-400" size={24} />
                  Demandez votre devis
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Précisez votre type de véhicule et la formule souhaitée.
                  Je vous réponds rapidement avec un devis personnalisé.
                  Paiement : acompte au début, solde au résultat.
                </p>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full py-4 bg-green-500 hover:bg-green-600 rounded-2xl font-black text-white text-lg transition-all shadow-lg shadow-green-500/20 hover:scale-105"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <span>Écrire sur WhatsApp</span>
                </a>

                <a
                  href={phoneHref}
                  className="flex items-center justify-center gap-3 w-full py-4 mt-3 bg-cyan-500 hover:bg-cyan-400 rounded-2xl font-black text-black text-lg transition-all shadow-lg shadow-cyan-500/20 hover:scale-105"
                >
                  <Phone size={22} />
                  <span>Appeler — 06 73 66 52 98</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bouton flottant WhatsApp */}
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/40 hover:scale-110 transition-all duration-300"
        title="Contacter sur WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 fill-white" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-4 border-t border-cyan-500/10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-900 border border-cyan-500/20">
                  <img src="/logo.jpeg" alt="BRL Wash 56" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-cyan-400">BRL Wash 56</h3>
                  <p className="text-gray-500 text-xs">Nettoyage automobile à domicile</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">Vannes (56) — Morbihan, Bretagne</p>
              <p className="text-gray-400 text-sm">Service à domicile partout en Morbihan</p>
            </div>
            <div>
              <h3 className="text-base font-black mb-4 text-cyan-400">Navigation</h3>
              <div className="space-y-2">
                {[
                  { id: 'accueil', label: 'Accueil' },
                  { id: 'formules', label: 'Formules' },
                  { id: 'realisations', label: 'Réalisations' },
                  { id: 'contact', label: 'Contact' },
                ].map(item => (
                  <button key={item.id} onClick={() => scrollToSection(item.id)} className="block text-gray-400 hover:text-cyan-400 transition-colors font-semibold text-sm">
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-base font-black mb-4 text-cyan-400">Contact</h3>
              <div className="space-y-2 text-gray-400 text-sm">
                <p className="font-black text-lg text-white">{siteConfig.contact.phone}</p>
                <p>{siteConfig.contact.email}</p>
                <div className="mt-3 space-y-1">
                  <p className="text-gray-500">Instagram · TikTok · Facebook</p>
                  <p className="text-cyan-400 font-semibold">@brlwash56</p>
                </div>
                <p className="text-cyan-400 font-semibold mt-2">Sur rendez-vous — à domicile</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-gray-600 text-xs text-center md:text-left">
              © 2026 BRL Wash 56 — Jean-Damien Barle — Vannes (56), Morbihan
            </p>
            <p className="text-gray-700 text-xs">
              Site créé par{' '}
              <a
                href="https://avalon-stratege.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-500 hover:text-cyan-400 transition-colors font-semibold"
              >
                Avalon Stratège
              </a>
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}
