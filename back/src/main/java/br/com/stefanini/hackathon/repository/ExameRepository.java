package br.com.stefanini.hackathon.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import br.com.stefanini.hackathon.dto.ExameDTO;
import br.com.stefanini.hackathon.model.Exame;

@Repository
public interface ExameRepository extends CrudRepository<Exame, Long> {
	
	@Query("SELECT new br.com.stefanini.hackathon.dto.ExameDTO(e.id, e.nome, e.quantidadeVagas,(SELECT count(*) FROM Inscricao i WHERE i.inscricaoKey.exameId = e.id)) FROM Exame e")
	Iterable<ExameDTO> buscarTodos();
}
