import S from "./style.module.scss";
import livro01 from "../../assets/01.png";
import livro02 from "../../assets/02.png";
import livro03 from "../../assets/03.png";
import livro04 from "../../assets/04.png";
import livro05 from "../../assets/05.png";
import livro06 from "../../assets/06.png";

export default function LivrosDoados() {
  return (
    <section className={S.boxContainer}>
      <h2>Livros Doados</h2>
      <section className={S.boxCard}>
        <article>
          <img
            src={livro01}
            alt="Livro Marvel Heroes Ed.01"
            title="Livro Marvel Heroes Ed.01"
          />
          <h3>Livro Marvel Heroes Ed.01</h3>
          <h4>
            Os Vingadores: A Vingança De Ultron / A Chegada Dos Vingadores
          </h4>
          <p>Marvel</p>
          <p>Ficção</p>
        </article>
        <article>
          <img
            src={livro02}
            alt="Livro Marvel Heroes Ed.02"
            title="Livro Marvel Heroes Ed.02"
          />
          <h3>Livro Marvel Heroes Ed.02</h3>
          <h4>Homem-Aranha: O Sexteto Sinistro / Feliz Aniversário</h4>
          <p>Marvel</p>
          <p>Ficção</p>
        </article>
        <article>
          <img
            src={livro03}
            alt="Livro Marvel Heroes Ed.03"
            title="Livro Marvel Heroes Ed.03"
          />
          <h3>Livro Marvel Heroes Ed.03</h3>
          <h4>Wolverine: Entra Em Cena, O Wolverine! / Procura-se Mística!</h4>
          <p>Marvel</p>
          <p>Ficção</p>
        </article>
        <article>
          <img
            src={livro04}
            alt="Livro Marvel Heroes Ed.04"
            title="Livro Marvel Heroes Ed.04"
          />
          <h3>Livro Marvel Heroes Ed.04</h3>
          <h4>Hulk: Os Cães De Guerra</h4>
          <p>Marvel</p>
          <p>Ficção</p>
        </article>
        <article>
          <img
            src={livro05}
            alt="Livro Marvel Heroes Ed.05"
            title="Livro Marvel Heroes Ed.05"
          />
          <h3>Livro Marvel Heroes Ed.05</h3>
          <h4>Homem De Ferro: Nasce O Homem De Ferro / Os Cinco Pesadelos</h4>
          <p>Marvel</p>
          <p>Ficção</p>
        </article>
        <article>
          <img
            src={livro06}
            alt="Livro Marvel Heroes Ed.06"
            title="Livro Marvel Heroes Ed.06"
          />
          <h3>Livro Marvel Heroes Ed.06</h3>
          <h4>
            Viúva-Negra: O Dínamo Escarlate Ataca Outra Vez! / Cuidado Com... A
            Viúva-Negra! / Volta Pra Casa.
          </h4>
          <p>Marvel</p>
          <p>Ficção</p>
        </article>
      </section>
    </section>
  );
}
