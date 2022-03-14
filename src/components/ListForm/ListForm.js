import { useState } from "react";
import { useDispatch } from "react-redux";
import { addList } from "../../redux/store";
import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";

import styles from './ListForm.module.scss';


const ListForm = props => {

    const dispatch = useDispatch();

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addList({ title, description, }));
        setTitle('');
        setDescription('');
    };

    return (
        <form className={styles.listForm} onSubmit={handleSubmit}>
            <div className={styles.inputWrapper}>
                <span className={styles.title}>Title:</span>
                <TextInput value={title} onChange={e => setTitle(e.target.value)} />
            </div>
            <div className={styles.inputWrapper}>
                <span className={styles.title}>Description:</span>
                <TextInput value={description} onChange={e => setDescription(e.target.value)} />
            </div>
            <Button>Add list</Button>
        </form>
    )
};

export default ListForm;