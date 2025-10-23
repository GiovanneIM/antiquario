import "./card.css";
import "@/app/globals.css";

export default function Card({ nome, img, preco }) {
  // cria um ID único pro modal (por exemplo, baseado no nome)
  const modalId = `modal-${nome.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <>
      <div className="card">
        <div className="col-12 d-flex justify-content-center p-2">
          <div className="card-img">
            <a href="">
              <img src={img} alt={nome} />
            </a>
          </div>
        </div>

        <div className="p-2">
          <div className="card-nome">
            <a href="">{nome}</a>
          </div>

          <div className="card-preco fs-3">R${preco}</div>

          <div className="card-div_botoes pt-3">
            {/* Botão que abre o modal */}
            <button
              type="button"
              className="btn card-btn"
            >
              Ver Produto
            </button>

            <button
              type="button"
              className="btn card-btn"
              data-bs-toggle="modal"
              data-bs-target={`#${modalId}`}
            >
              Carrinho
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      <div
        className="modal fade"
        id={modalId}
        tabIndex={-1}
        aria-labelledby={`${modalId}-label`}
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id={`${modalId}-label`}>Produto adicionado com sucesso</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>

            <div className="modal-body">
              O produto <h5>{nome}</h5> foi adicionado ao seu carrinho de
              compras
            </div>

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
    </>
  );
}
