import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, Building, Calendar, CheckCircle, Clock, AlertCircle, TrendingUp, Globe, Star, Handshake } from 'lucide-react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Données fictives - dans une vraie application, elles proviendraient d'une API
  const userProfile = {
    name: 'Amadou Diallo',
    email: 'amadou@example.com',
    phone: '+221 77 123 4567',
    company: 'Senegal Textiles Ltd',
    type: 'Partenaire Premium',
    joinDate: '2024-01-15',
    status: 'Actif'
  };

  const enrollmentStatus = {
    partner: { status: 'approved', date: '2024-01-20' },
    distributor: { status: 'pending', date: '2024-02-01' },
    client: { status: 'approved', date: '2024-01-18' }
  };

  const stats = [
    { label: 'Commandes Totales', value: '147', change: '+12%', icon: TrendingUp },
    { label: 'Partenariats Actifs', value: '8', change: '+2', icon: Handshake },
    { label: 'Portée du Réseau', value: '23 Pays', change: '+3', icon: Globe },
    { label: 'Évaluation', value: '4.9/5', change: '+0.2', icon: Star }
  ];

  const recentActivity = [
    { id: 1, type: 'order', description: 'Nouvelle commande reçue de Ghana Gold', time: 'il y a 2 heures', status: 'success' },
    { id: 2, type: 'partnership', description: 'Accord de partenariat signé avec Kenya Crafts', time: 'il y a 1 jour', status: 'success' },
    { id: 3, type: 'application', description: 'Demande de distributeur en cours d\'examen', time: 'il y a 3 jours', status: 'pending' },
    { id: 4, type: 'payment', description: 'Paiement de commission traité', time: 'il y a 5 jours', status: 'success' }
  ];


  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved':
        return <CheckCircle className="text-green-600" size={20} />;
      case 'pending':
        return <Clock className="text-yellow-600" size={20} />;
      case 'rejected':
        return <AlertCircle className="text-red-600" size={20} />;
      default:
        return <Clock className="text-gray-600" size={20} />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved':
        return 'text-green-600 bg-green-50';
      case 'pending':
        return 'text-yellow-600 bg-yellow-50';
      case 'rejected':
        return 'text-red-600 bg-red-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  const tabs = [
    { id: 'overview', label: 'Aperçu' },
    { id: 'enrollments', label: 'Inscriptions' },
    { id: 'profile', label: 'Profil' },
    { id: 'activity', label: 'Activité' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-16 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* En-tête */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Tableau de Bord</h1>
          <p className="text-gray-600">Bienvenue, {userProfile.name} !</p>
        </div>

        {/* Onglets */}
        <div className="mb-8">
          <nav className="flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                  activeTab === tab.id
                    ? 'border-green-600 text-green-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Onglet Aperçu */}
        {activeTab === 'overview' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* Cartes de Statistiques */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-white p-6 rounded-2xl shadow-lg"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <stat.icon className="text-green-600" size={24} />
                    </div>
                    <span className="text-sm text-green-600 font-medium">{stat.change}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Activité Récente */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Activité Récente</h2>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <motion.div
                    key={activity.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                  >
                    {getStatusIcon(activity.status)}
                    <div className="flex-1">
                      <p className="text-gray-900 font-medium">{activity.description}</p>
                      <p className="text-sm text-gray-500">{activity.time}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Onglet Inscriptions */}
        {activeTab === 'enrollments' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">État des Inscriptions</h2>
            <div className="space-y-6">
              {Object.entries(enrollmentStatus).map(([type, info], index) => (
                <motion.div
                  key={type}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-center justify-between p-6 border border-gray-200 rounded-xl"
                >
                  <div className="flex items-center space-x-4">
                    {getStatusIcon(info.status)}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 capitalize">
                        Inscription {type === 'partner' ? 'Partenaire' : 
                                   type === 'distributor' ? 'Distributeur' : 'Client'}
                      </h3>
                      <p className="text-sm text-gray-600">Demande du {info.date}</p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(info.status)}`}>
                    {info.status === 'approved' ? 'Approuvé' :
                     info.status === 'pending' ? 'En attente' : 'Refusé'}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Onglet Profil */}
        {activeTab === 'profile' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Informations du Profil</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <User className="text-gray-400" size={20} />
                  <div>
                    <p className="text-sm text-gray-500">Nom Complet</p>
                    <p className="text-gray-900 font-medium">{userProfile.name}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="text-gray-400" size={20} />
                  <div>
                    <p className="text-sm text-gray-500">Adresse Email</p>
                    <p className="text-gray-900 font-medium">{userProfile.email}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="text-gray-400" size={20} />
                  <div>
                    <p className="text-sm text-gray-500">Numéro de Téléphone</p>
                    <p className="text-gray-900 font-medium">{userProfile.phone}</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <Building className="text-gray-400" size={20} />
                  <div>
                    <p className="text-sm text-gray-500">Entreprise</p>
                    <p className="text-gray-900 font-medium">{userProfile.company}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="text-gray-400" size={20} />
                  <div>
                    <p className="text-sm text-gray-500">Type d'Adhésion</p>
                    <p className="text-gray-900 font-medium">{userProfile.type}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="text-gray-400" size={20} />
                  <div>
                    <p className="text-sm text-gray-500">Membre depuis</p>
                    <p className="text-gray-900 font-medium">{userProfile.joinDate}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors duration-200">
                Modifier le Profil
              </button>
            </div>
          </motion.div>
        )}

        {/* Onglet Activité */}
        {activeTab === 'activity' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Journal d'Activité</h2>
            <div className="space-y-4">
              {[...recentActivity, ...recentActivity].map((activity, index) => (
                <motion.div
                  key={`${activity.id}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  className="flex items-start space-x-4 p-4 border-l-4 border-green-200 bg-gray-50 rounded-r-lg"
                >
                  {getStatusIcon(activity.status)}
                  <div className="flex-1">
                    <p className="text-gray-900 font-medium">{activity.description}</p>
                    <p className="text-sm text-gray-500">{activity.time}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Dashboard;