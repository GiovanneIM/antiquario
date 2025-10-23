import "./produto.css"


export default async function Produto({ params }) {

    const { id } = params;

    const res = await fetch(`http://localhost:4000/${id}`);
    const produto = await res.json();

    return (<>
        <div className="conteiner">
            <div className="row py-5 col-12">
                {/* Product Images */}
                <div className="col-md-4 mb-4">
                    <div className="imgPrincipal col-12 ratio ratio-1x1">
                        <img
                            src={produto.img}
                            alt="Product"
                            id="mainImage"
                        />
                    </div>
                    <div className="d-flex justify-content-between flex-wrap gap-3 col-12">
                        <div className="thumbnail">
                            <img
                                src={produto.img}
                                alt="Thumbnail 1"
                                className="rounded active"
                            />
                        </div>
                        <div className="thumbnail">
                            <img
                                src={produto.img}
                                alt="Thumbnail 1"
                                className="rounded active"
                            />
                        </div>
                        <div className="thumbnail">
                            <img
                                src={produto.img}
                                alt="Thumbnail 1"
                                className="rounded active"
                            />
                        </div>
                        <div className="thumbnail">
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
                        <span className="h4 me-2">{produto.preco}</span>
                        <span className="text-muted">
                            <s>{produto.preco}</s>
                        </span>
                    </div>
                    <div className="mb-3">
                        <i className="bi bi-star-fill text-warning" />
                        <i className="bi bi-star-fill text-warning" />
                        <i className="bi bi-star-fill text-warning" />
                        <i className="bi bi-star-fill text-warning" />
                        <i className="bi bi-star-half text-warning" />
                        <span className="ms-2">4.5 (120 reviews)</span>
                    </div>
                    <p className="mb-4">
                        {produto.estado}
                    </p>
                    <div className="mb-4">
                        <h5>Color:</h5>
                        <div className="btn-group" role="group" aria-label="Color selection">
                            <input
                                type="radio"
                                className="btn-check"
                                name="color"
                                id="black"
                                autoComplete="off"
                                defaultChecked=""
                            />
                            <label className="btn btn-outline-dark" htmlFor="black">
                                Black
                            </label>
                            <input
                                type="radio"
                                className="btn-check"
                                name="color"
                                id="silver"
                                autoComplete="off"
                            />
                            <label className="btn btn-outline-secondary" htmlFor="silver">
                                Silver
                            </label>
                            <input
                                type="radio"
                                className="btn-check"
                                name="color"
                                id="blue"
                                autoComplete="off"
                            />
                            <label className="btn btn-outline-primary" htmlFor="blue">
                                Blue
                            </label>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="quantity" className="form-label">
                            Quantity:
                        </label>
                        <input
                            type="number"
                            className="form-control"
                            id="quantity"
                            defaultValue={1}
                            min={1}
                            style={{ width: 80 }}
                        />
                    </div>
                    <button className="btn btn-primary btn-lg mb-3 me-2">
                        <i className="bi bi-cart-plus" /> Add to Cart
                    </button>
                    <button className="btn btn-outline-secondary btn-lg mb-3">
                        <i className="bi bi-heart" /> Add to Wishlist
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