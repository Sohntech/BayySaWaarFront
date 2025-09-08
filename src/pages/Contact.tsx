import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const Contact = () => {
  const [activeTab, setActiveTab] = useState('information');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    category: 'information'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
 

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Siège Social',
      details: ['Ouakam cité avion, Dakar, Senegal'],
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Phone,
      title: 'Numéros de Téléphone',
      details: ['+221 78 634 95 73'],
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Mail,
      title: 'Adresses Email',
      details: ['fabirabsw@gmail.com'],
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: Clock,
      title: 'Heures d\'Ouverture',
      details: ['Lundi - Vendredi: 8h00 - 18h00', 'Samedi: 9h00 - 16h00', 'Dimanche: Fermé'],
      color: 'bg-orange-100 text-orange-600'
    }
  ];

  const contactCategories = [
    {
      id: 'information',
      title: 'Informations Générales',
      description: 'Questions sur nos services, tarifs ou renseignements généraux'
    },
    {
      id: 'partnership',
      title: 'Opportunités de Partenariat',
      description: 'Discuter des collaborations potentielles et partenariats commerciaux'
    },
    {
      id: 'support',
      title: 'Support Technique',
      description: 'Obtenir de l\'aide pour les problèmes de plateforme ou difficultés techniques'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        name: '', email: '', phone: '', company: '', subject: '', message: '', category: activeTab
      });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen "
    >
      {/* Section Héro */}
      <section className="relative pt-16 pb-12 sm:py-20 md:py-24 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(https://res.cloudinary.com/drxouwbms/image/upload/v1755949759/Screenshot_2025-08-23_at_11_41_05_1_-Picsart-AiImageEnhancer_kfsp1y.png)' }}>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              Contactez <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">Nous</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto px-2 sm:px-0">
              Nous sommes là pour vous aider à réussir. Contactez-nous pour du support, des partenariats ou toute question sur nos services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Informations de Contact */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">Coordonnées</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 px-2 sm:px-0">Plusieurs façons de nous contacter</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className={`w-12 h-12 sm:w-16 sm:h-16 ${info.color} rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6`}>
                  <info.icon size={24} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">{info.title}</h3>
                <div className="space-y-1 sm:space-y-2">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-gray-600 text-sm sm:text-base">{detail}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulaire de Contact */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">Envoyez-nous un Message</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 px-2 sm:px-0">Choisissez une catégorie et dites-nous comment nous pouvons vous aider</p>
          </motion.div>

          <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-6 sm:p-8 md:p-12">
            {/* Category Tabs */}
            <div className="flex flex-col sm:flex-row mb-6 sm:mb-8 space-y-2 sm:space-y-0 sm:space-x-4">
              {contactCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setActiveTab(category.id);
                    setFormData(prev => ({ ...prev, category: category.id }));
                  }}
                  className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold transition-all duration-200 text-sm sm:text-base ${
                    activeTab === category.id
                      ? 'bg-green-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.title}
                </button>
              ))}
            </div>

            <div className="mb-6 p-3 sm:p-4 bg-green-50 rounded-lg">
              <p className="text-green-800 text-sm sm:text-base">
                <strong>Sélectionné :</strong> {contactCategories.find(cat => cat.id === activeTab)?.description}
              </p>
            </div>

            {submitStatus && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mb-6 p-3 sm:p-4 rounded-lg flex items-center space-x-3 text-sm sm:text-base ${
                  submitStatus === 'success'
                    ? 'bg-green-50 text-green-800'
                    : 'bg-red-50 text-red-800'
                }`}
              >
                {submitStatus === 'success' ? (
                  <CheckCircle className="text-green-600" size={18} />
                ) : (
                  <AlertCircle className="text-red-600" size={18} />
                )}
                <span>
                  {submitStatus === 'success'
                    ? 'Votre message a été envoyé avec succès ! Nous vous répondrons dans les 24 heures.'
                    : 'Une erreur s\'est produite lors de l\'envoi de votre message. Veuillez réessayer.'}
                </span>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Nom Complet *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Adresse Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Numéro de Téléphone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Entreprise/Organisation
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                  Sujet *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                  placeholder="Veuillez fournir autant de détails que possible..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center space-x-2 text-sm sm:text-base"
              >
                {isSubmitting ? (
                  <>
                                         <Loader2 className="animate-spin" size={18} />
                    <span>Envoi en cours...</span>
                  </>
                ) : (
                  <>
                                         <Send size={18} />
                    <span>Envoyer le Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Section Chat en Direct 
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl sm:rounded-2xl p-8 sm:p-12 text-white"
          >
                         <MessageCircle className="mx-auto mb-4 sm:mb-6" size={48} />
            <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Besoin d'Aide Immédiate ?</h3>
            <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-6 sm:mb-8 px-2 sm:px-0">
              Notre équipe de support est disponible par chat en direct pendant les heures de bureau
            </p>
            <button className="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2 mx-auto text-sm sm:text-base">
                             <MessageCircle size={18} />
              <span>Démarrer le Chat</span>
            </button>
            <p className="text-xs sm:text-sm text-blue-200 mt-3 sm:mt-4">
              Disponible Lundi - Vendredi, 8h00 - 18h00 (GMT)
            </p>
          </motion.div>
        </div>
      </section>
      */}

      {/* Section Carte */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">Visitez Nos Bureaux</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 px-2 sm:px-0">Retrouvez-nous au cœur du quartier des affaires de Dakar</p>
          </motion.div>

          <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden">
            <div className="h-64 sm:h-80 md:h-96 bg-gray-200 flex items-center justify-center p-0">
              <iframe
                title="BAY SA WARR Localisation"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.893964479836!2d-17.48489382492419!3d14.74085778579259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec172e2e2b1b6b1%3A0x6e2e1b2e1b2e1b2e!2sOuakam%20Cit%C3%A9%20Avion%2C%20Dakar%2C%20S%C3%A9n%C3%A9gal!5e0!3m2!1sfr!2ssn!4v1718030000000!5m2!1sfr!2ssn"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '16rem', width: '100%', height: '100%' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="p-6 text-center">
              <p className="text-gray-600 text-base sm:text-lg font-semibold">Ouakam cité avion, Dakar, Sénégal</p>
              <p className="text-gray-500 text-sm sm:text-base">Notre localisation exacte sur la carte interactive ci-dessus</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Newsletter */}
     
    </motion.div>
  );
};

export default Contact;