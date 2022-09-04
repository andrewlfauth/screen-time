import Select from 'react-select'

function SelectFilter({name, options, onChange, value}) {
  return (
    <>
        <label 
          htmlFor={name}
          className='text-xl font-bold mb-2 block'
        >
          {name[0].toUpperCase() + name.substring(1)}
        </label>
        <Select 
          value={value}
          name={name}
          isMulti
          options={options}
          onChange={onChange}
        />  
      </>
  )
}

export default SelectFilter