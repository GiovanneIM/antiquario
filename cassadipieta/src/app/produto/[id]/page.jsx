'use client'

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import "./produto.css"

export default function Produto() {
    const { id } = useParams();
    const router = useRouter();
    const [produto, setProduto] = useState(null);
    const [imgPrincipal, setImgPrincipal] = useState('https://placehold.co/400');

    // Consultando a API para obter o produto
    useEffect(() => {
        async function carregarProduto() {
            try {
                const res = await fetch(`http://localhost:4000/produtos/${Number(id)}`);
                const data = await res.json();

                setProduto(data.produto);
                setImgPrincipal(data.produto.img[0]);
            } catch (error) {
                console.error("Erro ao buscar produto:", error);
            }
        }

        if (!isNaN(Number(id))) carregarProduto();
    }, [id]);

    return (
        <>
            {produto &&
                <div className="container py-4">
                    <div className="d-md-flex col-12 bg-white rounded bordern shadow-sm">
                        {/* Imagens do produto */}
                        <div className="col-md-5 p-4 d-flex flex-column gap-3">
                            {/* Imagem principal */}
                            <div className="col-12 ratio ratio-1x1 border rounded shadow-sm">
                                <img
                                    src={imgPrincipal}
                                    alt={produto.nome}
                                    className="img-completa"
                                />
                            </div>

                            {/* Miniaturas */}
                            <div className="d-flex justify-content-center flex-wrap gap-3 col-12">
                                {produto.img.map((img, index) => (
                                    <div
                                        className="bg-white border shadow-sm rounded overflow-hidden"
                                        style={{ width: "5rem", height: "5rem", cursor: "pointer" }}
                                        key={index}
                                        onClick={() => setImgPrincipal(img)}
                                    >
                                        <img src={img} className="img-completa" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Detalhes do produto */}
                        <div className="col-md-7 p-4">
                            <h2 className="mb-3">{produto.nome}</h2>
                            <p className="text-muted mb-4">{produto.categoria}</p>

                            <div className="mb-3">
                                <span className="h4 me-2">
                                    R${produto.preco.toFixed(2).replace('.', ',')}
                                </span>
                                <span className="text-muted">
                                    {produto.preco_wdisc && <s>{produto.preco_wdisc.toFixed(2).replace('.', ',')}</s>}
                                </span>
                            </div>

                            <div className="mb-4">
                                <div><strong>Condição:</strong></div>
                                <ul>
                                    {produto.estado.map((est, index) => (
                                        <li key={index}>{est}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mb-4">
                                <div><strong>Descrição:</strong></div>
                                <div style={{ textIndent: "2rem" }}>{produto.descricao}</div>
                            </div>

                            {/* Botão de adicionar ao carrinho */}
                            <button
                                className="btn btn-vermelho btn-lg mb-3 me-2 d-flex justify-content-center align-items-center gap-2"
                                onClick={(e) => { window.location.href = `/comprar/${id}` }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-bag" viewBox="0 0 16 16">
                                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                                </svg>
                                Comprar
                            </button>

                            <div className="mt-4">
                                <h5>Utilidades:</h5>
                                <ul>
                                    {produto.funcionalidades.map((func, index) => (
                                        <li key={index}>{func}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
}
