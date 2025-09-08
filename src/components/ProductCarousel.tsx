import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { productsAPI } from '../services/api';
import ProductModal from './ProductModal';

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  brand: string;
  stock: number;
  specifications: Record<string, any>;
  tags: string[];
  images: Array<{
    publicId: string;
    url: string;
    alt: string;
  }>;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

const ProductCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Charger les produits depuis l'API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await productsAPI.getAllProducts();
        const productsData = response.data.products || [];
        // Filtrer seulement les produits actifs et avec des images
        const activeProducts = productsData.filter((product: Product) => 
          product.isActive && product.images && product.images.length > 0
        );
        setProducts(activeProducts);
      } catch (error) {
        console.error('Erreur lors du chargement des produits:', error);
        // Fallback vers des produits statiques en cas d'erreur
        setProducts([
          {
            _id: '1',
            name: 'Collection de tissus africains',
            description: 'Tissus traditionnels de haute qualité en provenance de l\'Afrique de l\'Ouest',
            price: 25000,
            category: 'Tissus',
            brand: 'Artisanat Africain',
            stock: 50,
            specifications: {},
            tags: ['traditionnel', 'qualité'],
            images: [{
              publicId: 'fallback1',
              url: 'https://res.cloudinary.com/drxouwbms/image/upload/v1755782417/360_F_821553966_khVu9EC8bwgtCrGFJXon1Sbpm7WRINLm_cncxf1.jpg',
              alt: 'Tissus africains'
            }],
            isActive: true,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Timer pour le carrousel automatique
  useEffect(() => {
    if (products.length === 0) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % products.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [products.length]);

  const nextSlide = () => {
    if (products.length === 0) return;
    setCurrentSlide((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    if (products.length === 0) return;
    setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const handleExploreClick = () => {
    if (products.length > 0 && products[currentSlide]) {
      setSelectedProduct(products[currentSlide]);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'XOF',
      minimumFractionDigits: 0,
    }).format(price);
  };

  if (loading) {
    return (
      <div className="relative max-w-6xl mx-auto">
        <div className="relative h-80 sm:h-96 md:h-[500px] overflow-hidden rounded-2xl shadow-2xl bg-gray-200 animate-pulse">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-green-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-gray-600">Chargement des produits...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="relative max-w-6xl mx-auto">
        <div className="relative h-80 sm:h-96 md:h-[500px] overflow-hidden rounded-2xl shadow-2xl bg-gray-100">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="text-gray-600 text-lg">Aucun produit disponible pour le moment</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="relative max-w-6xl mx-auto">
        <div className="relative h-80 sm:h-96 md:h-[500px] overflow-hidden rounded-2xl shadow-2xl">
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
                  src={products[currentSlide].images[0]?.url || '/placeholder-product.jpg'}
                  alt={products[currentSlide].images[0]?.alt || products[currentSlide].name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
                
                <div className="absolute inset-0 flex items-center">
                  <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 w-full">
                    <div className="max-w-xl md:max-w-2xl text-white">
                      <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                      >
                        <div className="flex items-center space-x-2 mb-3 sm:mb-4">
                          <span className="bg-green-600 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                            {products[currentSlide].category}
                          </span>
                          {products[currentSlide].brand && (
                            <span className="bg-blue-600 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                              {products[currentSlide].brand}
                            </span>
                          )}
                        </div>
                        <h3 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-3 sm:mb-4">
                          {products[currentSlide].name}
                        </h3>
                        <p className="text-base sm:text-lg md:text-xl mb-4 sm:mb-6 opacity-90">
                          {products[currentSlide].description}
                        </p>
                        <div className="flex items-center space-x-3 sm:space-x-4">
                          <span className="text-xl sm:text-2xl font-bold text-yellow-400">
                            {formatPrice(products[currentSlide].price)}
                          </span>
                          <button 
                            onClick={handleExploreClick}
                            className="bg-white text-gray-900 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center space-x-2"
                          >
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
            className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-200"
          >
            <ChevronLeft className="text-white" size={20} />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-200"
          >
            <ChevronRight className="text-white" size={20} />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide ? 'bg-white scale-110' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
};

export default ProductCarousel;