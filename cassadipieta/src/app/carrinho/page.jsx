"use client";

import { useState, useEffect } from "react";
import "./carrinho.css";

export default function Carrinho() {
    const [produtos, setProdutos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const carrinhoLocal = JSON.parse(localStorage.getItem("carrinho")) || [];
        // Inicializa a quantidade se não existir
        const produtosComQuantidade = carrinhoLocal.map(p => ({ ...p, quantidade: p.quantidade || 1 }));
        setProdutos(produtosComQuantidade);
        setLoading(false);
    }, []);

    const removerProduto = (id) => {
        const novosProdutos = produtos.filter((p) => p.id !== id);
        setProdutos(novosProdutos);
        localStorage.setItem("carrinho", JSON.stringify(novosProdutos));
    };

    const alterarQuantidade = (id, delta) => {
        const novosProdutos = produtos.map((p) => {
            if (p.id === id) {
                const novaQuantidade = Math.max(1, p.quantidade + delta); // mínimo 1
                return { ...p, quantidade: novaQuantidade };
            }
            return p;
        });
        setProdutos(novosProdutos);
        localStorage.setItem("carrinho", JSON.stringify(novosProdutos));
    };

    const handleInputChange = (id, value) => {
        const novosProdutos = produtos.map((p) => {
            if (p.id === id) {
                const novaQuantidade = Math.max(1, Number(value) || 1);
                return { ...p, quantidade: novaQuantidade };
            }
            return p;
        });
        setProdutos(novosProdutos);
        localStorage.setItem("carrinho", JSON.stringify(novosProdutos));
    };

    const calcularSubtotal = () => {
        return produtos.reduce((acc, p) => {
            const preco = parseFloat(p.preco.replace("R$", "").replace(".", "").replace(",", "."));
            return acc + preco * p.quantidade;
        }, 0);
    };

    const subtotal = calcularSubtotal();
    const frete =  6.97;
    const desconto = 351.94;
    const total = subtotal - desconto + frete;

    if (loading) return <p>Carregando produtos...</p>;

    return (
        <div className="carrinho container py-5 flex-grow-1">
            <h4 className="mb-4">Carrinho ({produtos.length} itens)</h4>

            {produtos.length === 0 ? (
                <p>Nenhum produto no carrinho.</p>
            ) : (
                <div className="row g-4">
                    {/* Itens do carrinho */}
                    <div className="col-lg-8">
                        <div className="d-flex flex-column gap-3">
                            {produtos.map((p) => (
                                <div key={p.id} className="product-card p-3 shadow-sm">
                                    <div className="row align-items-center">
                                        <div className="col-md-2">
                                            <img src={p.img} alt={p.nome} className="img-fluid rounded" />
                                        </div>
                                        <div className="col-md-4">
                                            <h6 className="mb-1">{p.nome}</h6>
                                            <p className="text-muted mb-1">{p.descricao}</p>
                                        </div>
                                        <div className="d-flex align-items-center gap-2 col-md-3">
                                            <button
                                                className="quantity-btn"
                                                onClick={() => alterarQuantidade(p.id, -1)}
                                            >
                                                -
                                            </button>
                                            <input
                                                type="number"
                                                className="quantity-input"
                                                value={p.quantidade}
                                                min={1}
                                                onChange={(e) => handleInputChange(p.id, e.target.value)}
                                            />
                                            <button
                                                className="quantity-btn"
                                                onClick={() => alterarQuantidade(p.id, 1)}
                                            >
                                                +
                                            </button>
                                        </div>
                                        <div className="col-md-1 text-end">
                                            <span className="fw-bold text-primary">{p.preco}</span>
                                        </div>
                                        <div className="col-md-2 text-end">
                                            <svg onClick={() => removerProduto(p.id)} cursor="pointer" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><g fill="none" stroke="#fd0000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}><path strokeDasharray={24} strokeDashoffset={24} d="M12 20h5c0.5 0 1 -0.5 1 -1v-14M12 20h-5c-0.5 0 -1 -0.5 -1 -1v-14"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="24;0"></animate></path><path strokeDasharray={20} strokeDashoffset={20} d="M4 5h16"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.2s" values="20;0"></animate></path><path strokeDasharray={8} strokeDashoffset={8} d="M10 4h4M10 9v7M14 9v7"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="8;0"></animate></path></g></svg>
                                        </div>
                                    </div>
                                </div>
                            ))}
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
            )}
        </div>
    );
}
