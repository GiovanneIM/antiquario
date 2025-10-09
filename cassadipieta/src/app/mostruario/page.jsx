"use client"
import UserCard from '@/components/UserCard'
const fs = require('fs');



export default function prod() {


    return (
        <>
            {fs.readFile('./../../../../produtos.json', 'utf8',(produtos) => {
                {
                    produtos.map((produto) => {
                        <UserCard
                            nome={produto.nome}
                            categoria={produto.categoria}
                            img={produto.img}
                            preco={produto.preco}
                            estado={produto.estado}
                            descricao={produto.descricao}

                        ></UserCard>
                    })
                }
            })}
        </>
    )
}