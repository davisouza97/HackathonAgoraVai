package br.com.stefanini.hackathon.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import br.com.stefanini.hackathon.model.Administrador;

@Repository
public interface AdministradorRepository extends CrudRepository<Administrador, Long>{
	
	public Administrador findByEmail(String nome);
	
	public boolean existsByEmail(String email);
}
