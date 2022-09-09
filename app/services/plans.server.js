import Users from '~/models/Users'
import shows from '~/shows.json'
import {getUser} from './users.server'
import {redirect} from "@remix-run/node"
import FeaturedPlans from '~/components/plans/FeaturedPlans'

export async function createPlan(request) {
  const userId = await request.headers.get("Cookie")
  if (userId === 'null' || !userId) return null
  
  const formData = await request.formData()
  const {planName, plan, focuses} = Object.fromEntries(formData)
  const planArr = plan.split(",")
  const user = await Users.findById({_id: userId.toString()})
  console.log(focuses)
  if (user.plans.some(p => p.name === planName)) {
    return {error: "Plan names must be unique"}
  }

  await Users.findByIdAndUpdate({_id: userId.toString()}, {
    $push: {plans: {name: planName, images: planArr}}
  })
  
  return {success: true}
}

export async function deletePlan(request, params) {
  const userId = await request.headers.get("Cookie")
  if (userId === 'null' || !userId) return null
  const plan = await params.plan
  await Users.findByIdAndUpdate({_id: userId.toString()}, {
    $pull: {plans: {name: plan}}
  })
  return redirect('/dashboard/plans')
}

export async function getPlan(request, params) {
  const planName = await params.plan
  const user = await getUser(request)
  const plan = user.plans.find(p => p.name === planName)
  const planShows = shows.filter((s) => plan.images.includes(s.image))
  return {name: plan.name, show: planShows}
}

export async function getFeaturedPlans(username) {
  const plansArray = await Users
  .aggregate([
    {$match: {"plans.0": {"$exists": true}}},
    {$match: {"username": {$ne: username}}},
    {$project: {plans: 1, username: 1}},
    {$sample: {size: 3}}
  ])
  const featuredPlans = plansArray.map(p => {
      return {username: p.username, plan: p.plans[0]}
    })
    
    return featuredPlans
}

export async function getUnownedPlan(username, planName) {
  const creator = await Users.findOne({username})
  const plan = creator.plans.filter(p => p.name === planName)[0]
  const planShows = shows.filter((s) => plan.images.includes(s.image))
  return planShows
}