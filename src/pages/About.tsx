import { motion } from 'framer-motion';
import { Target, Eye, Heart, Users, Award, Globe, TrendingUp, Handshake } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'Nous visons la plus haute qualité dans tout ce que nous faisons, des produits aux partenariats.',
    },
    {
      icon: Heart,
      title: 'Intégrité',
      description: 'Pratiques commerciales honnêtes et transparentes qui créent la confiance et des relations durables.',
    },
    {
      icon: Users,
      title: 'Communauté',
      description: 'Soutenir les entreprises africaines et favoriser une croissance collaborative à travers le continent.',
    },
    {
      icon: Globe,
      title: 'Innovation',
      description: 'Adopter la technologie et des solutions créatives pour résoudre les défis commerciaux traditionnels.',
    },
  ];

  const activities = [
    {
      icon: Globe,
      title: 'Plateforme FIPA',
      description: 'Place de marché complète connectant les producteurs africains aux acheteurs mondiaux.',
      features: ['Catalogue Produits', 'Annuaire Fournisseurs', 'Facilitation Commerciale', 'Assurance Qualité'],
    },
    {
      icon: TrendingUp,
      title: 'Solutions E-commerce',
      description: 'Outils de commerce digital complets pour les entreprises africaines modernes.',
      features: ['Création de Boutique en Ligne', 'Traitement des Paiements', 'Support Logistique', 'Marketing Digital'],
    },
    {
      icon: Handshake,
      title: 'Programmes de Partenariat',
      description: 'Alliances stratégiques favorisant la croissance mutuelle et l\'expansion du marché.',
      features: ['Réseau de Distributeurs', 'Programmes d\'Agents', 'Coentreprises', 'Renforcement des Capacités'],
    },
    {
      icon: Award,
      title: 'Conseil aux Entreprises',
      description: 'Conseils experts pour le développement durable des entreprises.',
      features: ['Analyse de Marché', 'Développement Stratégique', 'Optimisation des Processus', 'Programmes de Formation'],
    },
  ];

  const team = [
    {
      name: 'Fatou Fabira Dramé',
      role: 'PDG & Fondatrice',
      bio: 'Leader visionnaire avec plus de 15 ans d\'expérience dans le commerce international et le développement des affaires en Afrique.',
      image: 'https://res.cloudinary.com/drxouwbms/image/upload/v1755778170/Web_Photo_Editor_1_nik1li.jpg',
    },
    {
      name: 'Fatou Ndiaye',
      role: 'Directrice des Opérations',
      bio: 'Experte en gestion de la chaîne d\'approvisionnement et des opérations de plateforme avec une connaissance approfondie du marché africain.',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Kwame Mensah',
      role: 'Directeur Technique',
      bio: 'Innovateur technologique spécialisé dans les plateformes e-commerce et la transformation digitale.',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Amina Kone',
      role: 'Directrice des Partenariats',
      bio: 'Développeuse de relations avec un vaste réseau sur les marchés africains et internationaux.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  const partners = [
    { name: 'Banque Africaine de Développement', logo: 'https://res.cloudinary.com/drxouwbms/image/upload/v1755780237/Logo_Afrikanische_Entwicklungsbank.svg_oa7ujv.png' },
    { name: 'Commission du Commerce CEDEAO', logo: 'https://res.cloudinary.com/drxouwbms/image/upload/v1755780576/CEDEAO_Logo.svg_vobzi6.png' },
    { name: 'Alliance Mondiale du Commerce', logo: 'https://res.cloudinary.com/drxouwbms/image/upload/v1755780767/345594175_690121569789202_3483034607438286277_n_m3bu7o.jpg' },
    { name: 'Initiative Digitale Afrique', logo: 'https://res.cloudinary.com/drxouwbms/image/upload/v1755780910/cropped-cropped-DA_Logo_HG-1_zejbov.png' },
    { name: 'Promotion Export Sénégal', logo: 'https://res.cloudinary.com/drxouwbms/image/upload/v1755781036/1630632559560_epsrut.jpg' },
    { name: 'Gouvernement du Sénégal', logo: 'https://res.cloudinary.com/drxouwbms/image/upload/v1755781150/Coat_of_arms_of_Senegal.svg_bzqaft.png' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 md:py-24 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(https://res.cloudinary.com/drxouwbms/image/upload/v1755949759/Screenshot_2025-08-23_at_11_41_05_1_-Picsart-AiImageEnhancer_kfsp1y.png)' }}>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              À propos de <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">BAY SA WARR</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed px-4">
              Pionnier de l'excellence des entreprises africaines grâce à des plateformes innovantes, 
              des partenariats stratégiques et un engagement indéfectible envers la croissance continentale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Notre Histoire</h2>
              <div className="space-y-4 sm:space-y-6">
                <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                  Fondée en 2018, BAY SA WARR est née d'une vision simple mais puissante : 
                  créer un écosystème complet où les entreprises africaines pourraient prospérer, 
                  se connecter et concurrencer sur la scène mondiale.
                </p>
                <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                  Ce qui a commencé comme une initiative locale au Sénégal a grandi en une 
                  plateforme continentale servant plus de 10 000 entreprises dans plus de 50 
                  pays. Notre succès est basé sur la compréhension des défis et des opportunités 
                  uniques au sein des marchés africains.
                </p>
                <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                  Aujourd'hui, nous sommes fiers d'être reconnus comme une force motrice dans 
                  le commerce numérique africain, facilitant des millions de dollars de valeur 
                  commerciale et créant des partenariats durables qui stimulent la croissance 
                  économique à travers le continent.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative order-1 lg:order-2"
            >
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="African business meeting"
                className="rounded-2xl shadow-2xl w-full h-64 sm:h-80 md:h-96 object-cover"
              />
              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-green-600 p-4 sm:p-6 rounded-2xl shadow-xl">
                <p className="text-white font-bold text-xl sm:text-2xl">+7 ans</p>
                <p className="text-green-100 text-sm">d'excellence</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg"
            >
              <div className="flex items-start sm:items-center mb-4 sm:mb-6 flex-col sm:flex-row">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-600 rounded-full flex items-center justify-center mb-4 sm:mb-0 sm:mr-4">
                  <Target className="text-white" size={24} />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Notre mission</h3>
              </div>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                D'émanciper les entreprises africaines à travers des plateformes 
                numériques innovantes, des partenariats stratégiques et des systèmes 
                de soutien exhaustifs qui permettent une croissance durable et une 
                compétitivité mondiale.
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg"
            >
              <div className="flex items-start sm:items-center mb-4 sm:mb-6 flex-col sm:flex-row">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 sm:mb-0 sm:mr-4">
                  <Eye className="text-white" size={24} />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Notre vision</h3>
              </div>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                D'être le catalyseur principal de la transformation des entreprises 
                africaines, en créant un marché continental unifié où l'innovation, 
                l'excellence et la collaboration stimulent une prospérité économique 
                sans précédent.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nos Valeurs Fondamentales</h2>
            <p className="text-lg sm:text-xl text-gray-600">Les principes qui guident tout ce que nous faisons</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="text-green-600" size={24} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Activities */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nos Activités Principales</h2>
            <p className="text-lg sm:text-xl text-gray-600">Solutions globales pour les entreprises africaines modernes</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start sm:items-center mb-4 sm:mb-6 flex-col sm:flex-row">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-600 rounded-2xl flex items-center justify-center mb-4 sm:mb-0 sm:mr-4">
                    <activity.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{activity.title}</h3>
                </div>
                <p className="text-gray-700 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">{activity.description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  {activity.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-xs sm:text-sm text-gray-600">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Équipe de Direction</h2>
            <p className="text-lg sm:text-xl text-gray-600">Des leaders expérimentés qui font avancer notre vision</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="relative mb-4 sm:mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mx-auto object-cover shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                  />
                  <div className="absolute inset-0 w-24 h-24 sm:w-32 sm:h-32 rounded-full mx-auto bg-green-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-green-600 font-semibold mb-2 sm:mb-3 text-sm sm:text-base">{member.role}</p>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
      {/* Animated Background with Light Gradients */}
      <div className="absolute inset-0 bg-white">
        <div className="absolute inset-0 bg-gradient-to-t from-green-50/30 to-transparent"></div>
      </div>
      
      {/* Floating Geometric Shapes */}
     

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-[linear-gradient(rgba(34,197,94,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.1)_1px,transparent_1px)]" 
             style={{ backgroundSize: '50px 50px' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block mb-6"
          >
           
          </motion.div>
          
          <motion.h2 
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <span className="bg-black bg-clip-text text-transparent">
              Nos Partenaires
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            En collaboration avec des{" "}
            <span className="text-transparent bg-black bg-clip-text font-semibold">
              organisations de premier plan
            </span>{" "}
            partout en Afrique
          </motion.p>
        </motion.div>

        {/* Partners Grid with Advanced Animations */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 lg:gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { 
                  y: 60, 
                  opacity: 0, 
                  scale: 0.8,
                  rotateY: -30 
                },
                visible: { 
                  y: 0, 
                  opacity: 1, 
                  scale: 1,
                  rotateY: 0,
                  transition: {
                    duration: 0.8,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }
                },
              }}
              whileHover={{ 
                scale: 1.1, 
                y: -10,
                rotateY: 10,
                transition: { duration: 0.3, ease: "easeOut" } 
              }}
              className="group flex items-center justify-center perspective-1000"
            >
              <div className="relative">
                {/* Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-green-300/30 to-emerald-400/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  whileHover={{
                    scale: 1.2,
                  }}
                />
                
                {/* Partner Logo Container */}
                <motion.div 
                  className="relative bg-white/80 backdrop-blur-xl border border-green-200/50 rounded-3xl p-6 sm:p-8 transition-all duration-500 group-hover:bg-white/90 group-hover:border-green-300 shadow-lg group-hover:shadow-2xl"
                  whileHover={{
                    boxShadow: "0 25px 50px -12px rgba(34, 197, 94, 0.25)",
                  }}
                >
                  {/* Inner Glow */}
                  <div className="absolute inset-1 bg-gradient-to-br from-green-50/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain relative z-10 filter brightness-100 group-hover:brightness-110 transition-all duration-500"
                  />
                  
                  {/* Animated Border */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100"
                    style={{
                      background: "linear-gradient(45deg, transparent, rgba(34, 197, 94, 0.3), transparent, rgba(16, 185, 129, 0.3), transparent)",
                      backgroundSize: "300% 300%",
                    }}
                    animate={{
                      backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Bottom Section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 text-gray-500 hover:text-green-600 transition-colors duration-300 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-sm font-medium">Et bien d'autres organisations innovantes</span>
            <motion.div
              className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [1, 0.5, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
    </motion.div>
  );
};

export default About;