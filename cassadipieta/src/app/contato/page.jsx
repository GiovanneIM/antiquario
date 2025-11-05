'use client'

import { useState } from "react";

export default function Home() {
  const [form, setForm] = useState({ nome: "", telefone: "", email: "", mensagem: "" });
  const [enviado, setEnviado] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setEnviado(true);
    setForm({ nome: "", telefone: "", email: "", mensagem: "" });
  }

  return (
    <>
      <div className="container py-5 d-flex flex-column justify-content-center align-items-center">
        <div className="px-3 col-12 col-lg-8">
          <h4 className="mb-5 text-center">Perguntas Frequentes</h4>

          <div className="mt-2 px-3">
            <div className="accordion accordion-flush" id="accordionFlushExample">
              <div className="accordion-item border rounded mb-3">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                  >
                    Quem pode retirar o pedido na loja?
                  </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">
                    A retirada só pode ser realizada pela pessoa indicada na compra, mediante documento com foto. Caso outra pessoa vá retirar, envie autorização por e-mail.
                  </div>
                </div>
              </div>

              <div className="accordion-item border rounded mb-3">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                  >
                    Como funciona Retirada Loja?
                  </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">
                    Você compra online e retira na loja física, sem custo de frete.
                  </div>
                </div>
              </div>

              <div className="accordion-item border rounded mb-3">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                  >
                    Em quais situações perdemos a garantia?
                  </button>
                </h2>
                <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">
                    O uso comercial, transformadores ou má adaptação elétrica podem resultar em perda de garantia.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="col-12 col-lg-10 my-5" />

        <div className="col-12 col-lg-8 px-3">
          <h4 className="mb-5 text-center">Entre em Contato</h4>

          <div className="d-flex justify-content-center">
            <form className="needs-validation col-12 bg-light p-4 rounded shadow-sm" onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-sm-6">
                  <label htmlFor="nome" className="form-label">Nome completo</label>
                  <input type="text" className="form-control border-dark" id="nome" name="nome" value={form.nome} onChange={handleChange} required />
                </div>

                <div className="col-sm-6">
                  <label htmlFor="telefone" className="form-label">Telefone</label>
                  <input type="text" className="form-control border-dark" id="telefone" name="telefone" value={form.telefone} onChange={handleChange} required />
                </div>

                <div className="col-12">
                  <label htmlFor="email" className="form-label">E-mail</label>
                  <input type="email" className="form-control border-dark" id="email" name="email" value={form.email} onChange={handleChange} required />
                </div>

                <div className="col-12">
                  <label htmlFor="mensagem" className="form-label">Assunto</label>
                  <textarea className="form-control border-dark" id="mensagem" name="mensagem" value={form.mensagem} onChange={handleChange} style={{ height: "15vh" }} />
                </div>
              </div>

              <hr className="my-4" />

              <button className="btn btn-primary" type="submit" style={{ width: 150 }}>
                Enviar
              </button>

              {enviado && (
                <div className="alert alert-success mt-3" role="alert">
                  Mensagem enviada com sucesso! Entraremos em contato em breve.
                </div>
              )}
            </form>
          </div>
        </div>

        <hr className="col-12 col-lg-10 my-5" />

        <section className="col-12 col-lg-10 py-5">
          <div className="row featurette">
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
          </div>
        </section>
      </div>
    </>
  );
}