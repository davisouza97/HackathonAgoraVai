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

import br.com.stefanini.hackathon.dto.ExameDTO;
import br.com.stefanini.hackathon.dto.InscricaoDTO;
import br.com.stefanini.hackathon.service.ExameService;
import br.com.stefanini.hackathon.service.InscricaoService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/exames")
public class ExamesController {

	@Autowired
	private ExameService exameService;
	@Autowired
	private InscricaoService inscricaoService;

	@GetMapping("/{id}")
	public ResponseEntity<Object> buscar(@PathVariable Long id) {
		try {
			return ResponseEntity.ok(exameService.buscar(id));
		} catch (RuntimeException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
		}
	}

	@GetMapping
	public Iterable<ExameDTO> buscarTodos() {
		return exameService.buscarTodos();
	}

	@GetMapping("/inscricoes/{exameId}")
	public Iterable<InscricaoDTO> buscarTodosPorExame(@PathVariable Long exameId) {
		return inscricaoService.buscarTodosPorExame(exameId);
	}

	@GetMapping("/aprovados/{exameId}")
	public Iterable<InscricaoDTO> buscarSituacao(@PathVariable Long exameId) {
		return inscricaoService.buscarSituacaoPorExame(exameId);
	}
	
	@PostMapping
	public ResponseEntity<Object> salvar(@RequestBody ExameDTO exameoDTO) {
		try {
			return ResponseEntity.ok(exameService.salvar(exameoDTO));
		} catch (RuntimeException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
		}
	}

	@PutMapping("/{id}")
	public ResponseEntity<Object> alterar(@PathVariable Long id, @RequestBody ExameDTO exameDTO) {
		exameDTO.setId(id);
		try {
			return ResponseEntity.ok(exameService.alterar(exameDTO));
		} catch (RuntimeException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
		}
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<String> deletar(@PathVariable Long id) {	
		try {
			inscricaoService.deletarPorExame(id);
			exameService.deletar(id);
			return ResponseEntity.ok("OK");
		} catch (RuntimeException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
		}
	}
}
