const mongoose = require('mongoose');

const progressSchema = new mongoose.Schema({
  user: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true,
    index: true 
  },
  domain: { 
    type: String, 
    required: true, 
    enum: ['webdev', 'aiml', 'cybersec', 'design', 'appdev', 'dsa'],
    index: true 
  },
  weeks: [
    {
      weekNumber: { 
        type: Number, 
        required: true,
        min: 1 
      },
      tasksCompleted: [{ 
        type: Number,
        min: 0 
      }], 
      quizPassed: { 
        type: Boolean, 
        default: false 
      },
      quizScore: {
        type: Number,
        default: 0,
        min: 0,
        max: 100
      },
      completedAt: { 
        type: Date,
        default: null 
      }
    }
  ]
}, {
  timestamps: true
});

// Compound index for user and domain
progressSchema.index({ user: 1, domain: 1 }, { unique: true });

// Ensure weeks are sorted by weekNumber
progressSchema.pre('save', function(next) {
  if (this.weeks) {
    this.weeks.sort((a, b) => a.weekNumber - b.weekNumber);
  }
  next();
});

module.exports = mongoose.model('Progress', progressSchema);