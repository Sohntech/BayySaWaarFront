import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Le titre du produit est requis'],
    trim: true,
    maxlength: [200, 'Le titre ne peut pas dépasser 200 caractères']
  },
  description: {
    type: String,
    required: [true, 'La description est requise'],
    maxlength: [2000, 'La description ne peut pas dépasser 2000 caractères']
  },
  category: {
    type: String,
    required: [true, 'La catégorie est requise'],
    enum: [
      'textile',
      'food-beverages',
      'beauty-cosmetics',
      'crafts-art',
      'technology',
      'agriculture',
      'mining',
      'services',
      'other'
    ]
  },
  subcategory: {
    type: String,
    trim: true
  },
  price: {
    amount: {
      type: Number,
      required: [true, 'Le prix est requis'],
      min: [0, 'Le prix ne peut pas être négatif']
    },
    currency: {
      type: String,
      required: true,
      enum: ['USD', 'EUR', 'XOF', 'GHS', 'NGN', 'KES', 'ZAR'],
      default: 'USD'
    },
    unit: {
      type: String,
      enum: ['piece', 'kg', 'ton', 'liter', 'meter', 'square_meter', 'cubic_meter'],
      default: 'piece'
    }
  },
  images: [{
    url: {
      type: String,
      required: true
    },
    publicId: String,
    alt: String,
    isPrimary: {
      type: Boolean,
      default: false
    }
  }],
  specifications: {
    dimensions: {
      length: Number,
      width: Number,
      height: Number,
      unit: {
        type: String,
        enum: ['cm', 'm', 'mm'],
        default: 'cm'
      }
    },
    weight: {
      value: Number,
      unit: {
        type: String,
        enum: ['g', 'kg', 'ton'],
        default: 'kg'
      }
    },
    material: String,
    color: [String],
    origin: {
      country: String,
      region: String
    }
  },
  supplier: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  inventory: {
    quantity: {
      type: Number,
      required: true,
      min: [0, 'La quantité ne peut pas être négative']
    },
    minOrderQuantity: {
      type: Number,
      default: 1,
      min: [1, 'La quantité minimum de commande doit être au moins 1']
    },
    maxOrderQuantity: Number,
    restockDate: Date
  },
  shipping: {
    weight: Number,
    dimensions: {
      length: Number,
      width: Number,
      height: Number
    },
    shippingClass: {
      type: String,
      enum: ['standard', 'fragile', 'hazardous', 'perishable'],
      default: 'standard'
    },
    availableRegions: [String]
  },
  certifications: [{
    name: String,
    issuedBy: String,
    validUntil: Date,
    certificateUrl: String
  }],
  tags: [String],
  status: {
    type: String,
    enum: ['draft', 'active', 'inactive', 'out_of_stock', 'discontinued'],
    default: 'draft'
  },
  featured: {
    type: Boolean,
    default: false
  },
  views: {
    type: Number,
    default: 0
  },
  rating: {
    average: {
      type: Number,
      default: 0,
      min: 0,
      max: 5
    },
    count: {
      type: Number,
      default: 0
    }
  },
  seo: {
    metaTitle: String,
    metaDescription: String,
    slug: {
      type: String,
      unique: true,
      sparse: true
    }
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Indexes for better performance
productSchema.index({ category: 1, status: 1 });
productSchema.index({ supplier: 1 });
productSchema.index({ featured: 1, status: 1 });
productSchema.index({ 'price.amount': 1 });
productSchema.index({ tags: 1 });
productSchema.index({ createdAt: -1 });

// Text search index
productSchema.index({
  title: 'text',
  description: 'text',
  tags: 'text'
});

// Virtual for primary image
productSchema.virtual('primaryImage').get(function() {
  const primary = this.images.find(img => img.isPrimary);
  return primary || this.images[0] || null;
});

// Generate slug before saving
productSchema.pre('save', function(next) {
  if (this.isModified('title') && !this.seo.slug) {
    this.seo.slug = this.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  }
  next();
});

// Update views
productSchema.methods.incrementViews = function() {
  this.views += 1;
  return this.save({ validateBeforeSave: false });
};

export default mongoose.model('Product', productSchema);