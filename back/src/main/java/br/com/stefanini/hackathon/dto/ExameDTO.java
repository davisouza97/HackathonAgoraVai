package br.com.stefanini.hackathon.dto;

import java.io.Serializable;

import br.com.stefanini.hackathon.model.Exame;

public class ExameDTO implements Serializable{

	private static final long serialVersionUID = 1L;
	
	private Long id;
	private String nome;
	private Integer quantidadeVagas;
	private Long quantidadeInscritos;
	
	public ExameDTO() {
		super();
	}

	public ExameDTO(Long id, String nome, Integer quantidadeVagas,Long quantidadeInscritos) {
		super();
		this.id = id;
		this.nome = nome;
		this.quantidadeVagas = quantidadeVagas;
		this.quantidadeInscritos = quantidadeInscritos;
	}

	public ExameDTO(Long id, String nome, Integer quantidadeVagas) {
		super();
		this.id = id;
		this.nome = nome;
		this.quantidadeVagas = quantidadeVagas;
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

	public Integer getQuantidadeVagas() {
		return quantidadeVagas;
	}

	public void setQuantidadeVagas(Integer quantidadeVagas) {
		this.quantidadeVagas = quantidadeVagas;
	}

	public Long getQuantidadeInscritos() {
		return quantidadeInscritos;
	}

	public void setQuantidadeInscritos(Long quantidadeInscritos) {
		this.quantidadeInscritos = quantidadeInscritos;
	}

	public Exame converterParaEntidade() {
		return new Exame(this.id, this.nome, this.quantidadeVagas);
	}
}
