import UserCard from '@/components/UserCard'
// import produtos from '../produtos.js'

import fs from 'fs';
import path from 'path';

export default function prod() {
    const filePath = path.join(process.cwd(), 'src/data/produtos.json');
    const data = fs.readFileSync(filePath, 'utf-8');
    const produtos = JSON.parse(data);
    

    return (
        <>
           
                {
                    produtos.map((produto, index) => {
                        return <UserCard
                            key={index}
                            nome={produto.nome}
                            categoria={produto.categoria}
                            img={produto.img}
                            preco={produto.preco}
                            estado={produto.estado}
                            descricao={produto.descricao}

                        ></UserCard>
                    })
                }
        </>
    )
}