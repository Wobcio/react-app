import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateSearching } from '../../redux/store.js';
import Button from '../Button/Button.js';
import TextInput from '../TextInput/TextInput';

import styles from './SearchForm.module.scss';

const SearchForm = () => {

    const dispatch = useDispatch();

    const [phrase, setPhrase] = useState('')

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(updateSearching(`${phrase}`))
    }

    return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
            <TextInput placeholder="Search..." value={phrase} onChange={e => setPhrase(e.target.value)} />
            <Button>
                <span className={"fa fa-search"} />
            </Button>
        </form>
    );
  };

  export default SearchForm;