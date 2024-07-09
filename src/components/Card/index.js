import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import iconFavorite from "./favorite.png";
import iconUnFavorite from "./unfavorite.png"; 
import { useFavoriteContent } from "../../contexts/Favorites";

function Card({ id }) {

    const { favorite, addFavorite } = useFavoriteContent()
    const isFavorite = favorite.some((fav) => fav.id === id)
    const icone = isFavorite ? iconUnFavorite : iconFavorite

    return (
        <section className={styles.card}>
            <Link to={`/watch/${id}`}>
                <img 
                    src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`} 
                    alt="Capa" 
                    class={styles.cover} 
                />
            </Link>
            <figure className={styles.icon}>
                <img 
                    src={icone} 
                    alt="Ícone" 
                    onClick={() => addFavorite({id})}
                />
            </figure>
        </section>
    );
}

export default Card;