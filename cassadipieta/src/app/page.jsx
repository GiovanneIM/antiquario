import Image from "next/image";
import styles from "./page.module.css";
import UserCard from "@/components/Card";


export default function Home() {
    return (
        <>
            <div className="container-carrossel col-0 col-sm-12">
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

            <div className="divisoria"></div>

            <div style={{ height: 300 }}></div>
            <div className="container px-4 py-5" id="custom-cards">
                <h2 className="pb-2 border-bottom">Custom cards</h2>
                <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
                    <div className="col">
                        <Image src="/img/taca.jpg"
                        alt="taca"
                        width={200}
                        height={200}/>
                    </div>
                    <div className="col">
                        <Image src="/img/vasogrego.jpg"
                        alt="taca"
                        width={200}
                        height={200}/>
                    </div>
                    <div className="col">
                        <Image src="/img/vitrola.jpg"
                        alt="taca"
                        width={200}
                        height={200}/>
                    </div>
                </div>
            </div>

        </>
    );
}
