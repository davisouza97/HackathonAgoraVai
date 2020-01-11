package br.com.stefanini.hackathon.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import br.com.stefanini.hackathon.dto.CandidatoDTO;
import br.com.stefanini.hackathon.model.Candidato;

@Repository
public interface CandidatoRepository extends CrudRepository<Candidato, Long> {
	List<Candidato> findByCidade(String cidade);

	@Query("SELECT new br.com.stefanini.hackathon.dto.CandidatoDTO(c.id, c.nome, c.cidade) FROM Candidato c")
	Iterable<CandidatoDTO> buscarTodos();

}
