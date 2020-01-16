package br.com.stefanini.hackathon.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.stefanini.hackathon.dto.InscricaoDTO;
import br.com.stefanini.hackathon.model.Exame;
import br.com.stefanini.hackathon.model.InscricaoKey;
import br.com.stefanini.hackathon.repository.CandidatoRepository;
import br.com.stefanini.hackathon.repository.ExameRepository;
import br.com.stefanini.hackathon.repository.InscricaoRepository;

@Service
public class InscricaoService {

	@Autowired
	private InscricaoRepository inscricaoRepository;
	@Autowired
	private CandidatoRepository candidatoRepository;
	@Autowired
	private ExameRepository exameRepository;

	public InscricaoDTO buscar(InscricaoKey inscricaoKey) {
		if (!inscricaoRepository.existsById(inscricaoKey)) {
			throw new RuntimeException("Essa Inscrição não existe");
		}
		return inscricaoRepository.findById(inscricaoKey).get().converterParaDTO();
	}

	public Iterable<InscricaoDTO> buscarTodos() {
		return inscricaoRepository.buscarTodos();
	}

	public Iterable<InscricaoDTO> buscarTodosPorExame(Long exameId) {
		return inscricaoRepository.buscarTodosPorExameOrderByNota(exameId);
	}

	public Iterable<InscricaoDTO> buscarSituacaoPorExame(Long exameId) {
		Exame exame = exameRepository.findById(exameId).orElse(null);
		if (exame == null) {
			throw new RuntimeException("Esse exame não existe");
		}
		Iterable<InscricaoDTO> inscricoes = inscricaoRepository.buscarTodosPorExameOrderByNota(exameId);
		int indice = 0;
		for (InscricaoDTO inscricaoDTO : inscricoes) {
			if (indice < exame.getQuantidadeVagas() && inscricaoDTO.getNota() > 0) {
				inscricaoDTO.setAprovado(true);
			} else {
				break;
			}
			indice++;
		}
		return inscricoes;
	}

	public InscricaoDTO salvar(InscricaoDTO inscricaoDTO) {
		if (inscricaoRepository.existsById(inscricaoDTO.pegarInscricaoKey())) {
			throw new RuntimeException("Essa inscrição já existe");
		}
		return inscricaoRepository.save(inscricaoDTO.converterParaEntidade()).converterParaDTO();
	}

	public InscricaoDTO alterar(InscricaoDTO inscricaoDTO) {
		if (inscricaoDTO == null) {
			throw new RuntimeException("Inscrição não pode estar vazia");
		}
		if (inscricaoDTO.getNota() < 0) {
			throw new RuntimeException("Campo nota não pode ser menor que 0");
		}
		if (inscricaoDTO.getNota() > 100) {
			throw new RuntimeException("Campo nota não pode ser maior que 100");
		}
		if (inscricaoDTO.getNota() == null) {
			throw new RuntimeException("Campo nota não pode estar vazia");
		}
		return inscricaoRepository.save(inscricaoDTO.converterParaEntidade()).converterParaDTO();
	}

	public void deletar(InscricaoKey inscricaoKey) {
		inscricaoRepository.deleteById(inscricaoKey);
	}

	public void deletarPorExame(Long exameId) {
		if (!exameRepository.existsById(exameId)) {
			throw new RuntimeException("Esse exame não existe");
		}
		inscricaoRepository.deleteAll(inscricaoRepository.findByInscricaoKeyExameId(exameId));
	}

	public void deletarPorCandidato(Long candidatoId) {
		if (!candidatoRepository.existsById(candidatoId)) {
			throw new RuntimeException("Esse candidato não existe");
		}
		inscricaoRepository.deleteAll(inscricaoRepository.findByInscricaoKeyCandidatoId(candidatoId));
	}
}
