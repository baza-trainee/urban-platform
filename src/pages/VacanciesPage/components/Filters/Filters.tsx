import React from 'react'
import FilterAccordion from '../../../../components/FilterAccordion/FilterAccordion'
// import { useGetOptionsQuery } from '../../../../app/api/apiSlice'
// import { useDispatch, useSelector } from 'react-redux'
// import { useDispatch } from 'react-redux'
// import { setFilter, selectFilters, FiltersState } from '../slices/filtersSlice'

const Filters: React.FC = () => {
  //   const dispatch = useDispatch()
  //   const filters = useSelector(selectFilters)
  //   const { data: options } = useGetOptionsQuery(filters.searchInput)

  //   const handleTextInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     dispatch(setFilter({ type: 'searchInput', value: e.target.value }))
  //   }

  //   const handleCheckboxChange = (
  //     e: React.ChangeEvent<HTMLInputElement>,
  //     filterType: keyof FiltersState
  //   ) => {
  //     dispatch(setFilter({ type: filterType, value: e.target.checked }))
  //   }

  return (
    <div className="filters">
      {/* <FilterAccordion title="Поиск">
        <input type="text" value={filters.searchInput} onChange={handleTextInputChange} />
        <div className="options">
          {options && options.map((option) => <div key={option.id}>{option.name}</div>)}
        </div>
      </FilterAccordion> */}
      <FilterAccordion title="Фильтр 2">
        <form>
          {[1, 2, 3, 4].map((i) => (
            <label key={i}>
              <input
                type="checkbox"
                // checked={filters[`filter2_${i}` as keyof FiltersState]}
                // onChange={(e) => handleCheckboxChange(e, `filter2_${i}` as keyof FiltersState)}
              />
              Option {i}
            </label>
          ))}
        </form>
      </FilterAccordion>
      {/* Остальные фильтры по аналогии */}
    </div>
  )
}

export default Filters
