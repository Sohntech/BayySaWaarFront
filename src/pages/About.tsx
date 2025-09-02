import { motion } from 'framer-motion';
import { path } from 'framer-motion/client';
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
    { name: 'Alliance Mondiale du Commerce', logo: 'https://res.cloudinary.com/drxouwbms/image/upload/v1756378077/345594175_690121569789202_3483034607438286277_n-removebg-preview_jv7nty.png' },
    { name: 'Initiative Digitale Afrique', logo: 'https://res.cloudinary.com/drxouwbms/image/upload/v1755780910/cropped-cropped-DA_Logo_HG-1_zejbov.png' },
    { name: 'Promotion Export Sénégal', logo: 'https://res.cloudinary.com/drxouwbms/image/upload/v1756378085/1630632559560-removebg-preview_sn0rfl.png' },
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

      <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-green-50/30 to-white relative overflow-hidden">
      {/* Advanced background elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-green-400/20 via-emerald-300/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-tl from-blue-400/15 via-green-300/10 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-green-200/10 to-blue-200/10 rounded-full blur-[100px]"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3e%3cpath d='m 60 0 l 0 60 m -60 0 l 60 0' stroke='%23000000' stroke-width='1'/%3e%3c/pattern%3e%3c/defs%3e%3crect width='100%25' height='100%25' fill='url(%23grid)' /%3e%3c/svg%3e")`
      }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
         
          <h2 className="section-title text-black">
            Mission & Vision
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Les piliers qui guident notre transformation de l'écosystème entrepreneurial africain
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Mission Card - Enhanced */}
          <div className="group relative">
            {/* Hover glow effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 rounded-[32px] opacity-0 group-hover:opacity-20 transition-all duration-500 blur-xl"></div>
            
            <div className="relative bg-white/95 backdrop-blur-2xl border border-green-100/50 rounded-[28px] p-8 sm:p-10 shadow-[0_8px_40px_0_rgba(0,0,0,0.06)] hover:shadow-[0_20px_60px_0_rgba(16,185,129,0.12)] transition-all duration-500 group-hover:border-green-200/70">
              
              {/* Top decorative line */}
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-green-300/60 to-transparent"></div>
              
              {/* Icon section with enhanced design */}
              <div className="flex items-start gap-6 mb-8">
                <div className="relative flex-shrink-0">
                  {/* Animated rings */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-green-400/30 to-emerald-500/20 animate-ping"></div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-green-400/40 to-emerald-500/30 animate-pulse"></div>
                  
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-500 via-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-xl border-4 border-white/60 group-hover:scale-110 transition-transform duration-300">
                    <Target className="text-white drop-shadow-lg" size={28} />
                  </div>
                </div>
                
                <div className="flex-grow">
                  <h3 className="text-3xl sm:text-4xl font-black mb-2 bg-gradient-to-r from-green-700 via-emerald-600 to-green-600 bg-clip-text text-transparent">
                    Notre Mission
                  </h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full group-hover:w-24 transition-all duration-300"></div>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-gray-700 text-lg leading-relaxed font-medium">
                  D'émanciper les entreprises africaines à travers des plateformes numériques innovantes, des partenariats stratégiques et des systèmes de soutien exhaustifs.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Notre approche permet une croissance durable et une compétitivité mondiale, en transformant les défis en opportunités d'excellence.
                </p>
              </div>

              {/* Action indicator */}
            
            </div>
          </div>

          {/* Vision Card - Enhanced */}
          <div className="group relative">
            {/* Hover glow effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-500 rounded-[32px] opacity-0 group-hover:opacity-15 transition-all duration-500 blur-xl"></div>
            
            <div className="relative bg-white/95 backdrop-blur-2xl border border-blue-100/40 rounded-[28px] p-8 sm:p-10 shadow-[0_8px_40px_0_rgba(0,0,0,0.06)] hover:shadow-[0_20px_60px_0_rgba(59,130,246,0.08)] transition-all duration-500 group-hover:border-blue-200/60">
              
              {/* Top decorative line */}
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-blue-300/50 to-transparent"></div>
              
              {/* Icon section with enhanced design */}
              <div className="flex items-start gap-6 mb-8">
                <div className="relative flex-shrink-0">
                  {/* Animated rings */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/25 to-indigo-500/15 animate-ping" style={{animationDelay: '0.5s'}}></div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/35 to-indigo-500/25 animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 via-indigo-500 to-blue-600 rounded-full flex items-center justify-center shadow-xl border-4 border-white/60 group-hover:scale-110 transition-transform duration-300">
                    <Eye className="text-white drop-shadow-lg" size={28} />
                  </div>
                </div>
                
                <div className="flex-grow">
                  <h3 className="text-3xl sm:text-4xl font-black mb-2 bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
                    Notre Vision
                  </h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-400 rounded-full group-hover:w-24 transition-all duration-300"></div>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-gray-700 text-lg leading-relaxed font-medium">
                  D'être le catalyseur principal de la transformation des entreprises africaines, en créant un marché continental unifié.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Un écosystème où l'innovation, l'excellence et la collaboration stimulent une prospérité économique sans précédent à travers tout le continent.
                </p>
              </div>

              {/* Action indicator */}
             
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
     
      </div>
    </section>

      {/* Values */}
      <section className="relative py-16 sm:py-24 bg-white overflow-hidden">
        {/* Subtle background shapes */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-green-100/60 to-emerald-100/0 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tr from-green-200/40 to-emerald-200/0 rounded-full blur-2xl"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4 tracking-tight">
              Nos Valeurs Fondamentales
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Les principes essentiels qui inspirent et guident chacune de nos actions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.12, duration: 0.6, type: "spring", stiffness: 60 }}
                viewport={{ once: true }}
                className="group relative flex flex-col items-center bg-white/80 border border-green-100 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 px-6 py-8 sm:px-8 sm:py-10"
              >
                {/* Glow ring */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-20 h-20 z-0">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-green-400/20 via-emerald-400/10 to-green-600/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                {/* Icon */}
                <div className="relative z-10 mb-5">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-green-100 via-emerald-50 to-white rounded-full flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300">
                    <value.icon className="text-green-600 group-hover:text-emerald-600 transition-colors duration-300" size={32} />
                  </div>
                </div>
                {/* Title */}
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 tracking-tight">
                  {value.title}
                </h3>
                {/* Description */}
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base font-medium text-balance">
                  {value.description}
                </p>
                {/* Minimalistic divider */}
                <div className="mt-6 w-8 h-1 rounded-full bg-gradient-to-r from-green-400 via-emerald-400 to-green-600 opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-14 bg-gray-50 overflow-hidden">
      {/* Subtle background geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gray-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-20 right-20 w-60 h-60 bg-gray-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-gray-200/25 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-balance">
            Nos Activités Principales
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-pretty">
            Solutions globales pour les entreprises africaines modernes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="group relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:scale-105"
              style={{
                background: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(16, 185, 129, 0.2)',
                borderRadius: '24px',
                padding: '24px',
                boxShadow: `
                  0 32px 80px rgba(0, 0, 0, 0.08),
                  0 16px 40px rgba(16, 185, 129, 0.15),
                  inset 0 1px 0 rgba(255, 255, 255, 0.8)
                `
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(16, 185, 129, 0.4)';
                e.currentTarget.style.boxShadow = `
                  0 48px 120px rgba(0, 0, 0, 0.12),
                  0 24px 60px rgba(16, 185, 129, 0.25),
                  inset 0 1px 0 rgba(255, 255, 255, 0.9)
                `;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(16, 185, 129, 0.2)';
                e.currentTarget.style.boxShadow = `
                  0 32px 80px rgba(0, 0, 0, 0.08),
                  0 16px 40px rgba(16, 185, 129, 0.15),
                  inset 0 1px 0 rgba(255, 255, 255, 0.8)
                `;
              }}
            >
              {/* Animated background gradient */}
              <div 
                className="absolute inset-0 rounded-3xl opacity-60 pointer-events-none"
                style={{
                  background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, rgba(5, 150, 105, 0.04) 50%, transparent 100%)'
                }}
              />
              
              {/* Tech scanning lines */}
              <div 
                className="absolute inset-0 rounded-3xl opacity-30 pointer-events-none"
                style={{
                  background: `
                    linear-gradient(90deg, transparent 0%, rgba(16, 185, 129, 0.15) 50%, transparent 100%),
                    linear-gradient(0deg, transparent 0%, rgba(5, 150, 105, 0.12) 50%, transparent 100%)
                  `,
                  backgroundSize: '100% 2px, 2px 100%',
                  backgroundPosition: '0 50%, 50% 0',
                  animation: 'techScan 6s linear infinite'
                }}
              />

              {/* Corner accents */}
              <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-emerald-400/60 rounded-tl-lg"></div>
              <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-emerald-400/60 rounded-br-lg"></div>

              <div className="flex items-start gap-4 relative z-10">
                {/* Icon with futuristic styling */}
                <div className="flex-shrink-0">
                  <div 
                    className="relative w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300"
                    style={{
                      background: 'linear-gradient(135deg, #10b981 0%, #059669 30%, #047857 70%, #065f46 100%)',
                      boxShadow: `
                        0 20px 40px rgba(16, 185, 129, 0.25),
                        inset 0 2px 0 rgba(255, 255, 255, 0.3)
                      `,
                      animation: 'iconFloat 4s ease-in-out infinite'
                    }}
                  >
                    {/* Icon glow effect */}
                    <div 
                      className="absolute -inset-2 rounded-full opacity-60"
                      style={{
                        background: 'radial-gradient(ellipse, rgba(16, 185, 129, 0.3) 0%, transparent 70%)',
                        animation: 'pulse 2s ease-in-out infinite'
                      }}
                    />
                    
                    {/* Inner highlight */}
                    <div 
                      className="absolute top-1 left-1 w-4 h-4 rounded-lg opacity-80"
                      style={{
                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.3) 50%, transparent 100%)',
                        animation: 'shimmer 3s ease-in-out infinite'
                      }}
                    />
                    
                    <activity.icon className="w-6 h-6 text-white relative z-10" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-2">
                  <h3 
                    className="text-lg font-bold"
                    style={{
                      background: 'linear-gradient(135deg, #1f2937 0%, #4b5563 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      textShadow: '0 2px 10px rgba(16, 185, 129, 0.1)',
                      animation: 'titleGlow 4s ease-in-out infinite'
                    }}
                  >
                    {activity.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{activity.description}</p>
                  
                  {/* Features */}
                  <div className="pt-2">
                    <div className="flex flex-wrap gap-1.5">
                      {activity.features.map((feature, featureIndex) => (
                        <span 
                          key={featureIndex} 
                          className="text-xs px-3 py-1 rounded-full border transition-all duration-200 hover:-translate-y-0.5"
                          style={{
                            borderColor: 'rgba(16, 185, 129, 0.3)',
                            color: '#065f46',
                            background: 'rgba(16, 185, 129, 0.1)',
                            backdropFilter: 'blur(4px)',
                            boxShadow: '0 2px 8px rgba(16, 185, 129, 0.1)'
                          }}
                          onMouseEnter={(e) => {
                            const target = e.target as HTMLElement;
                            target.style.borderColor = 'rgba(16, 185, 129, 0.5)';
                            target.style.background = 'rgba(16, 185, 129, 0.15)';
                          }}
                          onMouseLeave={(e) => {
                            const target = e.target as HTMLElement;
                            target.style.borderColor = 'rgba(16, 185, 129, 0.3)';
                            target.style.background = 'rgba(16, 185, 129, 0.1)';
                          }}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* Leadership Team - Modern Futuristic Minimal UI */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-br from-white via-slate-50 to-slate-100 overflow-hidden">
        {/* Futuristic blurred gradient shapes */}
        <div className="pointer-events-none absolute -top-32 -left-32 w-[32rem] h-[32rem] bg-gradient-to-br from-green-400/20 via-emerald-400/10 to-green-600/10 rounded-full blur-3xl"></div>
        <div className="pointer-events-none absolute -bottom-40 -right-40 w-[32rem] h-[32rem] bg-gradient-to-tr from-green-300/15 to-teal-500/15 rounded-full blur-3xl"></div>
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 opacity-5 z-0">
          <div className="w-full h-full bg-[linear-gradient(rgba(16,185,129,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.08)_1px,transparent_1px)]" style={{ backgroundSize: '48px 48px' }}></div>
        </div>
        <div className="relative max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-8 z-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title">
              Équipe de Direction
            </h2>
            <p className="section-subtitle">
              Des leaders expérimentés qui font avancer notre vision
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 sm:gap-6">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.10, duration: 0.6, type: "spring", stiffness: 60 }}
                viewport={{ once: true }}
                className="relative group bg-white/90 backdrop-blur-2xl border border-white/60 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 p-5 sm:p-6 flex flex-col items-center"
                style={{ minHeight: 0 }}
              >
                {/* Futuristic floating ring */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-24 h-24 z-0">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-green-400/30 via-emerald-400/20 to-green-600/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                {/* Avatar with glow */}
                <div className="relative mb-3">
                  <div className="absolute inset-0 w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto bg-gradient-to-br from-green-400/30 via-emerald-400/20 to-green-600/20 blur-lg opacity-0 group-hover:opacity-80 transition-opacity duration-500"></div>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto object-cover border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                {/* Name */}
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 tracking-tight text-center">{member.name}</h3>
                {/* Role */}
                <p className="text-green-600 font-semibold mb-1 text-xs sm:text-sm uppercase tracking-wider text-center">{member.role}</p>
                {/* Bio */}
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed text-center font-medium">{member.bio}</p>
                {/* Minimal divider */}
                <div className="mx-auto mt-4 w-8 h-1 rounded-full bg-gradient-to-r from-green-400 via-emerald-400 to-green-600 opacity-20 group-hover:opacity-60 transition-opacity duration-300"></div>
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
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4 tracking-tight"
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