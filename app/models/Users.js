import mongoose from 'mongoose'

const UsersSchema = mongoose.Schema({
  username: String,
  password: String,
  likes: Array  
}, 
{
  timestamps: true
})

const Users = mongoose.models.Users || mongoose.model("Users", UsersSchema)

export default Users