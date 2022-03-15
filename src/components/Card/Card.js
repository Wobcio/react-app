import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { addFav, removeCard } from '../../redux/cardsRedux';
import styles from './Card.module.scss';

const Card = ({title, id, isFavorite}) => {

    const dispatch = useDispatch();

    const handleFav = e => {
        e.preventDefault();
        dispatch(addFav(id));
    };

    const handleRemove = e => {
        e.preventDefault();
        dispatch(removeCard(id));
    }
        return (
        <li className={styles.card}>
            {title}
            <div>
                <button onClick={handleFav}><i className={clsx('fa fa-star', (isFavorite) && styles.favorite)}></i></button>
                <button onClick={handleRemove}><i className='fa fa-trash'></i></button>
            </div>
            
        </li>
        
    );
};

export default Card;