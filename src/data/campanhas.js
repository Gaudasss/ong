import imgAlimentos from "../assets/illustrations/campanha-alimentos.svg";
import imgRoupas from "../assets/illustrations/campanha-roupas.svg";
import imgEducacao from "../assets/illustrations/campanha-educacao.svg";
import imgHigiene from "../assets/illustrations/campanha-higiene.svg";

const campanhas = [
  {
    id: "cesta-basica",
    titulo: "Cestas Básicas para Famílias",
    categoria: "Alimentação",
    imagem: imgAlimentos,
    descricao:
      "Arrecadação de alimentos não perecíveis para montar cestas básicas entregues mensalmente a famílias em situação de vulnerabilidade em Maceió.",
    arrecadado: 3200,
    meta: 5000,
  },
  {
    id: "agasalho-solidario",
    titulo: "Campanha do Agasalho",
    categoria: "Vestuário",
    imagem: imgRoupas,
    descricao:
      "Coleta de roupas e cobertores em bom estado para distribuir a pessoas em situação de rua durante os meses mais frios do ano.",
    arrecadado: 1450,
    meta: 2000,
  },
  {
    id: "material-escolar",
    titulo: "Volta às Aulas",
    categoria: "Educação",
    imagem: imgEducacao,
    descricao:
      "Doação de material escolar (cadernos, lápis, mochilas) para crianças da rede pública matriculadas na comunidade atendida pela ONG.",
    arrecadado: 980,
    meta: 3000,
  },
  {
    id: "higiene-em-dia",
    titulo: "Higiene em Dia",
    categoria: "Higiene Pessoal",
    imagem: imgHigiene,
    descricao:
      "Arrecadação de itens de higiene pessoal (sabonete, escova de dente, shampoo) para abrigos e famílias cadastradas na ONG.",
    arrecadado: 620,
    meta: 1500,
  },
];

export default campanhas;
