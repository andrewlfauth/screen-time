import Select from 'react-select'
import {forwardRef} from 'react'

const SelectFilter = forwardRef(function SelectFilter({name, options, onChange}, ref) {
  return (
    <>
      <label 
        htmlFor={name}
        className='block mb-2 text-xl font-bold'
      >
        {name[0].toUpperCase() + name.substring(1)}
      </label>
      <Select 
        ref={ref}
        name={name}
        isMulti
        isSearchable={false}
        options={options}
        onChange={onChange}
      />  
    </>
  )
})

export default SelectFilter