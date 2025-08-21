import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Clock, Share2, Facebook, Twitter, Linkedin, BookOpen, Tag } from 'lucide-react';

const BlogPost = () => {
  const { id } = useParams();

  // Mock blog post data - in a real app, this would be fetched based on the ID
  const post = {
    id: id,
    title: 'The Future of African E-commerce: Trends Shaping 2025',
    content: `
      <p>The African e-commerce landscape is experiencing unprecedented growth, with digital transformation accelerating across the continent. As we look toward 2025, several key trends are emerging that will fundamentally reshape how businesses operate and consumers shop in Africa.</p>

      <h2>Mobile-First Revolution</h2>
      <p>With mobile phone penetration reaching over 80% across sub-Saharan Africa, the mobile-first approach is no longer optional—it's essential. Businesses that prioritize mobile experiences are seeing conversion rates up to 300% higher than their desktop-focused competitors.</p>

      <p>The rise of mobile money services like M-Pesa, Orange Money, and MTN Mobile Money has created a robust payment infrastructure that bypasses traditional banking systems. This has opened up e-commerce opportunities for millions of previously unbanked Africans.</p>

      <h2>Blockchain and Cryptocurrency Integration</h2>
      <p>African markets are leading the world in cryptocurrency adoption, with countries like Nigeria, Kenya, and South Africa showing remarkable growth in crypto usage. Forward-thinking e-commerce platforms are beginning to integrate blockchain technology for:</p>

      <ul>
        <li>Transparent supply chain tracking</li>
        <li>Secure cross-border transactions</li>
        <li>Smart contracts for automated business processes</li>
        <li>Decentralized identity verification</li>
      </ul>

      <h2>Artificial Intelligence and Personalization</h2>
      <p>AI-powered personalization is becoming increasingly sophisticated, allowing e-commerce platforms to offer highly targeted product recommendations and customized shopping experiences. Machine learning algorithms are being used to:</p>

      <ul>
        <li>Predict customer behavior and preferences</li>
        <li>Optimize inventory management</li>
        <li>Automate customer service through intelligent chatbots</li>
        <li>Enhance fraud detection and security</li>
      </ul>

      <h2>Sustainable and Ethical Commerce</h2>
      <p>African consumers are increasingly conscious of sustainability and ethical business practices. E-commerce platforms that prioritize environmental responsibility and fair trade practices are gaining significant market share.</p>

      <p>This trend is driving innovation in packaging, logistics, and supply chain management, with companies investing in eco-friendly solutions and supporting local communities.</p>

      <h2>Cross-Border Trade Facilitation</h2>
      <p>The African Continental Free Trade Area (AfCFTA) is creating new opportunities for cross-border e-commerce. Platforms that can navigate the complex regulatory landscape while providing seamless cross-border shopping experiences will dominate the market.</p>

      <h2>Looking Ahead</h2>
      <p>As we move toward 2025, the African e-commerce landscape will continue to evolve rapidly. Businesses that embrace these trends while staying true to local market needs will be best positioned for success.</p>

      <p>The future is bright for African e-commerce, with innovation, technology, and entrepreneurship driving unprecedented growth across the continent. Companies like BAY SA WAAR are at the forefront of this transformation, providing the tools and platforms necessary for businesses to thrive in this new digital economy.</p>
    `,
    author: 'Amadou Diallo',
    authorBio: 'CEO & Founder of BAY SA WAAR with 15+ years of experience in African business development and digital transformation.',
    date: '2025-01-15',
    category: 'Technology',
    readTime: '8 min read',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tags: ['E-commerce', 'Technology', 'Africa', 'Digital Transformation', 'Mobile Commerce'],
    relatedPosts: [
      {
        id: '2',
        title: 'Building Successful Partnerships Across African Markets',
        image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      {
        id: '4',
        title: 'Leveraging Technology for Supply Chain Optimization',
        image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400'
      }
    ]
  };

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = post.title;
    
    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
    };

    window.open(shareUrls[platform as keyof typeof shareUrls], '_blank', 'width=600,height=400');
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'Business Strategy': 'bg-green-100 text-green-800',
      'Technology': 'bg-blue-100 text-blue-800',
      'Market Insights': 'bg-purple-100 text-purple-800',
      'Success Stories': 'bg-orange-100 text-orange-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-16"
    >
      {/* Back Navigation */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/blog"
            className="inline-flex items-center space-x-2 text-green-600 hover:text-green-700 transition-colors duration-200"
          >
            <ArrowLeft size={20} />
            <span>Back to Blog</span>
          </Link>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${getCategoryColor(post.category)}`}>
              {post.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-gray-600 mb-8">
              <div className="flex items-center space-x-2">
                <User size={16} />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar size={16} />
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={16} />
                <span>{post.readTime}</span>
              </div>
            </div>

            {/* Share Buttons */}
            <div className="flex items-center justify-center space-x-4">
              <span className="text-sm text-gray-600 flex items-center space-x-2">
                <Share2 size={16} />
                <span>Share:</span>
              </span>
              <button
                onClick={() => handleShare('facebook')}
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors duration-200"
              >
                <Facebook size={16} />
              </button>
              <button
                onClick={() => handleShare('twitter')}
                className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center text-white hover:bg-blue-500 transition-colors duration-200"
              >
                <Twitter size={16} />
              </button>
              <button
                onClick={() => handleShare('linkedin')}
                className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center text-white hover:bg-blue-800 transition-colors duration-200"
              >
                <Linkedin size={16} />
              </button>
            </div>
          </motion.div>

          {/* Featured Image */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-12"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="prose prose-lg prose-green max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
            style={{
              fontSize: '18px',
              lineHeight: '1.8',
              color: '#374151'
            }}
          />
        </div>
      </section>

      {/* Tags */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center space-x-2">
            <Tag className="text-gray-600" size={20} />
            <span className="text-gray-600 font-medium">Tags:</span>
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Author Bio */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-2xl p-8"
          >
            <div className="flex items-start space-x-6">
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                {post.author.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">About {post.author}</h3>
                <p className="text-gray-600 leading-relaxed">{post.authorBio}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Related Articles</h2>
            <p className="text-gray-600">Continue reading with these related insights</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {post.relatedPosts.map((relatedPost, index) => (
              <motion.div
                key={relatedPost.id}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-green-600 transition-colors duration-200">
                    {relatedPost.title}
                  </h3>
                  <Link
                    to={`/blog/${relatedPost.id}`}
                    className="inline-flex items-center space-x-2 text-green-600 font-semibold hover:text-green-700 transition-colors duration-200"
                  >
                    <BookOpen size={16} />
                    <span>Read Article</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default BlogPost;