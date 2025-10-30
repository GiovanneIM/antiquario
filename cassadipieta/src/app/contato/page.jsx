import "./contato.css"
import Image from "next/image";

export default function Home() {
    return (
        <>
            <div className="container py-5 d-flex flex-column justify-content-center align-items-center">
                {/* PERGUNTAS FREQUENTES */}
                <div className="px-3 col-12 col-lg-8">
                    <h4 className="mb-5 text-center">Perguntas Frequentes</h4>

                    <div className="mt-2 px-3">
                        <div className="accordion accordion-flush" id="accordionFlushExample" >
                            <div className="accordion-item">
                                <h2 className="accordion-header border border-secondary">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseOne"
                                        aria-expanded="false"
                                        aria-controls="flush-collapseOne"
                                    >
                                        Quem pode retirar o pedido na loja?
                                    </button>
                                </h2>
                                <div
                                    id="flush-collapseOne"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#accordionFlushExample"
                                >
                                    <div className="accordion-body">
                                        A retirada só pode ser realizada pela pessoa que você indicou no
                                        ato da compra com a apresentação de um documento com foto. Caso
                                        uma outra pessoa tente fazer este procedimento, é necessário
                                        enviar um e-mail com autorização para credito@sportshop.com.br,
                                        com os seguintes dados: Nome completo (responsável para retirada),
                                        CPF e grau de parentesco.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseTwo"
                                        aria-expanded="false"
                                        aria-controls="flush-collapseTwo"
                                    >
                                        Como funciona Retirada Loja?
                                    </button>
                                </h2>
                                <div
                                    id="flush-collapseTwo"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#accordionFlushExample"
                                >
                                    <div className="accordion-body">
                                        A retirada loja é uma maneira de você comprar online ou pelo nosso
                                        televendas e retirar o seu produto em alguma loja física da
                                        SportShop de sua preferência e mais perto de você. Sendo uma opção
                                        mais rápida e sem custos de frete.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header border border-secondary">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseThree"
                                        aria-expanded="false"
                                        aria-controls="flush-collapseThree"
                                    >
                                        Em quais situações perdemos a garantia?
                                    </button>
                                </h2>
                                <div
                                    id="flush-collapseThree"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#accordionFlushExample"
                                >
                                    <div className="accordion-body">
                                        Todos os produtos SportShop são destinados exclusivamente ao uso
                                        doméstico; o uso comercial pode resultar na perda da garantia.
                                        Evite o uso de adaptadores nos produtos. Se houver
                                        incompatibilidade com a tomada, recomendamos que busque a
                                        assistência de um eletricista profissional. Por favor, evite a
                                        utilização de transformador, pois o uso deste dispositivo pode
                                        acarretar riscos para sua segurança, bem como comprometer o
                                        funcionamento adequado do produto e a qualidade do mesmo.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className=" col-12 col-lg-10 my-5" />

                {/* CONTATO */}
                <div className="col-12 col-lg-8 px-3">
                    <h4 className="mb-5 text-center">Entre em Contato</h4>

                    <div className="d-flex justify-content-center">
                        <form className="needs-validation col-12" noValidate="">
                            <div className="row g-3">
                                <div className="col-sm-6">

                                    <label htmlFor="firstName" className="form-label">
                                        Nome completo
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="firstName"
                                        placeholder="Nome"
                                        defaultValue=""
                                        required=""
                                        style={{ border: "1px solid black" }}
                                    />
                                    <div className="invalid-feedback">
                                        Valid first name is required.
                                    </div>
                                </div>

                                <div className="col-sm-6">

                                    <label htmlFor="firstName" className="form-label">
                                        Telefone
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="firstName"
                                        placeholder="Telefone"
                                        defaultValue=""
                                        required=""
                                        style={{ border: "1px solid black" }}
                                    />
                                    <div className="invalid-feedback">
                                        Valid first name is required.
                                    </div>
                                </div>

                                <div className="col-12">

                                    <label htmlFor="email" className="form-label">
                                        E-mail
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        placeholder="E-mail"
                                        style={{ border: "1px solid black" }}
                                    />
                                    <div className="invalid-feedback">
                                        Please enter a valid email address for shipping updates.
                                    </div>
                                </div>

                                <label
                                    htmlFor="comments"
                                    className="form-label"
                                    style={{ marginBottom: 0 }}
                                >
                                    Assunto
                                </label>
                                <div className="input-group">
                                    <textarea
                                        className="form-control"
                                        aria-label="With textarea"
                                        style={{ height: "15vh", border: "1px solid black" }}
                                        placeholder="Estou entrando em contato para..."
                                    />
                                </div>
                            </div>
                            <hr className="my-4" />
                            <button
                                className=" btn btn-primary btn-md"
                                type="button"
                                style={{ width: 150 }}
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                            >
                                Enviar
                            </button>
                            {/* Modal */}
                            <div
                                className="modal fade"
                                id="exampleModal"
                                tabIndex={-1}
                                aria-labelledby="exampleModalLabel"
                                aria-hidden="true"
                            >
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id="exampleModalLabel">
                                                Recebemos sua Mensagem!
                                            </h1>
                                            <button
                                                type="button"
                                                className="btn-close"
                                                data-bs-dismiss="modal"
                                                aria-label="Close"
                                            />
                                        </div>
                                        <div className="modal-body">
                                            Que legal que você entrou em contato com a gente, o seu
                                            feedback é muito importante para a Pinguim Shop. Agradecemos
                                            a sua mensagem e vamos analisá-la com carinho.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <hr className=" col-12 col-lg-10 my-5" />

                {/* Sobre nós */}
                <div className="col-12 col-lg-10" >
                    <div className="row featurette py-5">

                        <div className="col-12 col-md-7">
                            <h2 className="featurette-heading fw-normal lh-1">Sobre nós</h2>

                            <h2 className="featurette-heading fw-normal lh-1 mt-4">
                                <span className="text-body-secondary">Cassa di Pietá.</span>
                            </h2>
                            <p className="lead">
                                A Cassa di Pietá é um antiquário com 45 anos de tradição, dedicado a preservar a história e o charme dos objetos que marcaram gerações.
                                Desde nossa fundação, temos o compromisso de oferecer peças únicas que carregam não apenas beleza, mas também memórias e significados.
                            </p>

                            <h2 className="featurette-heading fw-normal lh-1 mt-4">
                                <span className="text-body-secondary">Nossos objetivos.</span>
                            </h2>
                            <p className="lead">
                                Nosso propósito vai além da simples venda de antiguidades. Buscamos:
                            </p>
                            <ul className="lead">
                                <li>Preservar e valorizar a história através de nossos produtos</li>
                                <li>Oferecer aos nossos clientes peças autênticas, com procedência e qualidade</li>
                                <li>Promover o consumo consciente e sustentável por meio da reutilização de objetos históricos</li>
                                <li>Manter viva a tradição dos antiquários, unindo o passado e o presente com elegância</li>
                            </ul>

                            <h2 className="featurette-heading fw-normal lh-1 mt-4">
                                <span className="text-body-secondary">Nossa essência.</span>
                            </h2>
                            <p className="lead">
                                Cada item em nosso acervo é cuidadosamente selecionado, restaurado e preservado para garantir autenticidade e valor histórico.
                                Na Cassa di Pietá, acreditamos que cada peça conta uma história — e é um privilégio poder compartilhá-las com nossos clientes.
                            </p>
                        </div>

                        <div className="col-12 col-md-5 overflow-hidden" style={{minHeight: '300px'}}>
                            <img src="/img/antiquario.svg" className="d-none d-md-block h-100" />
                            <img src="/img/antiquario.svg" className="d-md-none w-100" />
                        </div>
                    </div>
                </div >
            </div >


        </>
    );
}
