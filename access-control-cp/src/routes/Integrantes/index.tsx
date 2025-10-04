import Erik from '../../img/erik.jpg'
import Gutemberg from '../../img/gutemberg.jpg'
import Hector from '../../img/hector.jpg'
import Joao from '../../img/joao.jpg'
import '../../globals.css'

export default function Integrantes(){
/*essa pagina reaproveita o que ja foi feito no challenge com o hc e adiciona o novo integrante*/

    document.title = "Integrantes";
    return (
        <main className="fundo-integrantes">
            <section className="secao-equipe">
                <h1 className="titulo-equipe">Integrantes do Projeto</h1>
                <div className="grade-integrantes">
                    <div className="card-integrante">
                        <img src={Erik} alt="Foto de Erik" className="foto-integrante" />
                        <h2 className="nome-integrante">Erik Naoki</h2>
                        <p className="descricao-integrante">RM: 565771 - 1TDSPJ</p>
                        <div className="links-integrante">
                            <a href="http://linkedin.com/in/erik-miyasato-4b9062367" target="_blank" className="link-social">LinkedIn</a>
                            <a href="https://github.com/erikmiyasato" target="_blank" className="link-social">GitHub</a>
                        </div>
                    </div>

                    <div className="card-integrante">
                        <img src={Hector} alt="Foto de Hector" className="foto-integrante" />
                        <h2 className="nome-integrante">Hector Soria</h2>
                        <p className="descricao-integrante">RM: 565498 - 1TDSPJ</p>
                        <div className="links-integrante">
                            <a href="https://www.linkedin.com/in/hector-soria-76ab6726b/" target="_blank" className="link-social">LinkedIn</a>
                            <a href="https://github.com/Hectorsalgadoo" target="_blank" className="link-social">GitHub</a>
                            </div>
                    </div>

                    <div className="card-integrante">
                        <img src={Joao} alt="Foto de João" className="foto-integrante" />
                        <h2 className="nome-integrante">João Leal</h2>
                        <p className="descricao-integrante">RM: 564361 - 1TDSPJ</p>
                        <div className="links-integrante">
                            <a href="https://www.linkedin.com/in/jo%C3%A3o-leal-8ba769307/" target="_blank" className="link-social">LinkedIn</a>
                            <a href="https://github.com/JoaoHBatistaLeal" target="_blank" className="link-social">GitHub</a>
                        </div>
                    </div>

                    <div className="card-integrante">
                        <img src={Gutemberg} alt="Foto de Gutemberg" className="foto-integrante" />
                        <h2 className="nome-integrante">Gutemberg Rocha</h2>
                        <p className="descricao-integrante">RM: 562267 - 1TDSPJ</p>
                        <div className="links-integrante">
                            <a href="https://www.linkedin.com/in/gutemberg-rocha-28757361/" target="_blank" className="link-social">LinkedIn</a>
                            <a href="https://github.com/Gutemberg149" target="_blank" className="link-social">GitHub</a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}