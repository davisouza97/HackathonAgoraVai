package br.com.stefanini.hackathon.dto;

import java.io.Serializable;

import br.com.stefanini.hackathon.model.Candidato;

public class CandidatoDTO implements Serializable {

	private static final long serialVersionUID = 1L;
	private Long id;
	private String nome;
	private String cidade;

	public CandidatoDTO(Long id, String nome, String cidade) {
		super();
		this.id = id;
		this.nome = nome;
		this.cidade = cidade;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getCidade() {
		return cidade;
	}

	public void setCidade(String cidade) {
		this.cidade = cidade;
	}

	public Candidato converterParaEntidade() {
		return new Candidato(this.id, this.nome, this.cidade);
	}
}
