import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('latest');

  const categories = [
    { id: 'all', name: 'Tous les Articles', count: 24 },
    { id: 'business', name: 'Stratégie d\'Entreprise', count: 8 },
    { id: 'technology', name: 'Technologie', count: 6 },
    { id: 'market', name: 'Aperçu du Marché', count: 5 },
    { id: 'success', name: 'Histoires de Réussite', count: 5 }
  ];

  const featuredPost = {
    id: 'featured-1',
    title: 'L\'Avenir du E-commerce Africain : Les Tendances qui Façonnent 2025',
    excerpt: 'Découvrez les tendances clés et les innovations qui définiront le e-commerce africain en 2025, des solutions mobiles à l\'intégration de la blockchain.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200',
    author: 'Amadou Diallo',
    date: '2025-01-15',
    category: 'Technologie',
    readTime: '8 min de lecture',
    featured: true
  };

  const posts = [
    {
      id: '1',
      title: 'Construire des Partenariats Réussis sur les Marchés Africains',
      excerpt: 'Apprenez les stratégies essentielles pour créer et maintenir des partenariats commerciaux rentables à travers l\'Afrique.',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Fatou Ndiaye',
      date: '2025-01-12',
      category: 'Stratégie d\'Entreprise',
      readTime: '6 min de lecture'
    },
    {
      id: '2',
      title: 'Histoire de Transformation Digitale : Ghana Gold',
      excerpt: 'Comment Ghana Gold a augmenté son chiffre d\'affaires de 300% grâce à la transformation digitale et l\'intégration de plateforme.',
      image: 'https://images.pexels.com/photos/8088018/pexels-photo-8088018.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Kwame Mensah',
      date: '2025-01-10',
      category: 'Histoires de Réussite',
      readTime: '5 min de lecture'
    },
    {
      id: '3',
      title: 'Analyse du Marché : Croissance de l\'Industrie Textile en Afrique de l\'Ouest',
      excerpt: 'Analyse complète des opportunités de croissance et des défis dans le secteur de la fabrication textile en Afrique de l\'Ouest.',
      image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Amina Kone',
      date: '2025-01-08',
      category: 'Aperçu du Marché',
      readTime: '7 min de lecture'
    },
    {
      id: '4',
      title: 'Optimisation de la Chaîne d\'Approvisionnement par la Technologie',
      excerpt: 'Découvrez comment les solutions technologiques modernes peuvent optimiser vos opérations de chaîne d\'approvisionnement et réduire les coûts.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Ibrahim Touré',
      date: '2025-01-05',
      category: 'Technologie',
      readTime: '9 min de lecture'
    },
    {
      id: '5',
      title: 'Mises à Jour Réglementaires : Nouvelles Politiques Commerciales de la CEDEAO',
      excerpt: 'Restez informé des derniers changements réglementaires affectant les opérations commerciales dans les États membres de la CEDEAO.',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Amadou Diallo',
      date: '2025-01-03',
      category: 'Aperçu du Marché',
      readTime: '4 min de lecture'
    },
    {
      id: '6',
      title: 'De Start-up à Leader : Les Leçons des Exportations Sénégalaises',
      excerpt: 'Le parcours inspirant d\'une petite start-up textile devenue une entreprise majeure d\'exportation servant 15 pays.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Fatou Ndiaye',
      date: '2025-01-01',
      category: 'Histoires de Réussite',
      readTime: '6 min de lecture'
    }
  ];

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || 
                           post.category.toLowerCase().replace(' ', '') === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedPosts = [...filteredPosts].sort((a, b) => {
    if (sortBy === 'latest') {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    } else if (sortBy === 'oldest') {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    }
    return 0;
  });

  const getCategoryColor = (category: string) => {
    const colors = {
      'Stratégie d\'Entreprise': 'bg-green-100 text-green-800',
      'Technologie': 'bg-blue-100 text-blue-800',
      'Aperçu du Marché': 'bg-purple-100 text-purple-800',
      'Histoires de Réussite': 'bg-orange-100 text-orange-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen "
    >
      {/* Hero Section */}
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
              Actualités <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">Business</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto px-2 sm:px-0">
              Analyses d'experts, études de marché et success stories de l'écosystème entrepreneurial africain.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">Article à la Une</h2>
            <p className="text-gray-600 text-sm sm:text-base">Nos dernières analyses importantes</p>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl"
          >
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px]">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50" />
              
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                  <div className="max-w-3xl text-white">
                    <span className={`inline-block px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4 ${getCategoryColor(featuredPost.category)} text-gray-900 bg-white`}>
                      {featuredPost.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight">
                      {featuredPost.title}
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6 opacity-90 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 mb-4 sm:mb-6 text-xs sm:text-sm">
                      <div className="flex items-center space-x-2">
                        <User size={14} className="sm:w-4 sm:h-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar size={14} className="sm:w-4 sm:h-4" />
                        <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                      </div>
                      <span>{featuredPost.readTime}</span>
                    </div>
                    <Link
                      to={`/blog/${featuredPost.id}`}
                      className="inline-flex items-center space-x-2 bg-green-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold hover:bg-green-700 transition-colors duration-200 text-sm sm:text-base"
                    >
                      <span>Lire l'Article</span>
                      <ArrowRight size={14} className="sm:w-4 sm:h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-6 sm:py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
                              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Rechercher des articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 sm:pl-10 pr-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-colors duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-green-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base"
            >
              <option value="latest">Plus Récents</option>
              <option value="oldest">Plus Anciens</option>
            </select>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {sortedPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                    <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(post.category)}`}>
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 leading-tight group-hover:text-green-600 transition-colors duration-200">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4 space-y-1 sm:space-y-0">
                    <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-4">
                      <div className="flex items-center space-x-1">
                        <User size={12} className="sm:w-3.5 sm:h-3.5" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar size={12} className="sm:w-3.5 sm:h-3.5" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <span>{post.readTime}</span>
                  </div>

                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center space-x-2 text-green-600 font-semibold hover:text-green-700 transition-colors duration-200 text-sm sm:text-base"
                  >
                    <span>Lire Plus</span>
                    <ArrowRight size={14} className="sm:w-4 sm:h-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          {sortedPosts.length === 0 && (
            <div className="text-center py-8 sm:py-12">
              <p className="text-gray-600 text-base sm:text-lg">Aucun article ne correspond à vos critères.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Subscription */}
     
    </motion.div>
  );
};

export default Blog;