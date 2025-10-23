import "./produto.css"


export default async function Produto({ params }) {

    const { id } = params;

    const res = await fetch(`http://localhost:4000/${id}`);
    const produto = await res.json();

    return (<>
        <div className="conteiner">
            <div className="produto row py-5 col-10 my-5 shadow-sm">
                {/* Product Images */}
                <div className="col-md-4 mb-4">
                    <div className="imgPrincipal col-12 ratio ratio-1x1 border rounded shadow-sm">
                        <img
                            src={produto.img}
                            alt="Product"
                            id="mainImage"
                        />
                    </div>
                    <div className="d-flex justify-content-between flex-wrap gap-3 col-12">
                        <div className="thumbnail border shadow-sm">
                            <img
                                src={produto.img}
                                alt="Thumbnail 1"
                                className="rounded active"
                            />
                        </div>
                        <div className="thumbnail border shadow-sm">
                            <img
                                src={produto.img}
                                alt="Thumbnail 1"
                                className="rounded active"
                            />
                        </div>
                        <div className="thumbnail border shadow-sm">
                            <img
                                src={produto.img}
                                alt="Thumbnail 1"
                                className="rounded active"
                            />
                        </div>
                        <div className="thumbnail border shadow-sm">
                            <img
                                src={produto.img}
                                alt="Thumbnail 1"
                                className="rounded active"
                            />
                        </div>
                    </div>
                </div>
                {/* Product Details */}
                <div className="col-md-6">
                    <h2 className="mb-3">{produto.nome}</h2>
                    <p className="text-muted mb-4">{produto.categoria}</p>
                    <div className="mb-3">
                        <span className="h4 me-2">R${produto.preco.toFixed(2).replace('.', ',')}</span>
                        <span className="text-muted">
                            <s>{produto.preco}</s>
                        </span>
                    </div>
                    <div className="mb-4">
                        <strong>Condição:</strong>
                        <br />
                        <ul>
                            {produto.estado.map((est, index) => { return <li key={index}>{est}</li> })}
                        </ul>
                    </div>
                    <div className="mb-4">
                        <div className="form-label">
                            <strong>Descrição:</strong>
                            <br />
                            {produto.descricao}
                        </div>
                    </div>
                    <button className="btn btn-vermelho btn-lg mb-3 me-2 d-flex justify-content-center align-items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-bag" viewBox="0 0 16 16">
                            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                        </svg>
                        Comprar
                    </button>
                    
                    <div className="mt-4">
                        <h5>Key Features:</h5>
                        <ul>
                            <li>Industry-leading noise cancellation</li>
                            <li>30-hour battery life</li>
                            <li>Touch sensor controls</li>
                            <li>Speak-to-chat technology</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>)
}