import React, { useEffect } from 'react';
import './star-rating.styles.scss';



const Star = ({ marked, starId }) => {
    return (
      <span className="star" star-id={starId} role="button" >
        {marked ? '\u2605' : '\u2606'}
      </span>
    );
  }
  
  const  StarRating = (props) => {
    const { handleRatingChange } = props;
    const [rating, setRating] = React.useState(typeof props.rating == 'number' ? props.rating : 0);
    const [selection, setSelection] = React.useState(0);
    const hoverOver = event => {
      let val = 0;
      if (event && event.target && event.target.getAttribute('star-id'))
        val = event.target.getAttribute('star-id');
      setSelection(val);
    };
    React.setState = {rating: rating }
    useEffect (()=> {
       handleRatingChange(rating)
       // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [rating])
    return (
      <div
        onMouseOut={() => hoverOver(null)}
        onClick={ (event) => {setRating(event.target.getAttribute('star-id') || rating); }} 
        onMouseOver={hoverOver}  
      >
        
        {Array.from({ length: 5 }, (v, i) => (
          <Star
            starId={i + 1}
            key={`star_${i + 1} `}
            marked={selection ? selection >= i + 1 : rating >= i + 1}
          />
        ))}
      </div>
    );
  }

  export default StarRating;