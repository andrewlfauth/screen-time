import CreatePlan from "../../components/dashboard/CreatePlan"
import Select from 'react-select'

function Index() {
  return (
    <div className="px-2">
      <div className="bg-gray-100 p-4 rounded-md">
        <h2 className='text-lg font-semibold mb-2'>
          Discover shows that fit your child's needs
        </h2>
        <p className="max-w-md">Select the learning goals that you want your child to focus on and we'll match you with shows with the same focus.</p>
      </div>

      <Select 
      
      />
      {/* <CreatePlan /> */}
    </div>

  )
}

export default Index