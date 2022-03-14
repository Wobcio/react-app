import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { addFav } from '../../redux/store';
import styles from './Card.module.scss';

const Card = ({title, id, isFavorite}) => {

    const dispatch = useDispatch();

    const handleClick = e => {
        e.preventDefault();
        dispatch(addFav(id));
    }
        return (
        <li className={styles.card}>
            {title} 
            <button onClick={handleClick}><i className={clsx('fa fa-star', (isFavorite) && styles.favorite)}></i></button> 
        </li>
        
    );
};

export default Card;