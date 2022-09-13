import Select from 'react-select'

function LearningGoalsSelect({options, onChange}) {
  return (
    <>
      <label 
        htmlFor="focus" 
        className='block mt-3 mb-1 text-lg font-semibold'
      >
        I want my child to learn about...
      </label>
      <Select
        placeholder='e.g. "Vocabulary"'
        className="w-fit min-w-[225px]" 
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