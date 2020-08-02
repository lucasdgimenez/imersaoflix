/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable linebreak-style */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import PageDefault from "../../../components/PageDefault";
import FormField from "../../../components/FormField";
import Button from "../../../components/Button";

function CadastroCategoria() {
  const valoresIniciais = {
    nome: "",
    descricao: "",
    cor: "",
  };
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor, // nome: 'valor'
    });
  }
  function handleClick(info) {
    setValue(info.target.getAttribute("name"), info.target.value);
  }

  return (
    <PageDefault>
      <h2>
        Cadastro de Categoria:
        {values.nome}
      </h2>

      <form
        onSubmit={function handleSubmit(infoEvento) {
          infoEvento.preventDefault();
          setCategorias([...categorias, values]);
          setValues(valoresIniciais);
        }}
      >
        <FormField
          label="Nome da categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleClick}
        />

        <FormField
          label="Descricao"
          type="textarea"
          value={values.descricao}
          name="descricao"
          onChange={handleClick}
        />

        <FormField
          label="Cor"
          type="color"
          value={values.cor}
          name="cor"
          onChange={handleClick}
        />
        <Button>Cadastrar</Button>
      </form>
      <ul>
        {categorias.map((item, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={`${item}${index}`}>{item.nome}</li>
        ))}
      </ul>
      <Link to="/">Home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
