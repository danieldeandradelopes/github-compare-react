import React, { Component } from "react";
import api from "../../services/api";
import moment from "moment";

import logo from "../../assets/logo.png";

import { Container, Form } from "./styles";
import CompareList from "../../components/CompareList";

export default class Main extends Component {
  state = {
    loading: false,
    repositoryError: false,
    repositoryInput: "",
    repositories: []
  };

  handleAddRepository = async e => {
    // desativa a atualização da página ao clicar no botão (padrão do html)
    e.preventDefault();

    this.setState({ loading: true });

    try {
      const { data: repository } = await api.get(
        `/repos/${this.state.repositoryInput}`
      );

      // formatando data
      repository.lastCommit = moment(repository.pushed_at).fromNow();

      this.setState({
        // deixar o nosso input em branco
        repositoryInput: "",

        //copiar o que já tem dentro do nosso repositories [] e depois adicionar mais um a ele
        repositories: [...this.state.repositories, repository],

        // para tratarmos os erros, vamos manter o repositoryError como false
        repositoryError: false
      });

      localStorage.setItem(repository.id, JSON.stringify(repository));
    } catch (error) {
      this.setState({ repositoryError: true });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    return (
      <Container>
        <img src={logo} alt="Github Compare" />

        <Form
          withError={this.state.repositoryError}
          onSubmit={this.handleAddRepository}
        >
          {/* o e.target é para pegar o valor do elemento em questão */}
          <input
            type="text"
            placeholder="Usuário/Repositório"
            value={this.state.repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">
            {this.state.loading ? (
              <i className="fa fa-spinner fa-pulse" />
            ) : (
              "OK"
            )}
          </button>
        </Form>
        <CompareList repositories={this.state.repositories} />
      </Container>
    );
  }
}
