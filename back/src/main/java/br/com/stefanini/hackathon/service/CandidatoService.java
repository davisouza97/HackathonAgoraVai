package br.com.stefanini.hackathon.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.stefanini.hackathon.dto.CandidatoDTO;
import br.com.stefanini.hackathon.model.Candidato;
import br.com.stefanini.hackathon.repository.CandidatoRepository;

@Service
public class CandidatoService {

	@Autowired
	private CandidatoRepository candidatoRepository;

	public CandidatoDTO buscar(Long id) {
		Candidato candidato = candidatoRepository.findById(id).orElse(null);
		if (candidato == null) {
			throw new RuntimeException("Candidato não existe");
		}
		return candidato.converterParaDTO();
	}

	public Iterable<CandidatoDTO> buscarTodos() {
		return candidatoRepository.buscarTodos();
	}

	public Iterable<Candidato> buscarTodosPorCidade(String cidade) {
		return candidatoRepository.findByCidade(cidade);
	}

	public CandidatoDTO salvar(CandidatoDTO candidatoDTO) {
		if (!validarCamposVazios(candidatoDTO)) {
			throw new RuntimeException("O candidato não pode ter campos vazios");
		}
		return candidatoRepository.save(candidatoDTO.converterParaEntidade()).converterParaDTO();
	}

	public CandidatoDTO alterar(CandidatoDTO candidatoDTO) {
		if (!validarCamposVazios(candidatoDTO)) {
			throw new RuntimeException("O candidato não pode ter campos vazios");
		}
		return candidatoRepository.save(candidatoDTO.converterParaEntidade()).converterParaDTO();
	}

	public void deletar(Long id) {
		if (!candidatoRepository.existsById(id)) {
			throw new RuntimeException("O candidato não existe");
		} else {
			candidatoRepository.deleteById(id);
		}
	}

	private boolean validarCamposVazios(CandidatoDTO candidatoDTO) {
		return !(candidatoDTO == null || candidatoDTO.getNome() == null || candidatoDTO.getNome() == ""
				|| candidatoDTO.getCidade() == null || candidatoDTO.getCidade() == "");
	}
}
