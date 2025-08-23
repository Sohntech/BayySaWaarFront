import mongoose from 'mongoose';

const blogPostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Le titre est requis'],
    trim: true,
    maxlength: [200, 'Le titre ne peut pas dépasser 200 caractères']
  },
  slug: {
    type: String,
    unique: true,
    sparse: true
  },
  excerpt: {
    type: String,
    required: [true, 'L\'extrait est requis'],
    maxlength: [500, 'L\'extrait ne peut pas dépasser 500 caractères']
  },
  content: {
    type: String,
    required: [true, 'Le contenu est requis']
  },
  featuredImage: {
    url: String,
    publicId: String,
    alt: String
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  category: {
    type: String,
    required: [true, 'La catégorie est requise'],
    enum: [
      'business-strategy',
      'technology',
      'market-insights',
      'success-stories',
      'industry-news',
      'partnerships',
      'innovation'
    ]
  },
  tags: [String],
  status: {
    type: String,
    enum: ['draft', 'published', 'archived'],
    default: 'draft'
  },
  featured: {
    type: Boolean,
    default: false
  },
  publishedAt: {
    type: Date,
    default: null
  },
  views: {
    type: Number,
    default: 0
  },
  readTime: {
    type: Number, // in minutes
    default: 5
  },
  seo: {
    metaTitle: String,
    metaDescription: String,
    keywords: [String]
  },
  comments: [{
    author: {
      name: String,
      email: String
    },
    content: String,
    status: {
      type: String,
      enum: ['pending', 'approved', 'rejected'],
      default: 'pending'
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  }],
  likes: {
    type: Number,
    default: 0
  },
  shares: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Indexes
blogPostSchema.index({ status: 1, publishedAt: -1 });
blogPostSchema.index({ category: 1, status: 1 });
blogPostSchema.index({ featured: 1, status: 1 });
blogPostSchema.index({ author: 1 });
blogPostSchema.index({ tags: 1 });

// Text search index
blogPostSchema.index({
  title: 'text',
  excerpt: 'text',
  content: 'text',
  tags: 'text'
});

// Generate slug before saving
blogPostSchema.pre('save', function(next) {
  if (this.isModified('title') && !this.slug) {
    this.slug = this.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  }
  
  // Set publishedAt when status changes to published
  if (this.isModified('status') && this.status === 'published' && !this.publishedAt) {
    this.publishedAt = new Date();
  }
  
  // Calculate read time based on content length
  if (this.isModified('content')) {
    const wordsPerMinute = 200;
    const wordCount = this.content.split(/\s+/).length;
    this.readTime = Math.ceil(wordCount / wordsPerMinute);
  }
  
  next();
});

// Virtual for approved comments
blogPostSchema.virtual('approvedComments').get(function() {
  return this.comments.filter(comment => comment.status === 'approved');
});

// Update views
blogPostSchema.methods.incrementViews = function() {
  this.views += 1;
  return this.save({ validateBeforeSave: false });
};

export default mongoose.model('BlogPost', blogPostSchema);