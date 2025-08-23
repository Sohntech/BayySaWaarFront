import { body, validationResult } from 'express-validator';

// Handle validation errors
export const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: 'Erreurs de validation',
      errors: errors.array()
    });
  }
  next();
};

// User registration validation
export const validateUserRegistration = [
  body('firstName')
    .trim()
    .notEmpty()
    .withMessage('Le prénom est requis')
    .isLength({ min: 2, max: 50 })
    .withMessage('Le prénom doit contenir entre 2 et 50 caractères'),
  
  body('lastName')
    .trim()
    .notEmpty()
    .withMessage('Le nom est requis')
    .isLength({ min: 2, max: 50 })
    .withMessage('Le nom doit contenir entre 2 et 50 caractères'),
  
  body('email')
    .isEmail()
    .withMessage('Email invalide')
    .normalizeEmail(),
  
  body('password')
    .isLength({ min: 6 })
    .withMessage('Le mot de passe doit contenir au moins 6 caractères')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)
    .withMessage('Le mot de passe doit contenir au moins une minuscule, une majuscule et un chiffre'),
  
  body('phone')
    .optional()
    .isMobilePhone()
    .withMessage('Numéro de téléphone invalide'),
  
  handleValidationErrors
];

// User login validation
export const validateUserLogin = [
  body('email')
    .isEmail()
    .withMessage('Email invalide')
    .normalizeEmail(),
  
  body('password')
    .notEmpty()
    .withMessage('Le mot de passe est requis'),
  
  handleValidationErrors
];

// Contact form validation
export const validateContact = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Le nom est requis')
    .isLength({ max: 100 })
    .withMessage('Le nom ne peut pas dépasser 100 caractères'),
  
  body('email')
    .isEmail()
    .withMessage('Email invalide')
    .normalizeEmail(),
  
  body('subject')
    .trim()
    .notEmpty()
    .withMessage('Le sujet est requis')
    .isLength({ max: 200 })
    .withMessage('Le sujet ne peut pas dépasser 200 caractères'),
  
  body('message')
    .trim()
    .notEmpty()
    .withMessage('Le message est requis')
    .isLength({ max: 2000 })
    .withMessage('Le message ne peut pas dépasser 2000 caractères'),
  
  body('category')
    .isIn(['information', 'partnership', 'support', 'complaint', 'other'])
    .withMessage('Catégorie invalide'),
  
  handleValidationErrors
];

// Product validation
export const validateProduct = [
  body('title')
    .trim()
    .notEmpty()
    .withMessage('Le titre est requis')
    .isLength({ max: 200 })
    .withMessage('Le titre ne peut pas dépasser 200 caractères'),
  
  body('description')
    .trim()
    .notEmpty()
    .withMessage('La description est requise')
    .isLength({ max: 2000 })
    .withMessage('La description ne peut pas dépasser 2000 caractères'),
  
  body('category')
    .isIn(['textile', 'food-beverages', 'beauty-cosmetics', 'crafts-art', 'technology', 'agriculture', 'mining', 'services', 'other'])
    .withMessage('Catégorie invalide'),
  
  body('price.amount')
    .isFloat({ min: 0 })
    .withMessage('Le prix doit être un nombre positif'),
  
  body('price.currency')
    .isIn(['USD', 'EUR', 'XOF', 'GHS', 'NGN', 'KES', 'ZAR'])
    .withMessage('Devise invalide'),
  
  body('inventory.quantity')
    .isInt({ min: 0 })
    .withMessage('La quantité doit être un nombre entier positif'),
  
  handleValidationErrors
];

// Blog post validation
export const validateBlogPost = [
  body('title')
    .trim()
    .notEmpty()
    .withMessage('Le titre est requis')
    .isLength({ max: 200 })
    .withMessage('Le titre ne peut pas dépasser 200 caractères'),
  
  body('excerpt')
    .trim()
    .notEmpty()
    .withMessage('L\'extrait est requis')
    .isLength({ max: 500 })
    .withMessage('L\'extrait ne peut pas dépasser 500 caractères'),
  
  body('content')
    .trim()
    .notEmpty()
    .withMessage('Le contenu est requis'),
  
  body('category')
    .isIn(['business-strategy', 'technology', 'market-insights', 'success-stories', 'industry-news', 'partnerships', 'innovation'])
    .withMessage('Catégorie invalide'),
  
  handleValidationErrors
];

// Enrollment validation
export const validateEnrollment = [
  body('type')
    .isIn(['partner', 'distributor', 'client'])
    .withMessage('Type d\'inscription invalide'),
  
  body('personalInfo.firstName')
    .trim()
    .notEmpty()
    .withMessage('Le prénom est requis'),
  
  body('personalInfo.lastName')
    .trim()
    .notEmpty()
    .withMessage('Le nom est requis'),
  
  body('personalInfo.email')
    .isEmail()
    .withMessage('Email invalide')
    .normalizeEmail(),
  
  body('personalInfo.phone')
    .notEmpty()
    .withMessage('Le téléphone est requis'),
  
  body('businessInfo.companyName')
    .trim()
    .notEmpty()
    .withMessage('Le nom de l\'entreprise est requis'),
  
  handleValidationErrors
];