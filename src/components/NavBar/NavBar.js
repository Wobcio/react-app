import Container from "../Container/Container";

import styles from "./NavBar.module.scss";


const NavBar = () => {
    return(
        <div className={styles.navbar}>
            <Container className={styles.container}>
                <div className={styles.flex}>
                    <a href="/"><i class="fa fa-tasks"></i></a>
                    <div className={styles.links}>
                        <a href="/">Home</a>
                        <a href="/favorite">Favorite</a>
                        <a href="/about">About</a>
                    </div>
                </div>
                
            </Container>
        </div>
    )
};

export default NavBar;