import React from 'react';
import { useAuth } from '../context/AuthContext';
import Dashboard from '../pages/Dashboard';
import AdminDashboard from '../pages/AdminDashboard';

const DashboardWrapper = () => {
  const { user } = useAuth();

  // Si l'utilisateur est admin, afficher le dashboard admin
  if (user?.role === 'admin') {
    return <AdminDashboard />;
  }

  // Sinon, afficher le dashboard normal pour les partenaires et distributeurs
  return <Dashboard />;
};

export default DashboardWrapper;
