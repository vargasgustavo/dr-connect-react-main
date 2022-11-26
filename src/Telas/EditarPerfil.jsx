import React from "react";
import "../css/pacientestyle.css";
import axiosInstance from "../axios";
import Swal from "sweetalert2";
import logoCard from "../images/logo-card-login.svg";

const CadastroMain = ({ Data }) => {
  const [Id, setId] = React.useState("");
  const [Nome, setNome] = React.useState("");
  const [Email, setEmail] = React.useState("");
  const [Senha, setSenha] = React.useState("");
  const [ConfSenha, setConfSenha] = React.useState("");

  React.useEffect(() => {
    if (!!Data) {
      setNome(Data?.nome);
      setEmail(Data?.email);
      setSenha(Data?.senha);
      setConfSenha(Data?.confsenha);
    }
  }, [Data]);

  function handleSubmit(e) {
    e.preventDefault();

    const data = {
      nome: Nome,
      email: Email,
      senha: Senha,
      confsenha: ConfSenha,
    };

    if (!!Id) {
      axiosInstance.put(`doctors`, data).then((response) => {
        Swal.fire({
          title: "success",
          text: response.data?.response,
          icon: "success",
        });
      });
    } else {
      axiosInstance.post(`doctors`, data).then((response) => {
        Swal.fire({
          title: "success",
          text: response.data?.response,
          icon: "success",
        });
      });
    }
  }

  return (
    <div>
      <div className="main-login-edit">
        <div className="right-login-edit">
          <h1 className="sub">Edite seu perfil</h1>
          <div className="card-login-edit" onSubmit={handleSubmit}>
            <div className="title-a">
              <a>Bem Vindo(a) ao</a>
            </div>
            <div className="title-edit">
              <img alt="" src={logoCard} className="title-image" />
            </div>
            <div className="textfield-edit">
              <label for="usuario">Nome completo</label>
              <input
                type="text"
                name="nome"
                placeholder="Digite seu nome..."
                required
                onChange={(e) => setNome(e.target.value)}
                value={Nome}
              />
            </div>
            <div className="textfield-edit">
              <label for="senha">E-mail</label>
              <input
                type="text"
                name="email"
                placeholder="Coloque seu e-mail"
                required
                onChange={(e) => setEmail(e.target.value)}
                value={Email}
              />
            </div>
            <div className="textfield-edit">
              <label for="senha">Senha</label>
              <input
                type="password"
                name="senha"
                placeholder="Senha"
                required
                onChange={(e) => setSenha(e.target.value)}
                value={Senha}
              />
            </div>
            <div className="textfield-edit">
              <label for="senha">Confirmar Senha</label>
              <input
                type="password"
                name="confsenha"
                placeholder="Confirmar Senha"
                required
                onChange={(e) => setConfSenha(e.target.value)}
                value={ConfSenha}
              />
              <p>
                Ao criar uma conta, você aceita os termos e condições de uso da
                Dr. Connect e reconhece que leu e entendeu nossa política de
                privacidade.
              </p>
            </div>
            <button
              className="button-login trasitionButton"
              type="submit"
            >
              Salvar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CadastroMain;
