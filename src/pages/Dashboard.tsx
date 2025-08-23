import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  User,
  Mail,
  Phone,
  Building,
  Calendar,
  CheckCircle,
  Clock,
  AlertCircle,
  TrendingUp,
  Globe,
  Star,
  Handshake,
} from 'lucide-react';

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
    status: 'Actif',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    cover: 'https://res.cloudinary.com/drxouwbms/image/upload/v1755959386/Screenshot_2025-08-23_at_14_28_33-Picsart-AiImageEnhancer_qey9ge.png',
  };

  const enrollmentStatus = {
    partner: { status: 'approved', date: '2024-01-20' },
    distributor: { status: 'pending', date: '2024-02-01' },
    client: { status: 'approved', date: '2024-01-18' },
  };

  const stats = [
    {
      label: 'Commandes Totales',
      value: '147',
      change: '+12%',
      icon: TrendingUp,
      color: 'bg-gradient-to-tr from-green-400 to-green-600',
    },
    {
      label: 'Partenariats Actifs',
      value: '8',
      change: '+2',
      icon: Handshake,
      color: 'bg-gradient-to-tr from-blue-400 to-blue-600',
    },
    {
      label: 'Portée du Réseau',
      value: '23 Pays',
      change: '+3',
      icon: Globe,
      color: 'bg-gradient-to-tr from-yellow-400 to-yellow-600',
    },
    {
      label: 'Évaluation',
      value: '4.9/5',
      change: '+0.2',
      icon: Star,
      color: 'bg-gradient-to-tr from-purple-400 to-purple-600',
    },
  ];

  const recentActivity = [
    {
      id: 1,
      type: 'order',
      description: 'Nouvelle commande reçue de Ghana Gold',
      time: 'il y a 2 heures',
      status: 'success',
    },
    {
      id: 2,
      type: 'partnership',
      description: 'Accord de partenariat signé avec Kenya Crafts',
      time: 'il y a 1 jour',
      status: 'success',
    },
    {
      id: 3,
      type: 'application',
      description: "Demande de distributeur en cours d'examen",
      time: 'il y a 3 jours',
      status: 'pending',
    },
    {
      id: 4,
      type: 'payment',
      description: 'Paiement de commission traité',
      time: 'il y a 5 jours',
      status: 'success',
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved':
      case 'success':
        return (
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-100">
            <CheckCircle className="text-green-600" size={22} />
          </span>
        );
      case 'pending':
        return (
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-yellow-100">
            <Clock className="text-yellow-600" size={22} />
          </span>
        );
      case 'rejected':
        return (
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-100">
            <AlertCircle className="text-red-600" size={22} />
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-100">
            <Clock className="text-gray-600" size={22} />
          </span>
        );
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved':
      case 'success':
        return 'text-green-700 bg-green-100';
      case 'pending':
        return 'text-yellow-700 bg-yellow-100';
      case 'rejected':
        return 'text-red-700 bg-red-100';
      default:
        return 'text-gray-700 bg-gray-100';
    }
  };

  const tabs = [
    { id: 'overview', label: 'Aperçu', icon: TrendingUp },
    { id: 'enrollments', label: 'Inscriptions', icon: Handshake },
    { id: 'profile', label: 'Profil', icon: User },
    { id: 'activity', label: 'Activité', icon: Clock },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-0 bg-gradient-to-br from-green-50 via-white to-blue-50"
    >
      {/* Profile Cover */}
      <div
        className="relative h-48 md:h-56 w-full rounded-b-3xl overflow-hidden shadow"
        style={{
          background: `url(${userProfile.cover}) center/cover no-repeat`,
        }}
      >
        <div className="absolute inset-0" />
       
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
        {/* En-tête */}
        <div className="mb-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900 mb-1 tracking-tight flex items-center gap-2">
              <span>Tableau de Bord</span>
              <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            </h1>
            <p className="text-gray-500 text-lg">
              Bienvenue, <span className="font-semibold text-green-700">{userProfile.name}</span> !
            </p>
          </div>
          <div className="flex items-center gap-4">
           
          </div>
        </div>

        {/* Onglets */}
        <div className="mb-10">
          <nav className="flex flex-wrap gap-2 md:gap-6 border-b border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 py-3 px-4 rounded-t-lg font-semibold text-base transition-all duration-200
                  ${
                    activeTab === tab.id
                      ? 'bg-white shadow text-green-700 border-b-2 border-green-600 -mb-px'
                      : 'text-gray-500 hover:text-green-600 hover:bg-gray-100'
                  }`}
              >
                <tab.icon size={20} className={activeTab === tab.id ? 'text-green-600' : 'text-gray-400'} />
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Onglets Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'overview' && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.5 }}
              className="space-y-10"
            >
              {/* Cartes de Statistiques */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08, duration: 0.5 }}
                    className={`relative overflow-hidden rounded-2xl shadow-xl p-6 group hover:scale-[1.03] transition-transform duration-200 bg-white`}
                  >
                    <div className="absolute right-4 top-4 opacity-10 group-hover:opacity-20 transition-opacity duration-200 pointer-events-none">
                      <stat.icon size={64} />
                    </div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${stat.color} shadow-lg`}>
                        <stat.icon className="text-white" size={28} />
                      </div>
                      <span
                        className={`text-base font-semibold ${
                          stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                        }`}
                      >
                        {stat.change}
                      </span>
                    </div>
                    <h3 className="text-3xl font-extrabold text-gray-900 mb-1">{stat.value}</h3>
                    <p className="text-gray-500 text-lg">{stat.label}</p>
                  </motion.div>
                ))}
              </div>

              {/* Activité Récente */}
              <div className="bg-white rounded-3xl shadow-xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Clock size={22} className="text-green-500" />
                  Activité Récente
                </h2>
                <div className="divide-y divide-gray-100">
                  {recentActivity.map((activity, index) => (
                    <motion.div
                      key={activity.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.08, duration: 0.5 }}
                      className="flex items-center gap-4 py-4"
                    >
                      {getStatusIcon(activity.status)}
                      <div className="flex-1">
                        <p className="text-gray-900 font-medium">{activity.description}</p>
                        <p className="text-sm text-gray-400">{activity.time}</p>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                          activity.status
                        )} shadow`}
                      >
                        {activity.status === 'success'
                          ? 'Succès'
                          : activity.status === 'pending'
                          ? 'En attente'
                          : 'Refusé'}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'enrollments' && (
            <motion.div
              key="enrollments"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl shadow-xl p-10"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
                <Handshake size={22} className="text-blue-500" />
                État des Inscriptions
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {Object.entries(enrollmentStatus).map(([type, info], index) => (
                  <motion.div
                    key={type}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex flex-col items-center p-8 border border-gray-100 rounded-2xl shadow hover:shadow-lg transition-shadow duration-200 bg-gradient-to-br from-white via-gray-50 to-blue-50"
                  >
                    {getStatusIcon(info.status)}
                    <h3 className="text-lg font-semibold text-gray-900 capitalize mt-4 mb-1">
                      Inscription{' '}
                      {type === 'partner'
                        ? 'Partenaire'
                        : type === 'distributor'
                        ? 'Distributeur'
                        : 'Client'}
                    </h3>
                    <p className="text-sm text-gray-500 mb-3">Demande du {info.date}</p>
                    <span
                      className={`px-4 py-1 rounded-full text-sm font-semibold ${getStatusColor(
                        info.status
                      )} shadow`}
                    >
                      {info.status === 'approved'
                        ? 'Approuvé'
                        : info.status === 'pending'
                        ? 'En attente'
                        : 'Refusé'}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'profile' && (
            <motion.div
              key="profile"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl shadow-xl p-10"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
                <User size={22} className="text-green-500" />
                Informations du Profil
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-7">
                  <div className="flex items-center gap-4">
                    <User className="text-green-400" size={24} />
                    <div>
                      <p className="text-sm text-gray-500">Nom Complet</p>
                      <p className="text-gray-900 font-semibold text-lg">{userProfile.name}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="text-blue-400" size={24} />
                    <div>
                      <p className="text-sm text-gray-500">Adresse Email</p>
                      <p className="text-gray-900 font-semibold text-lg">{userProfile.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="text-yellow-400" size={24} />
                    <div>
                      <p className="text-sm text-gray-500">Numéro de Téléphone</p>
                      <p className="text-gray-900 font-semibold text-lg">{userProfile.phone}</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-7">
                  <div className="flex items-center gap-4">
                    <Building className="text-purple-400" size={24} />
                    <div>
                      <p className="text-sm text-gray-500">Entreprise</p>
                      <p className="text-gray-900 font-semibold text-lg">{userProfile.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Star className="text-yellow-500" size={24} />
                    <div>
                      <p className="text-sm text-gray-500">Type d'Adhésion</p>
                      <p className="text-gray-900 font-semibold text-lg">{userProfile.type}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Calendar className="text-green-400" size={24} />
                    <div>
                      <p className="text-sm text-gray-500">Membre depuis</p>
                      <p className="text-gray-900 font-semibold text-lg">{userProfile.joinDate}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10 flex justify-end">
                <button className="bg-gradient-to-tr from-green-500 to-green-700 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:from-green-600 hover:to-green-800 transition-all duration-200">
                  Modifier le Profil
                </button>
              </div>
            </motion.div>
          )}

          {activeTab === 'activity' && (
            <motion.div
              key="activity"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl shadow-xl p-10"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
                <Clock size={22} className="text-green-500" />
                Journal d'Activité
              </h2>
              <div className="space-y-4">
                {[...recentActivity, ...recentActivity].map((activity, index) => (
                  <motion.div
                    key={`${activity.id}-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.04, duration: 0.3 }}
                    className="flex items-start gap-4 p-5 border-l-4 border-green-200 bg-gradient-to-r from-gray-50 via-white to-green-50 rounded-xl shadow"
                  >
                    {getStatusIcon(activity.status)}
                    <div className="flex-1">
                      <p className="text-gray-900 font-medium">{activity.description}</p>
                      <p className="text-sm text-gray-400">{activity.time}</p>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                        activity.status
                      )} shadow`}
                    >
                      {activity.status === 'success'
                        ? 'Succès'
                        : activity.status === 'pending'
                        ? 'En attente'
                        : 'Refusé'}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Dashboard;