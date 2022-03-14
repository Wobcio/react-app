import { useSelector } from "react-redux";
import { getFavCards } from "../../redux/store";
import Card from "../Card/Card";
import Container from "../Container/Container";
import PageTitle from "../PageTitle/PageTitle";

import styles from "./Favorite.module.scss";


const Favorite = () => {

    const cards = useSelector(state => getFavCards(state));

    if(cards.length === 0) return (
        <Container className={styles.container}>
            <PageTitle>Favorite</PageTitle>
            <div className={styles.center}>
                <h2>There is nothing here yet...</h2>
             </div>          
        </Container>
    )

    return(
        <Container className={styles.container}>
            <PageTitle>Favorite</PageTitle>
            <article className={styles.column}>
                <ul className={styles.cards}>
                    {cards.map(card => <Card key={card.id} title={card.title} id={card.id} isFavorite={card.isFavorite} />)}
                </ul>
            </article>
                
        </Container>
    )
};

export default Favorite;