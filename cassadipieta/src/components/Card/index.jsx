'use client'

import "./card.css";
import "@/app/globals.css";

export default function Card({ id, nome, img, preco }) {
  // cria um ID único pro modal (por exemplo, baseado no nome)
  const modalId = `modal-${nome.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <>
      <div className="col-12 col-sm-6 col-lg-3 p-2">
        <div className="card-prod">
          <div className="col-12 d-flex justify-content-center p-2">
            <div className="col-12 card-prod-img">
              <a href="">
                <img src={img} alt={nome} />
              </a>
            </div>
          </div>

          <div className="p-2">
            {/* Nome */}
            <div className="card-prod-nome text-center">
              <a href="">{nome}</a>
            </div>

            {/* Preço */}
            <div className="card-prod-preco fs-3">R${preco}</div>

            {/* Botões */}
            <div className="card-prod-div_botoes pt-3">
              {/* Botão para a página do produto */}
              <button
                type="button"
                className="btn card-prod-btn"
                onClick={() => { window.location.href = `/produto/${id}` }}
              >
                Ver Produto
              </button>
            </div>
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
