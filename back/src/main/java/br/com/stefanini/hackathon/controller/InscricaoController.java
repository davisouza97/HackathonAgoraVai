package br.com.stefanini.hackathon.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.stefanini.hackathon.dto.InscricaoDTO;
import br.com.stefanini.hackathon.model.InscricaoKey;
import br.com.stefanini.hackathon.service.InscricaoService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/inscricoes")
public class InscricaoController {

	@Autowired
	private InscricaoService inscricaoService;

	@GetMapping("/{idCandidato}/{idExame}")
	public ResponseEntity<Object> buscar(@PathVariable Long idCandidato, @PathVariable Long idExame) {
		try {
			return ResponseEntity.ok(inscricaoService.buscar(new InscricaoKey(idCandidato, idExame)));
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
		}
	}

	@GetMapping
	public Iterable<InscricaoDTO> buscarTodos() {
		return inscricaoService.buscarTodos();
	}

	@PostMapping
	public ResponseEntity<Object> salvar(@RequestBody InscricaoDTO inscricaoDTO) {
		try {
			return ResponseEntity.ok(inscricaoService.salvar(inscricaoDTO));
		} catch (RuntimeException e) {
			return ResponseEntity.badRequest().body(e.getMessage());
		}
	}

	@DeleteMapping("/{idCandidato}/{idExame}")
	public void deletar(@PathVariable Long idCandidato, @PathVariable Long idExame) {
		inscricaoService.deletar(new InscricaoKey(idCandidato, idExame));
	}
}
