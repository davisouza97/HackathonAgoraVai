package br.com.stefanini.hackathon.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import br.com.stefanini.hackathon.dto.CandidatoDTO;

@Entity
@Table(name = "candidatos")
public class Candidato implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long id;
	@Column(name = "nome")
	private String nome;
	@Column(name = "cidade")
	private String cidade;

	public Candidato() {

	}

	public Candidato(Long id,String nome, String cidade) {
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

	@Override
	public String toString() {
		return "Candidato [nome=" + nome + ", cidade=" + cidade + "]";
	}

	public CandidatoDTO converterParaDTO() {
		return new CandidatoDTO(this.id, this.nome, this.cidade);
	}

}
