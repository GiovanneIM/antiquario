"use client";

import { useState, useEffect } from "react";
import "./carrinho.css";
import { useParams } from "next/navigation";

export default function Carrinho() {
    const { id } = useParams();
    const [produto, setProduto] = useState([]);

    useEffect(() => {
        async function carregarProduto() {
            const res = await fetch(`http://localhost:4000/produtos/${id}`);
            const data = await res.json();

            setProduto(data.produto)
        }

        if (!isNaN(id)) { carregarProduto() }
    }, [id]);


    const calcularSubtotal = () => {
        const preco = parseFloat(produto.preco);
        return preco
    };

    const subtotal = calcularSubtotal();
    const frete = 6.97;
    const desconto = 351.94;
    const total = subtotal - desconto + frete;

    return (
        <div className="carrinho container py-5 flex-grow-1">
            <h4 className="mb-4">Carrinho itens)</h4>

            {
                produto && <>
                    <div className="row g-4">
                        {/* Itens do carrinho */}
                        <div className="col-lg-8">
                            <div className="d-flex flex-column gap-3">
                                <div className="d-flex product-card p-3 shadow-sm">
                                    <div className="col-md-6 p-4 d-flex flex-column row-gap-4">
                                        <div>
                                            <div><strong>Condição:</strong></div>
                                            <ul>
                                                {produto?.estado?.map((est, index) => (
                                                    <li key={index}>{est}</li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div>
                                            <div><strong>Descrição:</strong></div>
                                            <div style={{ textIndent: "2rem" }}>{produto.descricao}</div>
                                        </div>

                                        <div>
                                            <h5>Utilidades:</h5>
                                            <ul>
                                                {produto?.funcionalidades?.map((func, index) => (
                                                    <li key={index}>{func}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-md-6 align-items-center">
                                        <div className="col-md-12 " style={{aspectRatio:'1'}}>
                                            <img src={produto.img} alt={produto.nome} className="img-completa" />
                                        </div>
                                        <div className="d-flex flex-wrap" >
                                            <div className="">
                                                <h6 className="mb-1 fs-2">{produto.nome}</h6>
                                            </div>
                                            <div className="ms-auto">
                                                <span className="fw-bold text-primary fs-2">R${produto?.preco?.toFixed(2).replace('.', ',')}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Resumo do pedido */}
                        <div className="col-lg-4">
                            <div className="summary-card p-4 shadow-sm">
                                <h5 className="mb-4">Resumo do Pedido</h5>
                                <div className="d-flex justify-content-between mb-2">
                                    <span>Subtotal</span>
                                    <span>R$ {subtotal.toFixed(2)}</span>
                                </div>
                                <div className="d-flex justify-content-between mb-2">
                                    <span>Desconto</span>
                                    <span className="text-success">- R$ {desconto.toFixed(2)}</span>
                                </div>
                                <div className="d-flex justify-content-between mb-2">
                                    <span>Frete</span>
                                    <span>R$ {frete.toFixed(2)}</span>
                                </div>
                                <hr />
                                <div className="d-flex justify-content-between mb-4 fw-bold">
                                    <span>Total</span>
                                    <span>R$ {total.toFixed(2)}</span>
                                </div>
                                <button className="btn btn-primary w-100 mb-3">
                                    Finalizar compra
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            }
        </div>
    );
}
