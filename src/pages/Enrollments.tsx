import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Building, CheckCircle, AlertCircle, Loader2, Handshake } from 'lucide-react';
import { enrollmentsAPI } from '../services/api';
import Swal from 'sweetalert2';
import ImageUpload from '../components/ImageUpload';

const Enrollments = () => {
  const [activeTab, setActiveTab] = useState('partner');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [submitMessage, setSubmitMessage] = useState('');
  
  // State adapté exactement au modèle backend
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    city: '',
    companyName: '',
    businessType: '',
    distributionArea: '',
    targetMarkets: '',
    industry: '',
    companySize: '',
    interests: [] as string[],
  });

  // State pour les images
  const [companyLogoFiles, setCompanyLogoFiles] = useState<File[]>([]);
  const [businessDocumentsFiles, setBusinessDocumentsFiles] = useState<File[]>([]);

  const enrollmentTypes = [
    {
      id: 'partner',
      title: 'Partenaire Commercial',
      description: 'Rejoignez notre réseau en tant que partenaire stratégique',
      icon: Handshake,
      benefits: [
        'Support Prioritaire',
        'Offres Exclusives',
        'Support Marketing',
        'Programmes de Formation',
      ],
    },
    {
      id: 'distributor',
      title: 'Distributeur',
      description: 'Devenez un distributeur autorisé dans votre région',
      icon: Building,
      benefits: [
        'Droits Territoriaux',
        'Matériel Marketing',
        'Structure de Commission',
        'Formation Produit',
      ],
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const target = e.target as HTMLInputElement;
      if (target.checked) {
        setFormData((prev) => ({
          ...prev,
          interests: [...prev.interests, value],
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          interests: prev.interests.filter((interest) => interest !== value),
        }));
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const showSuccessNotification = (message: string) => {
    Swal.fire({
      icon: 'success',
      title: 'Succès !',
      text: message,
      confirmButtonText: 'OK',
      confirmButtonColor: '#059669',
      timer: 5000,
      timerProgressBar: true,
    });
  };

  const showErrorNotification = (message: string) => {
    Swal.fire({
      icon: 'error',
      title: 'Erreur !',
      text: message,
      confirmButtonText: 'OK',
      confirmButtonColor: '#dc2626',
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation côté client selon les champs du backend
    const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'country', 'city', 'companyName', 'businessType'];
    const missingFields = requiredFields.filter(field => !formData[field as keyof typeof formData]);
    
    if (missingFields.length > 0) {
      const fieldNames = {
        firstName: 'Prénom',
        lastName: 'Nom',
        email: 'Email',
        phone: 'Téléphone',
        country: 'Pays',
        city: 'Ville',
        companyName: 'Nom de l\'entreprise',
        businessType: 'Type d\'entreprise'
      };
      
      const missingFieldNames = missingFields.map(field => fieldNames[field as keyof typeof fieldNames]);
      showErrorNotification(`Veuillez remplir tous les champs obligatoires : ${missingFieldNames.join(', ')}`);
      return;
    }
    
    // Validation spécifique selon le type
    if (activeTab === 'partner' && !formData.distributionArea) {
      showErrorNotification('Veuillez sélectionner une zone de distribution pour les partenaires');
      return;
    }
    
    if (activeTab === 'distributor' && (!formData.distributionArea || !formData.targetMarkets)) {
      showErrorNotification('Veuillez remplir la zone de distribution et les marchés cibles pour les distributeurs');
      return;
    }
    
    // Validation des champs spécifiques
    if (!formData.industry) {
      showErrorNotification('Veuillez sélectionner une industrie');
      return;
    }
    
    if (!formData.companySize) {
      showErrorNotification('Veuillez sélectionner une taille d\'entreprise');
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus('');
    setSubmitMessage('');

    try {
      // Créer FormData pour l'upload d'images
      const formDataToSend = new FormData();
      
      // Ajouter les données du formulaire
      formDataToSend.append('type', activeTab);
      formDataToSend.append('firstName', formData.firstName);
      formDataToSend.append('lastName', formData.lastName);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('country', formData.country);
      formDataToSend.append('city', formData.city);
      formDataToSend.append('companyName', formData.companyName);
      formDataToSend.append('businessType', formData.businessType);
      
      if (formData.distributionArea) {
        formDataToSend.append('distributionArea', formData.distributionArea);
      }
      if (formData.targetMarkets) {
        formDataToSend.append('targetMarkets', formData.targetMarkets);
      }
      if (formData.industry) {
        formDataToSend.append('industry', formData.industry);
      }
      if (formData.companySize) {
        formDataToSend.append('companySize', formData.companySize);
      }
      if (formData.interests.length > 0) {
        formDataToSend.append('interests', JSON.stringify(formData.interests));
      }
      
      // Ajouter les images
      if (companyLogoFiles.length > 0) {
        formDataToSend.append('companyLogo', companyLogoFiles[0]);
      }
      
      businessDocumentsFiles.forEach((file, index) => {
        formDataToSend.append('businessDocuments', file);
      });

      const response = await enrollmentsAPI.submitEnrollment(formDataToSend);
      setSubmitStatus('success');
      setSubmitMessage(response.data?.message || 'Votre demande d\'inscription a été soumise avec succès !');
      
      // Notification de succès
      showSuccessNotification('Votre demande d\'inscription a été soumise avec succès ! Vous recevrez un email de confirmation avec vos identifiants de connexion.');
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        country: '',
        city: '',
        companyName: '',
        businessType: '',
        distributionArea: '',
        targetMarkets: '',
        industry: '',
        companySize: '',
        interests: [],
      });
      
      // Reset images
      setCompanyLogoFiles([]);
      setBusinessDocumentsFiles([]);
    } catch (error: any) {
      console.error('Erreur lors de la soumission:', error);
      setSubmitStatus('error');
      
      // Gérer les différents types d'erreurs selon le backend
      let errorMessage = 'Une erreur s\'est produite lors de la soumission. Veuillez réessayer.';
      
      if (error.response?.status === 400) {
        if (error.response.data?.error) {
          errorMessage = error.response.data.error;
        } else {
          errorMessage = 'Données invalides. Vérifiez que tous les champs obligatoires sont remplis.';
        }
      } else if (error.response?.status === 409) {
        errorMessage = 'Cet email est déjà utilisé. Veuillez utiliser une autre adresse email.';
      } else if (error.code === 'ERR_NETWORK' || error.message === 'Network Error') {
        errorMessage = 'Impossible de se connecter au serveur. Vérifiez votre connexion internet.';
      }
      
      setSubmitMessage(errorMessage);
      showErrorNotification(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputBase =
    'w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-white/80 backdrop-blur-sm shadow-sm placeholder-gray-400';

  const labelBase =
    'block text-sm font-semibold text-gray-700 mb-2 tracking-wide';

  const renderFormFields = () => {
    const baseFields = (
      <>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className={labelBase}>Prénom *</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
              className={inputBase}
              placeholder="Votre prénom"
            />
          </div>
          <div>
            <label className={labelBase}>Nom *</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
              className={inputBase}
              placeholder="Votre nom"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className={labelBase}>Adresse Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className={inputBase}
              placeholder="exemple@email.com"
            />
          </div>
          <div>
            <label className={labelBase}>Téléphone *</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className={inputBase}
              placeholder="+221 77 000 00 00"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className={labelBase}>Pays *</label>
            <select
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              required
              className={inputBase}
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
            <label className={labelBase}>Ville *</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              required
              className={inputBase}
              placeholder="Votre ville"
            />
          </div>
        </div>

        <div>
          <label className={labelBase}>Nom de l'entreprise *</label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleInputChange}
            required
            className={inputBase}
            placeholder="Nom de l'entreprise"
          />
        </div>
      </>
    );

    const partnerFields = (
      <>
        {baseFields}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className={labelBase}>Type d'Entreprise *</label>
            <select
              name="businessType"
              value={formData.businessType}
              onChange={handleInputChange}
              required
              className={inputBase}
            >
              <option value="">Sélectionner un type</option>
              <option value="startup">Startup</option>
              <option value="sme">PME</option>
              <option value="enterprise">Grande Entreprise</option>
              <option value="ngo">ONG</option>
              <option value="government">Gouvernement</option>
              <option value="other">Autre</option>
            </select>
          </div>
          <div>
            <label className={labelBase}>Zone de Distribution *</label>
            <select
              name="distributionArea"
              value={formData.distributionArea}
              onChange={handleInputChange}
              required
              className={inputBase}
            >
              <option value="">Sélectionner une zone</option>
              <option value="local">Local/City</option>
              <option value="regional">Régional</option>
              <option value="national">National</option>
              <option value="international">International</option>
            </select>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className={labelBase}>Industrie *</label>
            <select
              name="industry"
              value={formData.industry}
              onChange={handleInputChange}
              required
              className={inputBase}
            >
              <option value="">Sélectionner une industrie</option>
              <option value="textile">Textile & Mode</option>
              <option value="food">Alimentation & Boissons</option>
              <option value="beauty">Beauté & Cosmétiques</option>
              <option value="crafts">Arts & Artisanat</option>
              <option value="technology">Technologie</option>
              <option value="healthcare">Santé</option>
              <option value="education">Éducation</option>
              <option value="finance">Finance</option>
              <option value="other">Autre</option>
            </select>
          </div>
          <div>
            <label className={labelBase}>Taille de l'Entreprise *</label>
            <select
              name="companySize"
              value={formData.companySize}
              onChange={handleInputChange}
              required
              className={inputBase}
            >
              <option value="">Sélectionner une taille</option>
              <option value="startup">Startup (1-10)</option>
              <option value="small">Petite (11-50)</option>
              <option value="medium">Moyenne (51-200)</option>
              <option value="large">Grande (200+)</option>
            </select>
          </div>
        </div>
        
        <div>
          <label className={labelBase}>Marchés Cibles</label>
          <select
            name="targetMarkets"
            value={formData.targetMarkets}
            onChange={handleInputChange}
            className={inputBase}
          >
            <option value="">Sélectionner des marchés cibles</option>
            <option value="local">Marché Local</option>
            <option value="regional">Marché Régional</option>
            <option value="national">Marché National</option>
            <option value="international">Marché International</option>
            <option value="africa">Afrique</option>
            <option value="europe">Europe</option>
            <option value="americas">Amériques</option>
            <option value="asia">Asie</option>
          </select>
        </div>
      </>
    );

    const distributorFields = (
      <>
        {baseFields}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className={labelBase}>Type d'Entreprise *</label>
            <select
              name="businessType"
              value={formData.businessType}
              onChange={handleInputChange}
              required
              className={inputBase}
            >
              <option value="">Sélectionner un type</option>
              <option value="startup">Startup</option>
              <option value="sme">PME</option>
              <option value="enterprise">Grande Entreprise</option>
              <option value="distributor">Distributeur</option>
              <option value="wholesaler">Grossiste</option>
              <option value="retailer">Détaillant</option>
              <option value="other">Autre</option>
            </select>
          </div>
          <div>
            <label className={labelBase}>Zone de Distribution *</label>
            <select
              name="distributionArea"
              value={formData.distributionArea}
              onChange={handleInputChange}
              required
              className={inputBase}
            >
              <option value="">Sélectionner une zone</option>
              <option value="local">Local/City</option>
              <option value="regional">Régional</option>
              <option value="national">National</option>
              <option value="international">International</option>
            </select>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className={labelBase}>Industrie *</label>
            <select
              name="industry"
              value={formData.industry}
              onChange={handleInputChange}
              required
              className={inputBase}
            >
              <option value="">Sélectionner une industrie</option>
              <option value="textile">Textile & Mode</option>
              <option value="food">Alimentation & Boissons</option>
              <option value="beauty">Beauté & Cosmétiques</option>
              <option value="crafts">Arts & Artisanat</option>
              <option value="technology">Technologie</option>
              <option value="healthcare">Santé</option>
              <option value="education">Éducation</option>
              <option value="finance">Finance</option>
              <option value="other">Autre</option>
            </select>
          </div>
          <div>
            <label className={labelBase}>Taille de l'Entreprise *</label>
            <select
              name="companySize"
              value={formData.companySize}
              onChange={handleInputChange}
              required
              className={inputBase}
            >
              <option value="">Sélectionner une taille</option>
              <option value="startup">Startup (1-10)</option>
              <option value="small">Petite (11-50)</option>
              <option value="medium">Moyenne (51-200)</option>
              <option value="large">Grande (200+)</option>
            </select>
          </div>
        </div>
        
        <div>
          <label className={labelBase}>Marchés Cibles *</label>
          <select
            name="targetMarkets"
            value={formData.targetMarkets}
            onChange={handleInputChange}
            required
            className={inputBase}
          >
            <option value="">Sélectionner des marchés cibles</option>
            <option value="local">Marché Local</option>
            <option value="regional">Marché Régional</option>
            <option value="national">Marché National</option>
            <option value="international">Marché International</option>
            <option value="africa">Afrique</option>
            <option value="europe">Europe</option>
            <option value="americas">Amériques</option>
            <option value="asia">Asie</option>
          </select>
        </div>
      </>
    );

    // Section client supprimée car non utilisée dans le backend

    switch (activeTab) {
      case 'partner':
        return partnerFields;
      case 'distributor':
        return distributorFields;
      default:
        return baseFields;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-50"
    >
      {/* Hero Section */}
      <section
        className="relative pt-16 pb-10 sm:pt-20 sm:pb-16 md:pt-28 md:pb-24 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://res.cloudinary.com/drxouwbms/image/upload/v1755949759/Screenshot_2025-08-23_at_11_41_05_1_-Picsart-AiImageEnhancer_kfsp1y.png)',
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center relative z-10">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-5 leading-tight drop-shadow-lg">
              Rejoignez notre{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-indigo-400">
                réseau
              </span>
            </h1>
            <p className="text-base xs:text-lg sm:text-xl md:text-2xl text-white/90 max-w-2xl mx-auto px-2 sm:px-0 font-medium drop-shadow">
              Devenez partie de l'écosystème commercial de pointe de l'Afrique.<br className="hidden sm:inline" />
            </p>
          </motion.div>
        </div>
      </section>

      {/* Enrollment Types */}
      <section className="py-8 xs:py-10 sm:py-16 bg-gradient-to-b from-white via-gray-50 to-blue-50">
        <div className="w-full flex justify-center items-center mb-10 sm:mb-16 px-2">
          <div className="grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2 max-w-4xl w-full">
            {enrollmentTypes.map((type, index) => {
              const isActive = activeTab === type.id;
              return (
                <motion.button
                  key={type.id}
                  initial={{ y: 60, opacity: 0, scale: 0.92 }}
                  animate={{
                    y: 0,
                    opacity: 1,
                    scale: 1,
                  }}
                  whileHover={{
                    scale: 1.02,
                    y: -4,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 28,
                    delay: index * 0.12,
                    layout: {
                      type: "spring",
                      stiffness: 400,
                      damping: 32,
                    }
                  }}
                  onClick={() => setActiveTab(type.id)}
                  className={`group relative w-full h-full min-h-[340px] xs:min-h-[380px] sm:min-h-[420px] rounded-3xl focus:outline-none transition-all duration-500 flex flex-col items-center justify-center mx-auto ${
                    isActive
                      ? 'bg-white border-2 border-emerald-600 shadow-[0_8px_40px_rgba(5,150,105,0.12)]'
                      : 'bg-white border-2 border-gray-100 hover:border-emerald-200 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(5,150,105,0.08)]'
                  }`}
                  style={{ 
                    zIndex: isActive ? 20 : 1,
                    transformStyle: 'preserve-3d',
                  }}
                  type="button"
                >
                  {/* Active state ring indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeRing"
                      className="absolute -inset-1 rounded-3xl bg-emerald-600/10 blur-sm"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    />
                  )}

                  {/* Hover glow effect */}
                  <motion.div
                    className="absolute -inset-2 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: 'conic-gradient(from 0deg at 50% 50%, rgba(5,150,105,0.05) 0deg, rgba(5,150,105,0.1) 120deg, rgba(5,150,105,0.05) 240deg, rgba(5,150,105,0.08) 360deg)',
                      filter: 'blur(12px)',
                    }}
                  />

                  {/* Main content container */}
                  <div className="relative flex flex-col items-center justify-between p-5 xs:p-7 sm:p-8 h-full">
                    {/* Icon container with enhanced styling */}
                    <motion.div
                      animate={{
                        scale: isActive ? 1.05 : 1,
                        rotateY: isActive ? 5 : 0,
                      }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className={`w-16 h-16 xs:w-20 xs:h-20 rounded-2xl flex items-center justify-center mb-4 xs:mb-6 relative overflow-hidden transition-all duration-500 ${
                        isActive
                          ? 'bg-emerald-600 shadow-[0_8px_24px_rgba(5,150,105,0.25)]'
                          : 'bg-gray-50 group-hover:bg-emerald-50 shadow-[0_4px_16px_rgba(0,0,0,0.08)]'
                      }`}
                    >
                      {/* Icon background pattern for active state */}
                      {isActive && (
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ duration: 0.6, ease: "easeOut" }}
                          className="absolute inset-0 opacity-10"
                          style={{
                            backgroundImage: 'radial-gradient(circle at 30% 40%, white 2px, transparent 2px), radial-gradient(circle at 70% 80%, white 1px, transparent 1px)',
                            backgroundSize: '20px 20px, 12px 12px',
                          }}
                        />
                      )}
                      
                      <motion.div
                        animate={{
                          rotate: isActive ? 360 : 0,
                          scale: isActive ? 1.1 : 1,
                        }}
                        transition={{ 
                          duration: isActive ? 0.8 : 0.4,
                          ease: "easeOut",
                          rotate: { duration: 0.8, ease: "easeInOut" }
                        }}
                      >
                        <type.icon
                          className={`transition-all duration-500 ${
                            isActive
                              ? 'text-white'
                              : 'text-gray-600 group-hover:text-emerald-600'
                          }`}
                          size={32}
                        />
                      </motion.div>
                    </motion.div>

                    {/* Title section */}
                    <div className="text-center mb-4 xs:mb-6">
                      <motion.h3 
                        animate={{
                          color: isActive ? '#059669' : '#111827',
                        }}
                        transition={{ duration: 0.3 }}
                        className="text-xl xs:text-2xl font-bold mb-2 xs:mb-3 leading-tight"
                      >
                        {type.title}
                      </motion.h3>
                      
                      <motion.p
                        animate={{
                          color: isActive ? '#047857' : '#6b7280',
                        }}
                        transition={{ duration: 0.3 }}
                        className="text-sm xs:text-base leading-relaxed max-w-xs mx-auto"
                      >
                        {type.description}
                      </motion.p>
                    </div>

                    {/* Benefits list with enhanced styling */}
                    <motion.div 
                      className="w-full space-y-2 xs:space-y-3"
                      animate={{
                        opacity: 1,
                      }}
                      transition={{ duration: 0.4 }}
                    >
                      {type.benefits.map((benefit, benefitIndex) => (
                        <motion.div
                          key={benefitIndex}
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ 
                            duration: 0.4, 
                            delay: index * 0.12 + benefitIndex * 0.08,
                            ease: "easeOut" 
                          }}
                          className="flex items-center justify-start group/item"
                        >
                          <motion.div
                            animate={{
                              backgroundColor: isActive ? '#059669' : '#e5e7eb',
                              scale: isActive ? 1.1 : 1,
                            }}
                            transition={{ duration: 0.3 }}
                            className="w-5 h-5 rounded-full flex items-center justify-center mr-2 xs:mr-3 flex-shrink-0"
                          >
                            <CheckCircle
                              size={14}
                              className={`transition-all duration-300 ${
                                isActive
                                  ? 'text-white'
                                  : 'text-gray-500 group-hover:text-emerald-600'
                              }`}
                            />
                          </motion.div>
                          
                          <motion.span
                            animate={{
                              color: isActive ? '#047857' : '#374151',
                              fontWeight: isActive ? 600 : 500,
                            }}
                            transition={{ duration: 0.3 }}
                            className="text-xs xs:text-sm leading-relaxed flex-1 text-left"
                          >
                            {benefit}
                          </motion.span>
                        </motion.div>
                      ))}
                    </motion.div>

                    {/* Active state indicator dot */}
                    <motion.div
                      className="absolute -top-2 -right-2 w-4 h-4 rounded-full"
                      animate={{
                        scale: isActive ? 1 : 0,
                        backgroundColor: '#059669',
                      }}
                      transition={{ duration: 0.3, type: "spring", stiffness: 400 }}
                    >
                      {isActive && (
                        <motion.div
                          className="w-full h-full rounded-full bg-emerald-600"
                          animate={{
                            boxShadow: [
                              '0 0 0 0 rgba(5,150,105,0.4)',
                              '0 0 0 8px rgba(5,150,105,0)',
                              '0 0 0 0 rgba(5,150,105,0.4)',
                            ],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                      )}
                    </motion.div>
                  </div>

                  {/* Subtle bottom accent line for active state */}
                  {isActive && (
                    <motion.div
                      layoutId="activeAccent"
                      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-emerald-600 rounded-t-full"
                      initial={{ width: 0 }}
                      animate={{ width: 64 }}
                      exit={{ width: 0 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Enrollment Form */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-4 xs:p-6 sm:p-10 md:p-14 border border-gray-100 max-w-full mx-auto w-full sm:w-auto"
        >
          <div className="mb-6 sm:mb-8 text-center">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2">
              <span className="font-light mr-2 text-green-600">Enrôlement</span>
              {enrollmentTypes.find((type) => type.id === activeTab)?.title}{' '}
            </h2>
            <p className="text-gray-500 text-sm xs:text-base sm:text-lg">
              Remplissez le formulaire ci-dessous pour commencer votre inscription.<br className="hidden sm:inline" />
              <span className="block mt-1">Tous les champs marqués d&apos;un * sont obligatoires.</span>
            </p>
          </div>

          {submitStatus && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mb-6 p-3 xs:p-4 rounded-xl flex items-center space-x-2 xs:space-x-3 text-sm xs:text-base font-medium ${
                submitStatus === 'success'
                  ? 'bg-green-50 text-green-800 border border-green-200'
                  : 'bg-red-50 text-red-800 border border-red-200'
              }`}
            >
              {submitStatus === 'success' ? (
                <CheckCircle className="text-green-600" size={20} />
              ) : (
                <AlertCircle className="text-red-600" size={20} />
              )}
              <span>
                {submitMessage}
              </span>
            </motion.div>
          )}

          <form
            onSubmit={handleSubmit}
            className="space-y-5 xs:space-y-6 sm:space-y-8 max-w-full sm:max-w-2xl mx-auto"
          >
            {renderFormFields()}

            {/* Champ description supprimé car il n'existe pas dans le backend */}

            <div>
              <label className={labelBase}>Intérêts (optionnel)</label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {['Textile', 'Mode', 'Artisanat', 'Technologie', 'Santé', 'Éducation', 'Finance', 'Tourisme', 'Agriculture', 'Transport'].map((interest) => (
                  <label key={interest} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      name="interests"
                      value={interest.toLowerCase()}
                      checked={formData.interests.includes(interest.toLowerCase())}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                    />
                    <span className="text-sm text-gray-700">{interest}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Upload d'images */}
            <div className="space-y-6">
              <ImageUpload
                label="Logo de l'entreprise"
                name="companyLogo"
                multiple={false}
                maxFiles={1}
                maxSize={5}
                onFilesChange={setCompanyLogoFiles}
                required={false}
              />

              <ImageUpload
                label="Documents d'entreprise (certificats, licences, etc.)"
                name="businessDocuments"
                multiple={true}
                maxFiles={5}
                maxSize={5}
                onFilesChange={setBusinessDocumentsFiles}
                required={false}
              />
            </div>

            <div className="flex flex-col xs:flex-row items-start xs:items-center space-y-2 xs:space-y-0 xs:space-x-3">
              <input
                type="checkbox"
                id="terms"
                required
                className="w-5 h-5 text-green-600 border-gray-300 rounded focus:ring-green-500"
              />
              <label htmlFor="terms" className="text-xs xs:text-sm text-gray-700">
                J&apos;accepte les{' '}
                <a
                  href="#"
                  className="text-green-600 hover:text-green-700 underline"
                >
                  Conditions d&apos;utilisation
                </a>{' '}
                et la{' '}
                <a
                  href="#"
                  className="text-green-600 hover:text-green-700 underline"
                >
                  Politique de confidentialité
                </a>
              </label>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-emerald-600 text-white px-6 xs:px-8 py-3 xs:py-4 rounded-xl font-bold text-base xs:text-lg shadow-lg hover:bg-emerald-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center space-x-2 xs:space-x-3`}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  <span>Envoi en cours...</span>
                </>
              ) : (
                <span>Soumettre la demande d&apos;inscription</span>
              )}
            </button>
          </form>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default Enrollments;