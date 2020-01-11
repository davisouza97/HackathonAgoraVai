package br.com.stefanini.hackathon.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.stefanini.hackathon.dto.ExameDTO;
import br.com.stefanini.hackathon.model.Exame;
import br.com.stefanini.hackathon.repository.ExameRepository;

@Service
public class ExameService {
	@Autowired
	private ExameRepository exameRepository;

	public ExameDTO buscar(Long id) {
		Exame exame = exameRepository.findById(id).orElse(null);
		if (exame == null) {
			throw new RuntimeException("Exame não existe");
		}
		return exame.converterParaDTO();
	}

	public Iterable<ExameDTO> buscarTodos() {
		return exameRepository.buscarTodos();
	}

	public ExameDTO salvar(ExameDTO exameoDTO) {
		if (!validarCamposVazios(exameoDTO)) {
			throw new RuntimeException("O exame não pode ter campos vazios");
		} else if (exameoDTO.getQuantidadeVagas() <= 0) {
			throw new RuntimeException("A quantidade de vagas precisa ser maior que zero");
		}
		return exameRepository.save(exameoDTO.converterParaEntidade()).converterParaDTO();
	}

	public ExameDTO alterar(ExameDTO exameoDTO) {
		if (!validarCamposVazios(exameoDTO)) {
			throw new RuntimeException("O exame não pode ter campos vazios");
		} else if (exameoDTO.getQuantidadeVagas() <= 0) {
			throw new RuntimeException("O exame precisa ter o numero de vagas maior que 0");
		}
		return exameRepository.save(exameoDTO.converterParaEntidade()).converterParaDTO();
	}

	public void deletar(Long id) {
		if (!exameRepository.existsById(id)) {
			throw new RuntimeException("O exame não existe");
		} else {
			exameRepository.deleteById(id);
		}
	}

	private boolean validarCamposVazios(ExameDTO exameDTO) {
		return !(exameDTO == null || exameDTO.getNome() == null || exameDTO.getNome() == ""
				|| exameDTO.getQuantidadeVagas() == null);
	}

}
