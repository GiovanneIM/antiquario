import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
    return (
        <>
            <div className="divisoria"></div>
            
            <div className="container-carrossel">
                <div id="carouselExampleIndicators" className="carousel slide carrossel" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to={0}
                            className="active"
                            aria-current="true"
                            aria-label="Slide 1"
                        />
                        <button type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to={1}
                            aria-label="Slide 2"
                        />
                        <button type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to={2}
                            aria-label="Slide 3"
                        />
                    </div>

                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="/img/banner.svg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="/img/banner.svg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="/img/banner.svg" className="d-block w-100" alt="..." />
                        </div>
                    </div>

                    <button type="button"
                        className="carousel-control-prev"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                    </button>

                    <button type="button"
                        className="carousel-control-next"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
<<<<<<< HEAD
=======

            <div className="divisoria"></div>
>>>>>>> e4023bd2e63cf331279c3c153dbeac7153532fef
        </>
    );
}
