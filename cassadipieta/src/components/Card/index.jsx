"use client";
import Link from "next/link";
import "./card.css";

export default function Card({ id, nome, img, preco }) {
  return (
    <div className="col-12 col-sm-6 col-lg-3 p-3">
      <div className="card-prod">
        <Link href={`/produto/${id}`} className="card-prod-img">
          <img src={img} alt={nome} />
        </Link>

        <div className="card-prod-info">
          <Link href={`/produto/${id}`} className="card-prod-nome">
            {nome}
          </Link>

          <div className="card-prod-preco">R$ {Number(preco).toFixed(2)}</div>

          <Link href={`/produto/${id}`} className="card-prod-btn">
            Ver Produto
          </Link>
        </div>
      </div>
    </div>
  );
}
