import axios from 'axios';

// Create axios instance with base configuration
const api = axios.create({
  baseURL: import.meta.env.DEV ? '/api' : 'https://bayysawaarback-production.up.railway.app/api',
  timeout: 60000, // 60 secondes pour les uploads
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token expired or invalid, redirect to login
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Auth API endpoints
export const authAPI = {
  login: (email: string, password: string) =>
    api.post('/auth/login', { email, password }),
  
  register: (userData: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phone?: string;
    role?: string;
    companyDetails?: any;
  }) => api.post('/auth/register', userData),
  
  getProfile: () => api.get('/auth/profile'),
  
  getMe: () => api.get('/auth/me'),
  
  updateProfile: (updates: any) => api.put('/auth/profile', updates),
  
  changePassword: (currentPassword: string, newPassword: string) =>
    api.post('/auth/change-password', { currentPassword, newPassword }),
  
  resetPassword: (email: string) =>
    api.post('/auth/reset-password', { email }),
};

// Dashboard API endpoints
export const dashboardAPI = {
  getDashboardData: () => api.get('/dashboard/my-data'),
};

// Enrollments API endpoints
export const enrollmentsAPI = {
  submitEnrollment: (enrollmentData: FormData) => 
    api.post('/enrollments/submit', enrollmentData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      timeout: 120000, // 2 minutes pour les uploads d'images
    }),
  
  getMyEnrollments: () => api.get('/enrollments/my-status'),
  
  getAllEnrollments: (params?: any) => api.get('/enrollments', { params }),
  
  getEnrollmentById: (id: string) => api.get(`/enrollments/${id}`),
  
  updateEnrollment: (id: string, updates: any) =>
    api.put(`/enrollments/${id}`, updates),
  
  deleteEnrollment: (id: string) => api.delete(`/enrollments/${id}`),
};

// Products API endpoints
export const productsAPI = {
  getAllProducts: (params?: any) => api.get('/products', { params }),
  
  getProductById: (id: string) => api.get(`/products/${id}`),
  
  createProduct: (productData: FormData) => 
    api.post('/products', productData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      timeout: 120000, // 2 minutes pour les uploads d'images
    }),
  
  updateProduct: (id: string, updates: FormData) =>
    api.put(`/products/${id}`, updates, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      timeout: 120000, // 2 minutes pour les uploads d'images
    }),
  
  deleteProduct: (id: string) => api.delete(`/products/${id}`),
};

// Blogs API endpoints
export const blogsAPI = {
  getAllBlogs: (params?: any) => api.get('/blogs', { params }),
  
  getBlogById: (id: string) => api.get(`/blogs/${id}`),
  
  createBlog: (blogData: FormData) => 
    api.post('/blogs', blogData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      timeout: 120000, // 2 minutes pour les uploads d'images
    }),
  
  updateBlog: (id: string, updates: FormData) =>
    api.put(`/blogs/${id}`, updates, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      timeout: 120000, // 2 minutes pour les uploads d'images
    }),
  
  deleteBlog: (id: string) => api.delete(`/blogs/${id}`),
};

// Contacts API endpoints
export const contactsAPI = {
  submitContact: (contactData: any) =>
    api.post('/contacts/submit', contactData),
  
  subscribeNewsletter: (email: string) =>
    api.post('/contacts/newsletter', { email }),
  
  getAllContacts: () => api.get('/contacts'),
  
  updateContactStatus: (id: string, status: string) =>
    api.patch(`/contacts/${id}`, { status }),
};

// Admin API endpoints
export const adminAPI = {
  getAdminStats: () => api.get('/admin/stats'),
  
  getAllUsers: (params?: any) => api.get('/admin/users', { params }),
  
  getUsersByRole: (role: string) => api.get(`/admin/users/role/${role}`),
  
  searchUsers: (query: string) => api.get('/admin/users/search', { params: { query } }),
  
  filterUsers: (filters: any) => api.get('/admin/users/filter', { params: filters }),
  
  getUserStats: () => api.get('/admin/user-stats'),
  
  deleteUser: (id: string) => api.delete(`/admin/users/${id}`),
  
  getAllEnrollments: (params?: any) => api.get('/admin/enrollments', { params }),
  
  getEnrollmentById: (id: string) => api.get(`/admin/enrollments/${id}`),
  
  updateEnrollment: (id: string, updates: any) =>
    api.put(`/admin/enrollments/${id}`, updates),
  
  deleteEnrollment: (id: string) => api.delete(`/admin/enrollments/${id}`),
};

// Social API endpoints
export const socialAPI = {
  setConfig: (configData: any) => api.post('/social/config', configData),
  
  getConfigs: () => api.get('/social/config'),
  
  deleteConfig: (id: string) => api.delete(`/social/config/${id}`),
  
  fetchPosts: (platform: string, limit?: number) =>
    api.get('/social/posts', { params: { platform, limit } }),
};

export default api;
