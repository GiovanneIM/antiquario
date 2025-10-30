export default function Home() {
    return (
        <>
            {/* carrossel */}
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
                            <img src="/img/banner/banner-1.svg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="/img/banner/banner-2.svg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="/img/banner/banner.svg" className="d-block w-100" alt="..." />
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

            <div className="container px-4 py-5" id="custom-cards">
                <h2 className="pb-2 border-bottom">Custom cards</h2>

                <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
                    <div className="col">
                        <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundImage: 'url("/img/taca.jpg")' }}>
                            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Elegância cristalina para ocasiões especiais</h3>
                                <ul className="d-flex list-unstyled mt-auto">
                                    <li className="me-auto">
                                        <img src="/img/taca.jpg" alt="Bootstrap" width={32} height={32} className="rounded-circle border border-white" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundImage: 'url("/img/vasogrego.jpg")' }}>
                            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Beleza e história em cada detalhe</h3>
                                <ul className="d-flex list-unstyled mt-auto">
                                    <li className="me-auto">
                                        <img src="/img/vasogrego.jpg" alt="Bootstrap" width={32} height={32} className="rounded-circle border border-white" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundImage: 'url("/img/vitrola.jpg")' }}>
                            <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">O charme do passado em música e estilo</h3>
                                <ul className="d-flex list-unstyled mt-auto">
                                    <li className="me-auto">
                                        <img src="/img/vitrola.jpg" alt="Bootstrap" width={32} height={32} className="rounded-circle border border-white" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
