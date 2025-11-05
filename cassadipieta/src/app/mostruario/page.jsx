import Card from '@/components/Card'

export default async function prod() {
    const res = await fetch('http://localhost:4000/produtos')
    const data = await res.json()
    const produtos = data.produtos


    return (
        <div className="container my-5">
            <div className="row g-4 justify-content-center">
                {produtos.map(produto => (
                    <Card
                        key={produto.id}
                        id={produto.id}
                        nome={produto.nome}
                        img={produto.img[0]}
                        preco={produto.preco}
                    />
                ))}
            </div>
        </div>

    )

}