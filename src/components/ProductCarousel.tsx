import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const ProductCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const products = [
    {
      id: 1,
      title: 'Collection de tissus africains',
      description: 'Tissus traditionnels de haute qualité en provenance de l\'Afrique de l\'Ouest',
      image: 'https://res.cloudinary.com/drxouwbms/image/upload/v1755782417/360_F_821553966_khVu9EC8bwgtCrGFJXon1Sbpm7WRINLm_cncxf1.jpg',
      category: 'Tissus',
      price: 'A partir de $25',
    },
    {
      id: 2,
      title: 'Produits de beurre de karité naturels',
      description: 'Beurre de karité et cosmétiques purs et éthiquement sourcés',
      image: 'https://res.cloudinary.com/drxouwbms/image/upload/v1755782266/shutterstock-2091641224_65e96d9f7e72e_1230x630c_xg9aai.webp',
      category: 'Beaut\'',
      price: 'A partir de $15',
    },
    {
      id: 3,
      title: 'Crafts artisanaux',
      description: 'Bijoux et objets d\'art faits main par des artisans locaux',
      image: 'https://res.cloudinary.com/drxouwbms/image/upload/v1755782109/sunlit-display-vibrant-kwanzaa-themed-crafts-including-candles-dolls-corn-beaded-jewelry-showcasing-rich-african-textures-388519477_kk6gph.webp',
      category: 'Crafts',
      price: 'A partir de $30',
    },
    {
      id: 4,
      title: 'Graines de café de haute qualité',
      description: 'Café en provenance des hauts-plateaux éthiopiens',
      image: 'https://res.cloudinary.com/drxouwbms/image/upload/v1755781950/delicious-organic-coffee-still-life_23-2151762342_ju0kwq.avif',
      category: 'Nourriture & Boissons',
      price: 'A partir de $20',
    },
    {
      id: 5,
      title: 'Epices naturelles',
      description: 'Epices et assaisonnements africains authentiques',
      image: 'https://res.cloudinary.com/drxouwbms/image/upload/v1755782201/spices-and-herbs-mix-with-cinnamon-and-peppercorns-free-photo_genpfy.jpg',
      category: 'Nourriture & Boissons',
      price: 'A partir de $12',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % products.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [products.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative max-w-6xl mx-auto">
      <div className="relative h-96 md:h-[500px] overflow-hidden rounded-2xl shadow-2xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <div className="relative h-full">
              <img
                src={products[currentSlide].image}
                alt={products[currentSlide].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
              
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                  <div className="max-w-2xl text-white">
                    <motion.div
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                    >
                      <span className="bg-green-600 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                        {products[currentSlide].category}
                      </span>
                      <h3 className="text-4xl md:text-6xl font-bold mb-4">
                        {products[currentSlide].title}
                      </h3>
                      <p className="text-xl mb-6 opacity-90">
                        {products[currentSlide].description}
                      </p>
                      <div className="flex items-center space-x-4">
                        <span className="text-2xl font-bold text-yellow-400">
                          {products[currentSlide].price}
                        </span>
                        <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center space-x-2">
                          <span>Explore</span>
                          <ExternalLink size={16} />
                        </button>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-200"
        >
          <ChevronLeft className="text-white" size={24} />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-200"
        >
          <ChevronRight className="text-white" size={24} />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentSlide ? 'bg-white scale-110' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCarousel;