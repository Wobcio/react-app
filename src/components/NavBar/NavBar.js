import Container from "../Container/Container";
import { Link, NavLink } from 'react-router-dom';

import styles from "./NavBar.module.scss";


const NavBar = () => {
    return(
        <div className={styles.navbar}>
            <Container className={styles.container}>
                <div className={styles.flex}>
                    <Link to="/"><i className="fa fa-tasks"></i></Link>
                    <div className={styles.links}>
                        <NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}to="/">Home</NavLink>
                        <NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}to="/favorite">Favorite</NavLink>
                        <NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}to="/about">About</NavLink>
                    </div>
                </div>   
            </Container>
        </div>
    )
};

export default NavBar;