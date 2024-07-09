import styles from "./Favorites.module.css";
import Header from "../../components/Header";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import VideoList from "../../components/VideoList";
import { useFavoriteContent } from "../../contexts/Favorites";

function Favorites() {

    const { favorite } = useFavoriteContent()

    return (
        <>
            <Header />
            <Container>
                <section className={styles.favorites}>
                <h2>Meus favoritos</h2>
                { <VideoList videos={favorite} />}
                </section>
            </Container>
            <Footer />
        </>
    );
}

export default Favorites;