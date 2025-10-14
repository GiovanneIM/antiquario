import "./card.css"
import "@/app/globals.css"
export default function Card({
    nome,
    img,
    preco
}) {
    return (<>
        <div className="card">
            <div className="col-12 d-flex justify-content-center p-2">
                <div className="card-img">
                    <a href={''}>
                        <img
                            src={img}
                            alt={nome}
                        />
                    </a>
                </div>
            </div>

            <div className="p-2">
                <div className="card-nome">
                    <a href=''>{nome}</a>
                </div>

                <div className="card-preco fs-3">
                    R${preco}
                </div>

                <div className="card-div_botoes pt-3">
                    {/* Button trigger modal */}
                    <button
                        type="button"
                        className="btn card-btn"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                    >
                        Ver Produto
                    </button>

                    <button
                        type="button"
                        className="btn card-btn "
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                    >
                        Carrinho
                    </button>

                    {/* Modal */}
                    <div
                        className="modal fade"
                        id="exampleModal"
                        tabIndex={-1}
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                    >
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                                        Produto adicionado com sucesso
                                    </h1>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                    />
                                </div>
                                <div className="modal-body">O produto <h5>{nome}</h5> foi adicionado ao seu carrinho de compras</div>
                                <div className="modal-footer">
                                    <button
                                        type="button"
                                        className="btn bg-fundo-amarelo text-chocolate border-danger"
                                        data-bs-dismiss="modal"
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    </>)
}