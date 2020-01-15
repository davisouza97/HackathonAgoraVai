package br.com.stefanini.hackathon.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.stefanini.hackathon.dto.AdministradorDTO;
import br.com.stefanini.hackathon.model.Administrador;
import br.com.stefanini.hackathon.repository.AdministradorRepository;

@Service
public class AdministradorService {

	@Autowired
	private AdministradorRepository administradorRepository;

	public AdministradorDTO buscar(Long id) {
		Administrador administrador = administradorRepository.findById(id).orElse(null);
		if (administrador == null) {
			throw new RuntimeException("administrador não existe");
		}
		return administrador.converterParaDTO();
	}
	
	public AdministradorDTO logar(AdministradorDTO administradorDTO) {
		Administrador administrador = administradorRepository.findByEmail(administradorDTO.getEmail());
		if (administrador == null) {
			throw new RuntimeException("email não encontrado");
		}
		if (administrador.getSenha().equalsIgnoreCase(administradorDTO.getSenha())) {
			return administrador.converterParaDTO();
		}else {
			throw new RuntimeException("Senha Incorreta");
		}
	}

	public Iterable<Administrador> buscarTodos() {
		return administradorRepository.findAll();
	}

	public AdministradorDTO salvar(AdministradorDTO administradorDTO) {
		if (!validarCamposVazios(administradorDTO)) {
			throw new RuntimeException("O Administrador não pode ter campos vazios");
		}
		if (administradorRepository.existsByEmail(administradorDTO.getEmail())) {
			throw new RuntimeException("Esse Email já foi cadastrado");
		}
		return administradorRepository.save(administradorDTO.converterParaEntidade()).converterParaDTO();
	}

	public AdministradorDTO alterar(AdministradorDTO administradorDTO) {
		if (!validarCamposVazios(administradorDTO)) {
			throw new RuntimeException("O Administrador não pode ter campos vazios");
		}
		return administradorRepository.save(administradorDTO.converterParaEntidade()).converterParaDTO();
	}

	public void deletar(Long id) {
		if (!administradorRepository.existsById(id)) {
			throw new RuntimeException("O candidato não existe");
		} else {
			administradorRepository.deleteById(id);
		}
	}

	private boolean validarCamposVazios(AdministradorDTO administradorDTO) {
		return !(administradorDTO == null || administradorDTO.getNome() == null
				|| administradorDTO.getEmail() == null || administradorDTO.getSenha() == null);
	}

}
