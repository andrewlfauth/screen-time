import Select from 'react-select'

function LearningGoalsSelect({options, onChange}) {
  return (
    <>
      <label 
        htmlFor="focus" 
        className='block mt-3 mb-1 text-sm font-semibold'
      >
        What is your child learning?
      </label>
      <Select
        placeholder='e.g. "Literacy"'
        className="w-fit min-w-[200px]" 
        name="focus"
        isMulti
        isSearchable={false}
        options={options}
        onChange={onChange}
      />
    </>
  )
}

export default LearningGoalsSelect