import "./Home.css";

export default function Home() {
  return (
    <>
      {/* Carrossel */}
      <div className="container-carrossel col-0 col-sm-12">
        <div id="carouselExampleIndicators" className="carousel slide carrossel" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
            {/* <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" /> */}
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="/img/banner/banner-1.svg" className="d-block w-100" alt="Peças antigas em exposição" />
            </div>
            <div className="carousel-item">
              <img src="/img/banner/banner-2.svg" className="d-block w-100" alt="Detalhes artísticos de peças raras" />
            </div>
            {/* <div className="carousel-item">
              <img src="/img/banner/banner.svg" className="d-block w-100" alt="Antiguidades clássicas" />
            </div> */}
          </div>
          <button type="button" className="carousel-control-prev" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button type="button" className="carousel-control-next" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* Sessão de cards */}
      <div className="container px-4 py-5" id="custom-cards">
        <h2 className="pb-2 text-center display-5 title-classic">Cassa di Pietá</h2>
        <p className="text-center text-muted mb-5 subtitle-classic">Peças exclusivas com história e elegância atemporal.</p>

        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4">
          {[
            { img: "/img/taca.jpg", text: "Elegância e beleza" },
            { img: "/img/vasogrego.jpg", text: "história" },
            { img: "/img/vitrola.jpg", text: "charme e estilo" }
          ].map((item, i) => (
            <div className="col" key={i}>
              <div className="card card-cover overlay-card text-white rounded-4 shadow-lg" style={{ backgroundImage: `url(${item.img})` }}>
                <div className="d-flex flex-column h-100 p-5 pb-3">
                  <h3 className="mt-auto display-6 fw-bold lh-1 text-shadow-classic">{item.text}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Botão direcionamento */}
      <div className="col-12 d-flex justify-content-center mb-4"><a className="btn btn-vermelho col-10 col-md-8 col-lg-4" href="/mostruario">Ver artigos</a></div>
    </>
  );
}
