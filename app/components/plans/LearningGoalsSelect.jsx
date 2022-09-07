import Select from 'react-select'

function LearningGoalsSelect({options, onChange}) {
  return (
    <>
      <label 
        htmlFor="focus" 
        className='text-xl font-bold mb-2 block'
      >
        Learning Goals
      </label>
      <Select
        placeholder='e.g. "Empathy"'
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