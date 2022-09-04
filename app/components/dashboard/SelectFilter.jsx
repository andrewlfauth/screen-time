import Select from 'react-select'
import {forwardRef} from 'react'

const SelectFilter = forwardRef(function SelectFilter({name, options, onChange}, ref) {
  return (
    <>
      <label 
        htmlFor={name}
        className='text-xl font-bold mb-2 block'
      >
        {name[0].toUpperCase() + name.substring(1)}
      </label>
      <Select 
        ref={ref}
        name={name}
        isMulti
        options={options}
        onChange={onChange}
      />  
    </>
  )
})

export default SelectFilter