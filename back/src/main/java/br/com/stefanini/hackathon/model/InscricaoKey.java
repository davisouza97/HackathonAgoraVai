package br.com.stefanini.hackathon.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
public class InscricaoKey implements Serializable {

	private static final long serialVersionUID = 1L;

	@Column(name = "candidato_id")
	private Long candidatoId;
	@Column(name = "exame_id")
	private Long exameId;

	public InscricaoKey() {
	}

	public InscricaoKey(Long candidatoId, Long exameId) {
		super();
		this.candidatoId = candidatoId;
		this.exameId = exameId;
	}

	public Long getCandidatoId() {
		return candidatoId;
	}

	public void setCandidatoId(Long candidatoId) {
		this.candidatoId = candidatoId;
	}

	public Long getExameId() {
		return exameId;
	}

	public void setExameId(Long exameId) {
		this.exameId = exameId;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((candidatoId == null) ? 0 : candidatoId.hashCode());
		result = prime * result + ((exameId == null) ? 0 : exameId.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		InscricaoKey other = (InscricaoKey) obj;
		if (candidatoId == null) {
			if (other.candidatoId != null)
				return false;
		} else if (!candidatoId.equals(other.candidatoId))
			return false;
		if (exameId == null) {
			if (other.exameId != null)
				return false;
		} else if (!exameId.equals(other.exameId))
			return false;
		return true;
	}

}
