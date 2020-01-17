package br.com.stefanini.hackathon.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.stefanini.hackathon.dto.CandidatoDTO;
import br.com.stefanini.hackathon.model.Candidato;
import br.com.stefanini.hackathon.service.CandidatoService;
import br.com.stefanini.hackathon.service.InscricaoService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/candidatos")
public class CandidatosController {

	@Autowired
	private CandidatoService candidatoService;
	@Autowired
	private InscricaoService inscricaoService;

	@GetMapping("/{id}")
	public ResponseEntity<Object> buscar(@PathVariable Long id) {
		try {
			return ResponseEntity.ok(candidatoService.buscar(id));
		} catch (RuntimeException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
		}
	}

	@GetMapping
	public ResponseEntity<Iterable<CandidatoDTO>> buscarTodos() {
		return new ResponseEntity<Iterable<CandidatoDTO>>(candidatoService.buscarTodos(), HttpStatus.OK);
	}

	@GetMapping("/cidade/{cidade}")
	public ResponseEntity<Iterable<Candidato>> buscarTodosPorCidade(@PathVariable String cidade) {
		cidade = cidade.replaceAll("_", " ");
		return new ResponseEntity<Iterable<Candidato>>(candidatoService.buscarTodosPorCidade(cidade), HttpStatus.OK);
	}

	@PostMapping
	public ResponseEntity<Object> salvar(@RequestBody CandidatoDTO candidatoDTO) {
		try {
			return ResponseEntity.ok(candidatoService.salvar(candidatoDTO));
		} catch (RuntimeException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
		}
	}

	@PutMapping("/{id}")
	public ResponseEntity<Object> alterar(@PathVariable Long id, @RequestBody CandidatoDTO candidatoDTO) {
		candidatoDTO.setId(id);
		try {
			return ResponseEntity.ok(candidatoService.salvar(candidatoDTO));
		} catch (RuntimeException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
		}
		
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Object> deletar(@PathVariable Long id) {
		try {
		inscricaoService.deletarPorCandidato(id);
		candidatoService.deletar(id);
		return ResponseEntity.ok("candidato deletado");
	}catch (RuntimeException e) {
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
	}}
}
