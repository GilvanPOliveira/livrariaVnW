import S from "./style.module.scss";
import livro from "../../assets/livro.svg";

export default function Doacao() {
  return (
    <section className={S.boxContainer}>
      <h2>
        Por favor, preencha o formulário com suas informações e as informações
        do Livro
      </h2>
      <div className={S.boxFormulario}>
        <form action="">
          <div>
            <img src={livro} alt="Livro" />
            <h3>Informações do Livro</h3>
          </div>
          <input type="text" placeholder="Titulo" />
          <input type="text" placeholder="Categoria" />
          <input type="text" placeholder="Autor" />
          <input type="text" placeholder="Link da Imagem" />
          <input type="submit" value="Doar" />
        </form>
      </div>
    </section>
  );
}
