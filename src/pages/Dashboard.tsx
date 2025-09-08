import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { dashboardAPI, enrollmentsAPI } from '../services/api';
import {
  Building2, 
  FileText, 
  Clock, 
  CheckCircle,
  XCircle, 
  AlertCircle,
  User,
  TrendingUp
} from 'lucide-react';

interface Enrollment {
  _id: string;
  type: string;
  status: string;
  companyName: string;
  createdAt: string;
  businessType: string;
}

interface DashboardStats {
  totalEnrollments: number;
  pendingEnrollments: number;
  approvedEnrollments: number;
  recentOrders: any[];
  recentContacts: any[];
}

const Dashboard = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<'dashboard' | 'profile'>('dashboard');
  const [enrollments, setEnrollments] = useState<Enrollment[]>([]);
  const [stats, setStats] = useState<DashboardStats>({
    totalEnrollments: 0,
    pendingEnrollments: 0,
    approvedEnrollments: 0,
    recentOrders: [],
    recentContacts: []
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setIsLoading(true);
        setError(''); // Clear any previous errors
        
        console.log('🔄 Fetching dashboard data...');
        console.log('📡 API calls to make:');
        console.log('   - Dashboard: /dashboard/my-data');
        console.log('   - Enrollments: /enrollments/my-status');
        
        const [dashboardResponse, enrollmentsResponse] = await Promise.all([
          dashboardAPI.getDashboardData(),
          enrollmentsAPI.getMyEnrollments()
        ]);

        console.log('✅ Dashboard response:', dashboardResponse.data);
        console.log('✅ Enrollments response:', enrollmentsResponse.data);

        setStats(dashboardResponse.data.stats);
        setEnrollments(enrollmentsResponse.data);
      } catch (err: any) {
        console.error('❌ Error fetching dashboard data:', err);
        console.error('   Error details:', {
          code: err.code,
          message: err.message,
          status: err.response?.status,
          statusText: err.response?.statusText,
          data: err.response?.data
        });
        
        // Handle different types of errors
        if (err.code === 'ERR_NETWORK' || err.message === 'Network Error') {
          setError('Impossible de se connecter au serveur. Vérifiez que votre backend est démarré sur le port 5005.');
        } else if (err.response?.status === 401) {
          setError('Session expirée. Veuillez vous reconnecter.');
        } else if (err.response?.status === 403) {
          setError('Accès refusé. Vous n\'avez pas les permissions nécessaires.');
        } else if (err.response?.status === 404) {
          setError('Endpoint non trouvé. Vérifiez la configuration de l\'API.');
        } else if (err.response?.data?.message) {
          setError(err.response.data.message);
        } else {
          setError('Erreur lors du chargement des données. Vérifiez votre connexion.');
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'rejected':
        return <XCircle className="w-5 h-5 text-red-600" />;
      case 'pending':
        return <Clock className="w-5 h-5 text-yellow-600" />;
      default:
        return <AlertCircle className="w-5 h-5 text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved':
        return 'bg-green-100 text-green-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'approved':
        return 'Approuvé';
      case 'rejected':
        return 'Rejeté';
      case 'pending':
        return 'En attente';
      default:
        return status;
    }
  };

  if (isLoading) {
  return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-green-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="text-red-600 text-xl mb-4">Erreur</div>
          <div className="text-gray-600 mb-6">{error}</div>
              <button
            onClick={() => {
              setError('');
              setIsLoading(true);
              // Retry fetching data
              setTimeout(() => {
                const fetchDashboardData = async () => {
                  try {
                    const [dashboardResponse, enrollmentsResponse] = await Promise.all([
                      dashboardAPI.getDashboardData(),
                      enrollmentsAPI.getMyEnrollments()
                    ]);
                    setStats(dashboardResponse.data.stats);
                    setEnrollments(enrollmentsResponse.data);
                    setError('');
                  } catch (err: any) {
                    console.error('Retry failed:', err);
                    if (err.code === 'ERR_NETWORK' || err.message === 'Network Error') {
                      setError('Impossible de se connecter au serveur. Vérifiez que votre backend est démarré sur le port 5005.');
                    } else {
                      setError('Erreur lors du chargement des données. Vérifiez votre connexion.');
                    }
                  } finally {
                    setIsLoading(false);
                  }
                };
                fetchDashboardData();
              }, 100);
            }}
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            Réessayer
              </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-white/20 shadow-xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-2">
              Tableau de bord
            </h1>
            <p className="text-gray-600 text-lg">
              Bienvenue, <span className="font-semibold text-gray-900">{user?.firstName} {user?.lastName}</span>
            </p>
          </div>
        </motion.div>

        {/* Navigation par onglets */}
        <div className="bg-white/70 backdrop-blur-xl border-b border-white/20 rounded-t-2xl mb-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
              <button
                onClick={() => setActiveTab('dashboard')}
                className={`py-3 sm:py-4 px-4 sm:px-6 rounded-xl font-medium text-sm transition-all duration-300 ${
                  activeTab === 'dashboard'
                    ? 'bg-green-500 text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-4 h-4" />
                  <span>Tableau de Bord</span>
                </div>
              </button>
              <button
                onClick={() => setActiveTab('profile')}
                className={`py-3 sm:py-4 px-4 sm:px-6 rounded-xl font-medium text-sm transition-all duration-300 ${
                  activeTab === 'profile'
                    ? 'bg-green-500 text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>Mon Profil</span>
                </div>
              </button>
            </nav>
          </div>
        </div>

        {/* Contenu des onglets */}
        {activeTab === 'dashboard' && (
          <>
            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white/60 backdrop-blur-xl rounded-2xl p-4 sm:p-6 border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg">
                <FileText className="w-6 h-6 text-white" />
              </div>
                      <div className="flex-1">
                <p className="text-sm font-medium text-gray-600 mb-1">Total Enrôlements</p>
                <p className="text-2xl sm:text-3xl font-bold text-gray-900">{stats.totalEnrollments}</p>
                </div>
              </div>
            </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/60 backdrop-blur-xl rounded-2xl p-4 sm:p-6 border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <div className="p-3 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl shadow-lg">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-600 mb-1">En attente</p>
                <p className="text-2xl sm:text-3xl font-bold text-gray-900">{stats.pendingEnrollments}</p>
              </div>
              </div>
            </motion.div>

            <motion.div
            initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white/60 backdrop-blur-xl rounded-2xl p-4 sm:p-6 border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl shadow-lg">
                <CheckCircle className="w-6 h-6 text-white" />
                    </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-600 mb-1">Approuvés</p>
                <p className="text-2xl sm:text-3xl font-bold text-gray-900">{stats.approvedEnrollments}</p>
                    </div>
                  </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white/60 backdrop-blur-xl rounded-2xl p-4 sm:p-6 border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <div className="p-3 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl shadow-lg">
                <Building2 className="w-6 h-6 text-white" />
                    </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-600 mb-1">Rôle</p>
                <p className="text-lg sm:text-2xl font-bold text-gray-900 capitalize">{user?.role}</p>
              </div>
              </div>
            </motion.div>
        </div>

        {/* Recent Enrollments */}
            <motion.div
          initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white/70 backdrop-blur-xl rounded-2xl border border-white/30 shadow-xl"
        >
          <div className="px-4 sm:px-6 py-4 sm:py-6 border-b border-white/20">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Enrôlements Récents</h2>
            <p className="text-gray-600 mt-1">Vos dernières demandes d'enrôlement</p>
          </div>
          <div className="p-4 sm:p-6">
            {enrollments.length === 0 ? (
              <div className="text-center py-8 sm:py-12">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 sm:w-10 sm:h-10 text-gray-400" />
                </div>
                <p className="text-gray-500 text-lg">Aucun enrôlement trouvé</p>
                <p className="text-gray-400 text-sm mt-1">Vos demandes d'enrôlement apparaîtront ici</p>
              </div>
            ) : (
              <div className="space-y-3 sm:space-y-4">
                {enrollments.slice(0, 5).map((enrollment, index) => (
                  <motion.div
                    key={enrollment._id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="bg-white/60 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/40 hover:bg-white/80 transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
                      <div className="flex items-start sm:items-center space-x-3 sm:space-x-4">
                        <div className="flex-shrink-0">
                          {getStatusIcon(enrollment.status)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-gray-900 text-lg sm:text-xl truncate">{enrollment.companyName}</p>
                          <p className="text-sm sm:text-base text-gray-600 mt-1">{enrollment.businessType}</p>
                          <p className="text-xs sm:text-sm text-gray-500 mt-1">
                            {new Date(enrollment.createdAt).toLocaleDateString('fr-FR', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </p>
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium ${getStatusColor(enrollment.status)}`}>
                          {getStatusText(enrollment.status)}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
              </div>
            </motion.div>
          </>
        )}

        {/* Onglet Profil */}
        {activeTab === 'profile' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/70 backdrop-blur-xl rounded-2xl border border-white/30 shadow-xl"
          >
            <div className="px-4 sm:px-6 py-4 sm:py-6 border-b border-white/20">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Informations du Profil</h2>
              <p className="text-gray-600 mt-1">Vos informations personnelles et de compte</p>
            </div>
            <div className="p-4 sm:p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Photo de profil */}
                <div className="flex flex-col items-center space-y-4">
                  <div className="relative">
                    {user?.photo?.url ? (
                      <img
                        src={user.photo.url}
                        alt={`${user.firstName} ${user.lastName}`}
                        className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
                      />
                    ) : (
                      <div className="w-32 h-32 rounded-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center border-4 border-white shadow-lg">
                        <User className="w-16 h-16 text-white" />
                      </div>
                    )}
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-900">{user?.firstName} {user?.lastName}</h3>
                    <p className="text-gray-600 capitalize">{user?.role}</p>
                  </div>
                </div>

                {/* Informations détaillées */}
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Prénom</label>
                      <div className="bg-white/60 backdrop-blur-sm rounded-lg p-3 border border-white/40">
                        <p className="text-gray-900">{user?.firstName || 'Non renseigné'}</p>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
                      <div className="bg-white/60 backdrop-blur-sm rounded-lg p-3 border border-white/40">
                        <p className="text-gray-900">{user?.lastName || 'Non renseigné'}</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <div className="bg-white/60 backdrop-blur-sm rounded-lg p-3 border border-white/40">
                      <p className="text-gray-900">{user?.email || 'Non renseigné'}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
                      <div className="bg-white/60 backdrop-blur-sm rounded-lg p-3 border border-white/40">
                        <p className="text-gray-900">{user?.phone || 'Non renseigné'}</p>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Rôle</label>
                      <div className="bg-white/60 backdrop-blur-sm rounded-lg p-3 border border-white/40">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 capitalize">
                          {user?.role || 'Non défini'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {user?.companyDetails && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Détails de l'entreprise</label>
                      <div className="bg-white/60 backdrop-blur-sm rounded-lg p-3 border border-white/40">
                        <p className="text-gray-900">{JSON.stringify(user.companyDetails)}</p>
                      </div>
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Membre depuis</label>
                    <div className="bg-white/60 backdrop-blur-sm rounded-lg p-3 border border-white/40">
                      <p className="text-gray-900">
                        Non disponible
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;