import Card from '@/components/Card'
// import produtos from '../produtos.js'

import fs from 'fs';
import path from 'path';

export default function prod() {
    const filePath = path.join(process.cwd(), 'src/data/produtos.json');
    const data = fs.readFileSync(filePath, 'utf-8');
    const produtos = JSON.parse(data);


    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-12 d-flex flex-wrap justify-content-center gap-3">
                    {produtos.map((produto) => (
                        <Card
                            key={produto.id}
                            id={produto.id}
                            nome={produto.nome}
                            img={produto.img}
                            preco={produto.preco}
                        />
                    ))}
                </div>
            </div>
        </div>
    )

}