import {redirect} from '@remix-run/node'
import Users from '~/models/Users'
import bcrypt from 'bcrypt'

export async function createUser(request) {
  const formData = await request.formData()
  const {username, password} = Object.fromEntries(formData)

  const usernameExists = await Users.findOne({username}, "username")
  if (usernameExists) return {error: "That username is taken 😿"}
  if (password.length < 4) return {error: "Minimum password length 4 😿"}


  const hash = await bcrypt.hash(password, 10)
  const user = await Users.create({
    username,
    password: hash,
    likes: [],
    plans: []
  })

  if (!user) return {error: "Something went wrong 🤖"}
  
  return redirect('/dashboard', {
    headers: {
      "Set-Cookie": user._id.toString(),
      "Max-Age": 60 * 60 * 1000
    }
    })
}

export async function loginUser(request) {
  const formData = await request.formData()
  const {username, password} = Object.fromEntries(formData)

  const user = await Users.findOne({username})
  if (!user) 
  return {error: "Invalid username or password 😿"}
  const verifiedPassword = await bcrypt.compare(password, user.password)
  
  if (!verifiedPassword) 
  return {error: "Invalid username or password 😿"}
  
  const userId = user._id.toString()
  
  if (!userId)
  return {error: "Invalid username or password 😿"}

  return redirect('/dashboard', {
    headers: {
      "Set-Cookie": userId,
      "Max-Age": 60 * 60 * 1000
    }
  })
}

export async function getUser(request) {
  let userId = await request.headers.get("Cookie")
  if (userId === 'null' || !userId) return null
  
  const user = await Users.findOne({_id: userId})
  if (!user) return null
  
  user.password = ""
  return user
}

export async function getUserSession(request) {
  const user = await getUser(request)
  return user ? redirect('/dashboard') : null
}

export async function handleLike(request) {
  const formData = await request.formData()
  const userId = await request.headers.get("Cookie")
  const {show, action} = Object.fromEntries(formData)
  if (userId === 'null' || !userId) return null

  if (action === 'like') {
    await Users.findByIdAndUpdate({_id: userId.toString()}, {
      $push: {likes: show}
    })
  } else {
    await Users.findByIdAndUpdate({_id: userId.toString()}, {
      $pull: {likes: show}
    })
  }
  return null
}

export async function createPlan(request) {
  const userId = await request.headers.get("Cookie")
  if (userId === 'null' || !userId) return null
  
  const formData = await request.formData()
  const {planName, plan} = Object.fromEntries(formData)
  const planArr = plan.split(",")
  
  await Users.findByIdAndUpdate({_id: userId.toString()}, {
    $push: {plans: {name: planName, images: planArr}}
  })
  
  return null
}