import '../styles/home.css'

const HomePage = (props) => {
    return (
        <main className="holder">
        <div>
            <img className="home-img" src="/img/seleccion-argentina-facundo-campazzo_1gejprgyipv1d1m9uj56jnrcr2.jpg" alt=""/>
        </div>
        <div className="columnas">
        <div className="bienvenidos right">
        <h2>Bienvenidos</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe libero sunt eius excepturi illo laborum
            maiores pariatur! Ducimus eaque, qui sunt omnis iure repellat velit fuga aperiam placeat, tempora alias?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, velit deleniti! Cum nesciunt iusto est
            dignissimos voluptatum voluptate harum voluptates ex at reiciendis quasi natus, iste nisi commodi tempore.
            Vitae?</p></div>
            <div className="transparencia left">
                <h2>Transparencia</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe libero sunt eius excepturi illo laborum
                maiores pariatur! Ducimus eaque, qui sunt omnis iure repellat velit fuga aperiam placeat, tempora alias?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, velit deleniti! Cum nesciunt iusto est
                dignissimos voluptatum voluptate harum voluptates ex at reiciendis quasi natus, iste nisi commodi tempore.
                Vitae?</p></div></div>
    </main>
    );
}
export default HomePage