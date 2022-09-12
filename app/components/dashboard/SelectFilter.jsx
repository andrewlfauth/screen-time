import Select from 'react-select'
import {forwardRef} from 'react'

const SelectFilter = forwardRef(function SelectFilter({name, options, onChange, className}, ref) {
  return (
    <div>
      <label 
        htmlFor={name}
        className='block mb-2 text-g font-medium text-neutral-700'
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
        className={className}
      />  
    </div>
  )
})

export default SelectFilter