import Users from '~/models/Users'
import shows from '~/shows.json'
import {getUser} from './users.server'
import {redirect} from "@remix-run/node"

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