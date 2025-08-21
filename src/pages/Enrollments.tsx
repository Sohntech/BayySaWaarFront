import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Building, CheckCircle, AlertCircle, Loader2, Handshake } from 'lucide-react';

const Enrollments = () => {
  const [activeTab, setActiveTab] = useState('partner');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [formData, setFormData] = useState<{
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
      country: string;
      city: string;
      companyName: string;
      businessType: string;
      yearsInBusiness: string;
      website: string;
      description: string;
      partnershipType: string;
      expectedVolume: string;
      distributionArea: string;
      targetMarkets: string;
      experience: string;
      industry: string;
      companySize: string;
      interests: string[];
    }>({
      // Common fields
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      country: '',
      city: '',
      
      // Business fields
      companyName: '',
      businessType: '',
      yearsInBusiness: '',
      website: '',
      description: '',
      
      // Partner specific
      partnershipType: '',
      expectedVolume: '',
      
      // Distributor specific
      distributionArea: '',
      targetMarkets: '',
      experience: '',
      
      // Client specific
      industry: '',
      companySize: '',
      interests: []
    });

  const enrollmentTypes = [
    {
      id: 'partner',
      title: 'Partenaire Commercial',
      description: 'Rejoignez notre réseau en tant que partenaire stratégique',
      icon: Handshake,
      benefits: ['Support Prioritaire', 'Offres Exclusives', 'Support Marketing', 'Programmes de Formation']
    },
    {
      id: 'distributor',
      title: 'Distributeur',
      description: 'Devenez un distributeur autorisé dans votre région',
      icon: Building,
      benefits: ['Droits Territoriaux', 'Matériel Marketing', 'Structure de Commission', 'Formation Produit']
    },
    {
      id: 'client',
      title: 'Client Premium',
      description: 'Accédez aux services exclusifs et fonctionnalités premium',
      icon: User,
      benefits: ['Fonctionnalités Premium', 'Support Dédié', 'Accès Anticipé', 'Solutions Personnalisées']
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const target = e.target as HTMLInputElement;
      if (target.checked) {
        setFormData(prev => ({
          ...prev,
          interests: [...prev.interests, value]
        }));
      } else {
        setFormData(prev => ({
          ...prev,
          interests: prev.interests.filter(interest => interest !== value)
        }));
      }
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      // Reset form
      setFormData({
        firstName: '', lastName: '', email: '', phone: '', country: '', city: '',
        companyName: '', businessType: '', yearsInBusiness: '', website: '', description: '',
        partnershipType: '', expectedVolume: '', distributionArea: '', targetMarkets: '',
        experience: '', industry: '', companySize: '', interests: []
      });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderFormFields = () => {
    const baseFields = (
      <>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Prénom *
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nom *
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Téléphone *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Pays *
            </label>
            <select
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
            >
              <option value="">Sélectionner un pays</option>
              <option value="senegal">Sénégal</option>
              <option value="ghana">Ghana</option>
              <option value="nigeria">Nigeria</option>
              <option value="kenya">Kenya</option>
              <option value="south-africa">Afrique du Sud</option>
              <option value="other">Autre</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Ville *
            </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Nom de l'entreprise *
          </label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
          />
        </div>
      </>
    );

    const partnerFields = (
      <>
        {baseFields}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Type de Partenariat *
            </label>
            <select
              name="partnershipType"
              value={formData.partnershipType}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
            >
              <option value="">Sélectionner un type</option>
              <option value="strategic">Alliance Stratégique</option>
              <option value="technology">Partenaire Technologique</option>
              <option value="marketing">Partenaire Marketing</option>
              <option value="supply">Partenaire Fournisseur</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Volume Attendu (Annuel)
            </label>
            <select
              name="expectedVolume"
              value={formData.expectedVolume}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
            >
              <option value="">Sélectionner un volume</option>
              <option value="0-100k">$0 - $100K</option>
              <option value="100k-500k">$100K - $500K</option>
              <option value="500k-1m">$500K - $1M</option>
              <option value="1m+">$1M+</option>
            </select>
          </div>
        </div>
      </>
    );

    const distributorFields = (
      <>
        {baseFields}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Zone de Distribution *
            </label>
            <select
              name="distributionArea"
              value={formData.distributionArea}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
            >
              <option value="">Sélectionner une zone</option>
              <option value="local">Local/City</option>
              <option value="regional">Régional</option>
              <option value="national">National</option>
              <option value="international">International</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Années d'Expérience *
            </label>
            <select
              name="experience"
              value={formData.experience}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
            >
              <option value="">Sélectionner une expérience</option>
              <option value="0-2">0-2 ans</option>
              <option value="3-5">3-5 ans</option>
              <option value="6-10">6-10 ans</option>
              <option value="10+">10+ ans</option>
            </select>
          </div>
        </div>
      </>
    );

    const clientFields = (
      <>
        {baseFields}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Industrie *
            </label>
            <select
              name="industry"
              value={formData.industry}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
            >
              <option value="">Sélectionner une industrie</option>
              <option value="textile">Textile & Mode</option>
              <option value="food">Alimentation & Boissons</option>
              <option value="beauty">Beauté & Cosmétiques</option>
              <option value="crafts">Arts & Artisanat</option>
              <option value="technology">Technologie</option>
              <option value="other">Autre</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Taille de l'Entreprise *
            </label>
            <select
              name="companySize"
              value={formData.companySize}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
            >
              <option value="">Sélectionner une taille</option>
              <option value="startup">Startup (1-10)</option>
              <option value="small">Petite (11-50)</option>
              <option value="medium">Moyenne (51-200)</option>
              <option value="large">Grande (200+)</option>
            </select>
          </div>
        </div>
      </>
    );

    switch (activeTab) {
      case 'partner':
        return partnerFields;
      case 'distributor':
        return distributorFields;
      case 'client':
        return clientFields;
      default:
        return baseFields;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-16 bg-gray-50"
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
              Rejoignez notre <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">réseau</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Devenez partie de l'écosystème commercial de pointe de l'Afrique. Choisissez votre type d'inscription et commencez votre parcours avec nous aujourd'hui.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Enrollment Types */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {enrollmentTypes.map((type, index) => (
              <motion.div
                key={type.id}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                onClick={() => setActiveTab(type.id)}
                className={`cursor-pointer p-8 rounded-2xl transition-all duration-300 ${
                  activeTab === type.id
                    ? 'bg-green-600 text-white shadow-xl scale-105'
                    : 'bg-white text-gray-900 shadow-lg hover:shadow-xl hover:scale-102'
                }`}
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                  activeTab === type.id ? 'bg-white/20' : 'bg-green-100'
                }`}>
                  <type.icon className={activeTab === type.id ? 'text-white' : 'text-green-600'} size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{type.title}</h3>
                <p className={`mb-6 ${activeTab === type.id ? 'text-green-100' : 'text-gray-600'}`}>
                  {type.description}
                </p>
                <div className="space-y-2">
                  {type.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center text-sm">
                      <CheckCircle size={16} className={`mr-2 ${activeTab === type.id ? 'text-green-200' : 'text-green-600'}`} />
                      {benefit}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Enrollment Form */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
          >
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {enrollmentTypes.find(type => type.id === activeTab)?.title} Enrollment
              </h2>
              <p className="text-gray-600">
                Fill out the form below to begin your enrollment process. All fields marked with * are required.
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
                    ? 'Your enrollment application has been submitted successfully! We will contact you within 24 hours.'
                    : 'There was an error submitting your application. Please try again.'}
                </span>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {renderFormFields()}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Information
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Tell us more about your business and why you want to join our network..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                />
              </div>

              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id="terms"
                  required
                  className="w-5 h-5 text-green-600 border-gray-300 rounded focus:ring-green-500"
                />
                <label htmlFor="terms" className="text-sm text-gray-700">
                  I agree to the <a href="#" className="text-green-600 hover:text-green-700">Terms of Service</a> and{' '}
                  <a href="#" className="text-green-600 hover:text-green-700">Privacy Policy</a>
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <span>Submit Enrollment Application</span>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Enrollments;