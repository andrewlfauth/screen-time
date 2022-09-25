import Users from '~/models/Users'
import FeaturedPlans from '~/models/FeaturedPlans'
import shows from '~/shows.json'
import { getUser } from './users.server'
import { redirect } from '@remix-run/node'

export async function createPlan(request) {
  const userId = await request.headers.get('Cookie')
  if (userId === 'null' || !userId) return null

  const formData = await request.formData()
  const { planName, plan } = Object.fromEntries(formData)
  const planArr = plan.split(',')
  const user = await Users.findById({ _id: userId.toString() })

  if (user.plans.some((p) => p.name === planName)) {
    return { error: 'Plan names must be unique' }
  }

  await Users.findByIdAndUpdate(
    { _id: userId.toString() },
    {
      $push: { plans: { name: planName, images: planArr } },
    }
  )

  return { success: true }
}

export async function deletePlan(request, params) {
  const userId = await request.headers.get('Cookie')
  if (userId === 'null' || !userId) return null
  const plan = await params.plan
  await Users.findByIdAndUpdate(
    { _id: userId.toString() },
    {
      $pull: { plans: { name: plan } },
    }
  )
  return redirect('/dashboard/plans')
}

export async function getPlan(request, params) {
  const planName = await params.plan
  const user = await getUser(request)
  const plan = user.plans.find((p) => p.name === planName)
  if (!plan) return redirect('/dashboard')
  const planShows = shows.filter((s) => plan.images.includes(s.image))
  return { name: plan.name, show: planShows }
}

export async function getFeaturedPlans(username) {
  const currentFeaturedPlans = await FeaturedPlans.find({})
  if (currentFeaturedPlans.length) {
    return currentFeaturedPlans[0].plans
  }

  const randomPlans = await Users.aggregate([
    { $match: { 'plans.0': { $exists: true } } },
    { $match: { username: { $ne: username } } },
    { $project: { plans: 1, username: 1 } },
    { $sample: { size: 2 } },
  ])
  const featuredPlans = randomPlans.map((p) => {
    return {
      username: p.username,
      plan: p.plans[Math.floor(Math.random() * p.plans.length)],
    }
  })
  await FeaturedPlans.create({ plans: featuredPlans })

  return featuredPlans
}

export async function getUnownedPlan(username, planName) {
  const creator = await Users.findOne({ username })
  const plan = creator.plans.filter((p) => p.name === planName)[0]
  const planShows = shows.filter((s) => plan.images.includes(s.image))
  return planShows
}
