
import IllustrationThankYou from './IllustrationThankYou';
import './ResultRating.scss';

const ResultRating = ({rating}) => {
  return (
    <section className='result-container'>
        <IllustrationThankYou />
        <p className='result-rating'>You selected {rating} out of 5</p>
        <h2 className='result-title'>Thank you!</h2>
        <p className='result-description'>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate 
            to get in touch!
        </p>
    </section>
  )
}

export default ResultRating