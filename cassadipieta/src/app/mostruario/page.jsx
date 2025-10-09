"use client"
import UserCard from '@/components/UserCard'
import produtos from '/produtos.js'


export default function prod() {


    return (
        <>
           
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
        </>
    )
}