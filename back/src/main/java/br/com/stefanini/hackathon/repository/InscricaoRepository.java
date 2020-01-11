package br.com.stefanini.hackathon.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import br.com.stefanini.hackathon.dto.InscricaoDTO;
import br.com.stefanini.hackathon.model.Inscricao;
import br.com.stefanini.hackathon.model.InscricaoKey;

@Repository
public interface InscricaoRepository extends CrudRepository<Inscricao, InscricaoKey> {

	@Query("SELECT new br.com.stefanini.hackathon.dto.InscricaoDTO(c.id, e.id, i.nota, c.nome, c.cidade,"
			+ "e.nome,e.quantidadeVagas) FROM Inscricao i join Candidato c on c.id = i.candidato.id join Exame e on e.id = i.exame.id")
	Iterable<InscricaoDTO> buscarTodos();

	@Query("SELECT new br.com.stefanini.hackathon.dto.InscricaoDTO(c.id, e.id, i.nota, c.nome, c.cidade,"
			+ "e.nome,e.quantidadeVagas) FROM Inscricao i join Candidato c on c.id = i.candidato.id join Exame e on e.id = i.exame.id where i.inscricaoKey.exameId  = ?1 ORDER BY i.nota DESC")
	Iterable<InscricaoDTO> buscarTodosPorExame(Long ExameId);
	
	List<Inscricao> findByInscricaoKeyCandidatoId(Long candidatoId);

	List<Inscricao> findByInscricaoKeyExameId(Long exameId);
	
}
