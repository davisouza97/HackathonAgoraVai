package br.com.stefanini.hackathon.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;

import br.com.stefanini.hackathon.dto.InscricaoDTO;

@Entity
public class Inscricao implements Serializable{

	private static final long serialVersionUID = -2475848242642181018L;
	@EmbeddedId
	private InscricaoKey inscricaoKey;
	@Column(name = "nota")
	private Double nota;
	
	@ManyToOne(fetch = FetchType.LAZY)
    @MapsId("candidato_id")
    private Candidato candidato;
	
    @ManyToOne(fetch = FetchType.LAZY)
    @MapsId("Exame_id")
    private Exame exame;

    public Inscricao() {
	}

	public Inscricao(InscricaoKey id, Double nota) {
		super();
		this.inscricaoKey = id;
		this.nota = nota;
	}

	public InscricaoKey getInscricaoKey() {
		return inscricaoKey;
	}

	public void setInscricaoKey(InscricaoKey inscricaoKey) {
		this.inscricaoKey = inscricaoKey;
	}

	public Double getNota() {
		return nota;
	}

	public void setNota(Double nota) {
		this.nota = nota;
	}

	public InscricaoDTO converterParaDTO() {
		return new InscricaoDTO(this.inscricaoKey.getCandidatoId(), this.inscricaoKey.getExameId(), this.nota);
	}

	public Candidato getCandidato() {
		return candidato;
	}

	public void setCandidato(Candidato candidato) {
		this.candidato = candidato;
	}

	public Exame getExame() {
		return exame;
	}

	public void setExame(Exame exame) {
		this.exame = exame;
	}

	
}
