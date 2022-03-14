import Column from '../Column/Column';
import ColumnForm from '../ColumnForm/ColumnForm';
import { useSelector } from 'react-redux';
import { getAllColumns,
         getListById,
         getColumnByList } from '../../redux/store';
import { useParams } from 'react-router';
import { Navigate } from 'react-router-dom';



import styles from './List.module.scss';
import SearchForm from '../SearchForm/SearchForm';

const List = () => {

  const { listId } = useParams();

  const columns = useSelector(state => getColumnByList(state, listId));

  const listData = useSelector(state => getListById(state, listId));

  if(!listData) return <Navigate to="/" />

  return (
    <div className={styles.list}>

      <header className={styles.header}>
        <h1 className={styles.title}>{listData.title}</h1>
      </header>

      <p className={styles.description}>{listData.description}</p>

      <SearchForm />

      <section className={styles.columns}>
        {columns.map(column => <Column key={column.id} {...column} />)}
      </section>

      <ColumnForm listId={listData.id}/>

    </div>
  );
};

export default List;