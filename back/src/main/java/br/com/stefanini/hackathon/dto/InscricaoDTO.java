package br.com.stefanini.hackathon.dto;

import br.com.stefanini.hackathon.model.Inscricao;
import br.com.stefanini.hackathon.model.InscricaoKey;

public class InscricaoDTO {
	private Long idCandidato;
	private Long idExame;
	private Double nota;
	private String nomeCandidato;
	private String cidadeCandidato;
	private String nomeExame;
	private Integer quantidadeVagas;
	

	public InscricaoDTO() {

	}
	
	public InscricaoDTO(Double nota) {
		super();
		this.nota = nota;
	}
	
	public InscricaoDTO(Long idCandidato, Long idExame, Double nota, String nomeCandidato, String cidadeCandidato,
			String nomeExame, Integer quantidadeVagas) {
		super();
		this.idCandidato = idCandidato;
		this.idExame = idExame;
		this.nota = nota;
		this.nomeCandidato = nomeCandidato;
		this.cidadeCandidato = cidadeCandidato;
		this.nomeExame = nomeExame;
		this.quantidadeVagas = quantidadeVagas;
	}

	public InscricaoDTO(Long idCandidato, Long idExame, Double nota) {
		super();
		this.idCandidato = idCandidato;
		this.idExame = idExame;
		this.nota = nota;
	}
	
	public Long getIdCandidato() {
		return idCandidato;
	}

	public void setIdCandidato(Long idCandidato) {
		this.idCandidato = idCandidato;
	}

	public Long getIdExame() {
		return idExame;
	}

	public void setIdExame(Long idExame) {
		this.idExame = idExame;
	}

	public Double getNota() {
		return nota;
	}

	public void setNota(Double nota) {
		this.nota = nota;
	}
	
	public String getNomeCandidato() {
		return nomeCandidato;
	}

	public void setNomeCandidato(String nomeCandidato) {
		this.nomeCandidato = nomeCandidato;
	}

	public String getCidadeCandidato() {
		return cidadeCandidato;
	}

	public void setCidadeCandidato(String cidadeCandidato) {
		this.cidadeCandidato = cidadeCandidato;
	}

	public String getNomeExame() {
		return nomeExame;
	}

	public void setNomeExame(String nomeExame) {
		this.nomeExame = nomeExame;
	}

	public Integer getQuantidadeVagas() {
		return quantidadeVagas;
	}

	public void setQuantidadeVagas(Integer quantidadeVagas) {
		this.quantidadeVagas = quantidadeVagas;
	}

	public Inscricao converterParaEntidade() {
		return new Inscricao(new InscricaoKey(this.idCandidato,this.idExame),this.nota);
	}
	
	public InscricaoKey pegarInscricaoKey() {
		return new InscricaoKey(this.idCandidato,this.idExame);
	}

}
