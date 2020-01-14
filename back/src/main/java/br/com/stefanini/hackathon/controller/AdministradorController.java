package br.com.stefanini.hackathon.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.stefanini.hackathon.service.AdministradorService;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/candidatos")
public class AdministradorController {
	
	@Autowired
	private AdministradorService administradorService ;
	
	@GetMapping("/{id}")
	public ResponseEntity<Object> buscar(@PathVariable Long id){
		try {
			return ResponseEntity.ok(administradorService.buscar(id));
		} catch (RuntimeException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
		}
	}
}
