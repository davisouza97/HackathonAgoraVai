package br.com.stefanini.hackathon.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import br.com.stefanini.hackathon.dto.ExameDTO;

@Entity
@Table(name = "exames")
public class Exame implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long id;
	@Column(name = "nome")
	private String nome;
	@Column(name = "quantidade_vagas")
	private Integer quantidadeVagas;

	public Exame() {
	}

	public Exame(Long id, String nome, Integer quantidadeVagas) {
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
	
	public ExameDTO converterParaDTO() {
		return new ExameDTO(this.id,this.nome,this.quantidadeVagas);
	}

}
