import mongoose from 'mongoose'

const FeaturedPlansSchema = mongoose.Schema({
  plans: Array,
  expireAt: {
    type: Date,
    expires: '720m',
    default: Date.now(),
  },
})

const FeaturedPlans =
  mongoose.models.FeaturedPlans ||
  mongoose.model('FeaturedPlans', FeaturedPlansSchema)

export default FeaturedPlans
