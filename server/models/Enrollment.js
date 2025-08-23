import mongoose from 'mongoose';

const enrollmentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  type: {
    type: String,
    required: [true, 'Le type d\'inscription est requis'],
    enum: ['partner', 'distributor', 'client']
  },
  personalInfo: {
    firstName: {
      type: String,
      required: true,
      trim: true
    },
    lastName: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      lowercase: true
    },
    phone: {
      type: String,
      required: true,
      trim: true
    },
    country: {
      type: String,
      required: true,
      trim: true
    },
    city: {
      type: String,
      required: true,
      trim: true
    }
  },
  businessInfo: {
    companyName: {
      type: String,
      required: true,
      trim: true
    },
    businessType: String,
    yearsInBusiness: String,
    website: String,
    description: String,
    industry: String,
    companySize: String
  },
  specificInfo: {
    // For partners
    partnershipType: String,
    expectedVolume: String,
    
    // For distributors
    distributionArea: String,
    targetMarkets: String,
    experience: String,
    
    // For clients
    interests: [String]
  },
  documents: [{
    name: String,
    url: String,
    publicId: String,
    uploadedAt: {
      type: Date,
      default: Date.now
    }
  }],
  status: {
    type: String,
    enum: ['pending', 'under-review', 'approved', 'rejected', 'on-hold'],
    default: 'pending'
  },
  reviewProcess: {
    reviewedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    reviewedAt: Date,
    reviewNotes: String,
    rejectionReason: String,
    approvalConditions: [String]
  },
  timeline: [{
    status: String,
    changedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    changedAt: {
      type: Date,
      default: Date.now
    },
    notes: String
  }],
  priority: {
    type: String,
    enum: ['low', 'medium', 'high'],
    default: 'medium'
  },
  source: {
    type: String,
    enum: ['website', 'referral', 'social-media', 'event', 'other'],
    default: 'website'
  },
  followUpDate: Date,
  tags: [String]
}, {
  timestamps: true
});

// Indexes
enrollmentSchema.index({ user: 1, type: 1 });
enrollmentSchema.index({ status: 1, createdAt: -1 });
enrollmentSchema.index({ type: 1, status: 1 });
enrollmentSchema.index({ 'reviewProcess.reviewedBy': 1 });
enrollmentSchema.index({ priority: 1, status: 1 });

// Add to timeline when status changes
enrollmentSchema.pre('save', function(next) {
  if (this.isModified('status') && !this.isNew) {
    this.timeline.push({
      status: this.status,
      changedAt: new Date()
    });
  }
  next();
});

export default mongoose.model('Enrollment', enrollmentSchema);