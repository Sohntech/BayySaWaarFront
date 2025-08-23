import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

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
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState('');

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Siège Social',
      details: ['123 Quartier des Affaires', 'Dakar, Sénégal', 'Afrique de l\'Ouest'],
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Phone,
      title: 'Numéros de Téléphone',
      details: ['+221 77 123 4567', '+221 33 456 7890', 'Urgence: +221 70 999 0000'],
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Mail,
      title: 'Adresses Email',
      details: ['contact@baysawaar.com', 'support@baysawaar.com', 'partenariats@baysawaar.com'],
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

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setNewsletterStatus('loading');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setNewsletterStatus('success');
      setNewsletterEmail('');
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setNewsletterStatus('error');
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
      <section className="relative py-24 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(https://res.cloudinary.com/drxouwbms/image/upload/v1755949759/Screenshot_2025-08-23_at_11_41_05_1_-Picsart-AiImageEnhancer_kfsp1y.png)' }}>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Contactez <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">Nous</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Nous sommes là pour vous aider à réussir. Contactez-nous pour du support, des partenariats ou toute question sur nos services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Informations de Contact */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Coordonnées</h2>
            <p className="text-xl text-gray-600">Plusieurs façons de nous contacter</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className={`w-16 h-16 ${info.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <info.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{info.title}</h3>
                <div className="space-y-2">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-gray-600">{detail}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulaire de Contact */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Envoyez-nous un Message</h2>
            <p className="text-xl text-gray-600">Choisissez une catégorie et dites-nous comment nous pouvons vous aider</p>
          </motion.div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            {/* Category Tabs */}
            <div className="flex flex-col sm:flex-row mb-8 space-y-2 sm:space-y-0 sm:space-x-4">
              {contactCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setActiveTab(category.id);
                    setFormData(prev => ({ ...prev, category: category.id }));
                  }}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                    activeTab === category.id
                      ? 'bg-green-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.title}
                </button>
              ))}
            </div>

            <div className="mb-6 p-4 bg-green-50 rounded-lg">
              <p className="text-green-800">
                <strong>Sélectionné :</strong> {contactCategories.find(cat => cat.id === activeTab)?.description}
              </p>
            </div>

            {submitStatus && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mb-6 p-4 rounded-lg flex items-center space-x-3 ${
                  submitStatus === 'success'
                    ? 'bg-green-50 text-green-800'
                    : 'bg-red-50 text-red-800'
                }`}
              >
                {submitStatus === 'success' ? (
                  <CheckCircle className="text-green-600" size={20} />
                ) : (
                  <AlertCircle className="text-red-600" size={20} />
                )}
                <span>
                  {submitStatus === 'success'
                    ? 'Votre message a été envoyé avec succès ! Nous vous répondrons dans les 24 heures.'
                    : 'Une erreur s\'est produite lors de l\'envoi de votre message. Veuillez réessayer.'}
                </span>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nom Complet *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Adresse Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Numéro de Téléphone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Entreprise/Organisation
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Sujet *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  placeholder="Veuillez fournir autant de détails que possible..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    <span>Envoi en cours...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Envoyer le Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Section Chat en Direct */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white"
          >
            <MessageCircle className="mx-auto mb-6" size={64} />
            <h3 className="text-3xl font-bold mb-4">Besoin d'Aide Immédiate ?</h3>
            <p className="text-xl text-blue-100 mb-8">
              Notre équipe de support est disponible par chat en direct pendant les heures de bureau
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2 mx-auto">
              <MessageCircle size={20} />
              <span>Démarrer le Chat</span>
            </button>
            <p className="text-sm text-blue-200 mt-4">
              Disponible Lundi - Vendredi, 8h00 - 18h00 (GMT)
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section Carte */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Visitez Nos Bureaux</h2>
            <p className="text-xl text-gray-600">Retrouvez-nous au cœur du quartier des affaires de Dakar</p>
          </motion.div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="h-96 bg-gray-200 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="mx-auto mb-4 text-gray-400" size={48} />
                <p className="text-gray-600 text-lg">Carte Interactive</p>
                <p className="text-gray-500">123 Quartier des Affaires, Dakar, Sénégal</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Newsletter */}
      <section className="py-16 bg-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">Restez Informé</h2>
            <p className="text-xl text-green-100 mb-8">
              Abonnez-vous à notre newsletter pour recevoir nos dernières actualités et opportunités
            </p>

            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row max-w-md mx-auto space-y-4 sm:space-y-0 sm:space-x-4">
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Votre adresse email"
                required
                className="flex-1 px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-4 focus:ring-green-300"
              />
              <button
                type="submit"
                disabled={newsletterStatus === 'loading'}
                className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200"
              >
                {newsletterStatus === 'loading' ? 'Inscription...' : 'S\'abonner'}
              </button>
            </form>

            {newsletterStatus === 'success' && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-100 mt-4"
              >
                Merci de votre inscription ! Vous recevrez bientôt nos dernières actualités.
              </motion.p>
            )}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;