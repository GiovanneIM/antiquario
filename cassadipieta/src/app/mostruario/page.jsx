import UserCard from '@/components/UserCard'
// import produtos from '../produtos.js'

import fs from 'fs';
import path from 'path';

export default function prod() {
    const filePath = path.join(process.cwd(), 'src/data/produtos.json');
    const data = fs.readFileSync(filePath, 'utf-8');
    const produtos = JSON.parse(data);


    return (
        <div className="container my-5">
            <div className="row g-4">
                {produtos.map((produto, index) => (
                    <div key={index} className="col-12 col-sm-6 col-lg-3 animate">
                        <UserCard
                            nome={produto.nome}
                            categoria={produto.categoria}
                            img={produto.img}
                            preco={produto.preco}
                            estado={produto.estado}
                            descricao={produto.descricao}
                        />
                    </div>
                ))}
            </div>
        </div>
    )

}