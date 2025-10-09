import "./card.css"
import "@/app/globals.css"

export default function UserCard() {

    nome,
    img,
    categoria,
    descricao,
    preco,
    estado



    return (<>


        <div className="card border border-danger bg-fundo-amarelo m-3" style={{ width: "18rem" }}>
            <div className="m-3">
                <img src={img} className="card-img-top border border-bottom-0 border-end-0 border-opacity-25 border-danger rounded" alt="..." />
            </div>
            <div className="card-body ">
                <h5 className="card-title text-chocolate">{nome}</h5>
                <p className="card-text text-chocolate fs-3">
                    R${preco}.00
                </p>
                <div className="d-flex justify-content-center align-items-center border-top border-danger">

                    {/* Button trigger modal */}
                    <button
                        type="button"
                        className="btn btn-danger m-3 "
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                    >
                        🛒 Carrinho
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