import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Globe, ShoppingCart, BookOpen, Facebook, Instagram, Linkedin, Twitter, ExternalLink, Users, TrendingUp, Shield, Zap } from 'lucide-react';

const Platforms = () => {
  const platforms = [
    {
      id: 'fipa',
      title: 'Plateforme FIPA',
      subtitle: 'Foire des Produits Africains',
      description: 'Marché complet connectant les producteurs africains avec des acheteurs mondiaux. Découvrez des produits africains authentiques et connectez-vous avec des fournisseurs vérifiés.',
      icon: Globe,
      color: 'from-green-500 to-emerald-600',
      features: [
        'Catalogue de produits avec 10 000+ annonces',
        'Annuaire des fournisseurs vérifiés',
        'Services de facilitation du commerce',
        'Programmes de garantie de la qualité ',
        'Support multilingue',
        'Expérience mobile optimisée'
      ],
      stats: [
        { label: 'Produits actifs', value: '10 000+' },
        { label: 'Fournisseurs', value: '500+' },
        { label: 'Pays', value: '25' },
        { label: 'Visiteurs mensuels', value: '50K+' }
      ],
      link: '#'
    },
    {
      id: 'ecommerce',
      title: 'Solutions e-commerce',
      subtitle: 'Outils de commerce numérique complets',
      description: 'Plateforme e-commerce conçue pour les entreprises africaines. Créez votre présence en ligne avec notre suite complète d\'outils numériques.',
      icon: ShoppingCart,
      color: 'from-blue-500 to-cyan-600',
      features: [
        'Constructeur de magasins en ligne personnalisés',
        'Traitement de paiement sécurisé',
        'Système de gestion d\'inventaire',
        'Suivi des commandes et livraison',
        'Outils de marketing digital',
        'Soutien client 24h/24'
      ],
      stats: [
        { label: 'Magasins actifs', value: '1,200+' },
        { label: 'Transactions', value: '$2M+' },
        { label: 'Taux de réussite', value: '99,8%' },
        { label: 'Note de satisfaction', value: '4,9/5' }
      ],
      link: '#'
    },
    {
      id: 'blog',
      title: 'Blog des Affaires & Actualités',
      subtitle: 'Tendances, analyses et actualités des marchés africains',
      description: 'Restez informé avec les dernières tendances, analyses et actualités des marchés africains. Des conseils et des analyses d\'experts.',
      icon: BookOpen,
      color: 'from-purple-500 to-indigo-600',
      features: [
        'Mises à jour quotidiennes',
        'Analyses d\'experts sur les secteurs',
        'Histoires de réussite et études de cas',
        'Conseils de développement des affaires',
        'Mises à jour réglementaires',
        'Abonnements à la newsletter'
      ],
      stats: [
        { label: 'Articles publiés', value: '500+' },
        { label: 'Lecteurs mensuels', value: '25K+' },
        { label: 'Contributeurs experts', value: '50+' },
        { label: 'Sujets couverts', value: '100+' }
      ],
      link: '/blog'
    }
  ];

  const socialPlatforms = [
    {
      name: 'Facebook',
      icon: Facebook,
      description: 'Rejoignez notre communauté de 50 000+ leaders d\'affaires africains',
      followers: '50K+',
      color: 'bg-blue-600',
      link: '#'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      description: 'Histoires visuelles de réussite des entreprises africaines',
      followers: '25K+',
      color: 'bg-pink-600',
      link: '#'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      description: 'Réseau professionnel pour la croissance des affaires',
      followers: '30K+',
      color: 'bg-blue-700',
      link: '#'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      description: 'Mises à jour en temps réel et analyses de marché',
      followers: '20K+',
      color: 'bg-blue-400',
      link: '#'
    }
  ];

  const benefits = [
    {
      icon: Users,
      title: 'Accès communauté',
      description: 'Connectez-vous avec des milliers de leaders d\'affaires et d\'entrepreneurs africains'
    },
    {
      icon: TrendingUp,
      title: 'Analytiques de croissance',
      description: 'Suivez vos performances avec des outils de suivi et de reporting détaillés'
    },
    {
      icon: Shield,
      title: 'Transactions sécurisées',
      description: 'Sécurité bancaire pour toutes les transactions et protection des données'
    },
    {
      icon: Zap,
      title: 'Setup rapide',
      description: 'Démarrez en quelques minutes avec notre processus d\'onboarding simplifié'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-16"
    >
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">Plateformes</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Des solutions numériques exhaustives conçues pour équiper les entreprises africaines et les connecter avec les opportunités mondiales.
            </p>
            <Link
              to="/enrollments"
              className="inline-flex items-center space-x-2 bg-green-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>Démarrer dès aujourd'hui</span>
              <ExternalLink size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Main Platforms */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Plateformes clés</h2>
            <p className="text-xl text-gray-600">Des outils puissants pour chaque aspect de votre entreprise</p>
          </motion.div>

          <div className="space-y-16">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.id}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className={`relative overflow-hidden rounded-3xl bg-gradient-to-r ${platform.color} text-white`}
              >
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                          <platform.icon size={32} />
                        </div>
                        <div>
                          <h3 className="text-3xl font-bold mb-2">{platform.title}</h3>
                          <p className="text-white/80 text-lg">{platform.subtitle}</p>
                        </div>
                      </div>
                      
                      <p className="text-xl leading-relaxed text-white/90">
                        {platform.description}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {platform.features.slice(0, 4).map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                            <span className="text-white/90">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex space-x-4">
                        <Link
                          to={platform.link}
                          className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center space-x-2"
                        >
                          <span>Explorer la plateforme</span>
                          <ExternalLink size={16} />
                        </Link>
                        <Link
                          to="/enrollments"
                          className="border border-white/30 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors duration-200"
                        >
                          S'inscrire maintenant
                        </Link>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      {platform.stats.map((stat, statIndex) => (
                        <motion.div
                          key={statIndex}
                          initial={{ scale: 0.8, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          transition={{ delay: statIndex * 0.1, duration: 0.5 }}
                          viewport={{ once: true }}
                          className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl text-center"
                        >
                          <h4 className="text-3xl font-bold mb-2">{stat.value}</h4>
                          <p className="text-white/80">{stat.label}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Pourquoi choisir nos plateformes ?</h2>
            <p className="text-xl text-gray-600">Conçues spécifiquement pour les entreprises africaines</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="text-green-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Platforms */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Rejoignez-nous</h2>
            <p className="text-xl text-gray-600">Rejoignez notre communauté en pleine croissance sur les plateformes sociales</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {socialPlatforms.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.link}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="block bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 text-center group"
              >
                <div className={`w-16 h-16 ${social.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <social.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{social.name}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{social.description}</p>
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-2xl font-bold text-gray-900">{social.followers}</span>
                  <span className="text-gray-500">followers</span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Platforms;