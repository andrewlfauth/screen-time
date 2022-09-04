import Select from 'react-select'

function SelectFilter({name, options, onChange}) {
  return (
    <>
        <label 
          htmlFor={name}
          className='text-xl font-bold mb-2 block'
        >
          {name[0].toUpperCase() + name.substring(1)}
        </label>
        <Select 
          name={name}
          isMulti
          options={options}
          onChange={onChange}
        />  
      </>
  )
}

export default SelectFilter