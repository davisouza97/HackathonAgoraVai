package br.com.stefanini.hackathon.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.stefanini.hackathon.dto.InscricaoDTO;
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
		return inscricaoRepository.buscarTodosPorExame(exameId);
	}

	public InscricaoDTO salvar(InscricaoDTO inscricaoDTO) {
		if (inscricaoRepository.existsById(inscricaoDTO.pegarInscricaoKey())) {
			throw new RuntimeException("Essa inscrição já existe");
		}
		return inscricaoRepository.save(inscricaoDTO.converterParaEntidade()).converterParaDTO();
	}

	public InscricaoDTO alterar(InscricaoDTO inscricaoDTO) {
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
