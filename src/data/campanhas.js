function pexels(id) {
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=800`;
}

const campanhas = [
  {
    id: "cesta-basica",
    titulo: "Cestas Básicas para Famílias",
    categoria: "Alimentação",
    imagem: pexels(6994946),
    descricao:
      "Arrecadação de alimentos não perecíveis para montar cestas básicas entregues mensalmente a famílias em situação de vulnerabilidade em Maceió.",
    arrecadado: 3200,
    meta: 5000,
  },
  {
    id: "agasalho-solidario",
    titulo: "Campanha do Agasalho",
    categoria: "Vestuário",
    imagem: pexels(7345399),
    descricao:
      "Coleta de roupas em bom estado para distribuir a famílias em situação de vulnerabilidade durante os meses mais frios do ano.",
    arrecadado: 1450,
    meta: 2000,
  },
  {
    id: "material-escolar",
    titulo: "Volta às Aulas",
    categoria: "Educação",
    imagem: pexels(31258388),
    descricao:
      "Doação de material escolar (cadernos, lápis, mochilas) para crianças da rede pública matriculadas na comunidade atendida pela ONG.",
    arrecadado: 980,
    meta: 3000,
  },
  {
    id: "higiene-em-dia",
    titulo: "Higiene em Dia",
    categoria: "Higiene Pessoal",
    imagem: pexels(7156157),
    descricao:
      "Arrecadação de itens de higiene pessoal (sabonete, escova de dente, toalhas) para abrigos e famílias cadastradas na ONG.",
    arrecadado: 620,
    meta: 1500,
  },
];

export default campanhas;
