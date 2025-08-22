import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Check, MapPin } from 'lucide-react';

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Fatou Diop',
      role: 'PDG, Senegal Exportations',
      company: 'Fabrication de textiles',
      content: 'BAY SA WAAR a transformé  notre entreprise. Grâce  leur plateforme FIPA, nous avons établi des partenariats dans 15 pays et avons augmenté notre revenu de 300%.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300',
      location: 'Dakar, Sénégal'
    },
    {
      id: 2,
      name: 'Kwame Asante',
      role: 'Fondateur, Or de Ghana',
      company: 'Joallerie et artisanat',
      content: 'Le programme de partenariat a dépassé nos attentes. Leurs solutions de commerce électronique nous ont aidé à atteindre des marchés mondiaux que nous n\'aurions jamais imaginés possibles.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300',
      location: 'Accra, Ghana'
    },
    {
      id: 3,
      name: 'Amina Hassan',
      role: 'Directrice, Spices de l\'Est africain',
      company: 'Alimentation et boissons',
      content: 'Service professionnel, solutions innovantes et engagement sinc re en faveur de la croissance des entreprises africaines. BAY SA WAAR est vraiment exceptionnel.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300',
      location: 'Nairobi, Kenya'
    },
    {
      id: 4,
      name: 'Ibrahim Tour  ',
      role: 'Associé  gérant, Ivory Crafts',
      company: 'Produits artisanaux',
      content: 'De l\'inscription  l\'exécution, chaque étape a été sans heurt. L\'équipe de support est incroyablement réactive et très compétente.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=300',
      location: 'Abidjan, Côte d\'Ivoire'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
      />
    ));
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="relative">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl p-6 sm:p-8 md:p-12 border border-gray-100"
        >
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
            <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center ring-4 ring-white">
              <Quote className="text-white" size={24} />
            </div>
          </div>
          
          <blockquote className="text-xl sm:text-2xl md:text-3xl text-gray-700 text-center leading-relaxed mb-6 sm:mb-8 md:mb-10 italic font-light">
            "{testimonials[currentIndex].content}"
          </blockquote>

          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="flex space-x-1">
              {renderStars(testimonials[currentIndex].rating)}
            </div>
          </div>

          <motion.div 
            className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="relative">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover shadow-lg ring-4 ring-green-100"
              />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center ring-4 ring-white">
                <Check className="text-white" size={16} />
              </div>
            </div>
            
            <div className="text-center md:text-left">
              <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
                {testimonials[currentIndex].name}
              </h4>
              <p className="text-green-600 font-medium mb-1">
                {testimonials[currentIndex].role}
              </p>
              <p className="text-gray-600 text-sm sm:text-base">
                {testimonials[currentIndex].company}
              </p>
              <div className="flex items-center justify-center md:justify-start mt-2 text-xs sm:text-sm text-gray-500">
                <MapPin size={16} className="mr-1" />
                {testimonials[currentIndex].location}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Enhanced Navigation Dots */}
        <div className="flex justify-center mt-6 sm:mt-8 space-x-3 sm:space-x-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`group relative w-3 h-3 sm:w-4 sm:h-4 ${
                index === currentIndex ? 'scale-110' : ''
              }`}
            >
              <span className={`
                absolute inset-0 rounded-full transition-all duration-300
                ${index === currentIndex 
                  ? 'bg-green-600 scale-100' 
                  : 'bg-gray-300 scale-75 group-hover:scale-100'
                }
              `}/>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;