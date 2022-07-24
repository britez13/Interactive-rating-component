import React, { useState } from 'react'
import IconStar from './IconStar'
import './SelectRating.scss'

const SelectRating = ({setRating, setIsShowResult}) => {
  const [numberList, setNumberList] = useState([{number: 1, selected: false},{number: 2, selected: false}, {number: 3, selected: false}, {number: 4, selected: false}, 
    {number: 5, selected: false}])

  const handleSelect = (e, number) => {
    e.preventDefault();
    setNumberList(prev => {
      const newList = numberList.map(item => {
        if(item.number === parseInt(e.target.dataset.number)){
          return {...item, selected: true}
        }
        return {...item, selected: false};
      })
      return newList; 
    })
    
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const [rating] = numberList.filter(item => {
      if(item.selected) return item
    })
    setRating(rating.number)
    setIsShowResult(true)
  }

  return (
    <section className='select-container'>
      <div className='star-wrapper'>
        <IconStar />
      </div>
      <h1 className='select-title'>How did we do?</h1>
      <p className='description'>Please let us know how we did with your support request. All feedback is appreciated to help us to 
        improve our offerning!
      </p>
      <form className='form-container'>
      <div className='number-container'>
      {numberList.map( (item) => {
        const {number} = item;
        return <button className={`number ${item.selected && 'selected'}`} key={number} data-number={`${number}`} onClick={(e) => handleSelect(e, number)}>{number}</button>
      })}
      </div>
      <button className='submit-btn' type='submit' onClick={handleSubmit}>Submit</button>
      </form>
    </section>
  )
}

export default SelectRating