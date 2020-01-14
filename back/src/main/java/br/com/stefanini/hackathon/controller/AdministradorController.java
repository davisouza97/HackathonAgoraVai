package br.com.stefanini.hackathon.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.stefanini.hackathon.dto.AdministradorDTO;
import br.com.stefanini.hackathon.service.AdministradorService;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/admin")
public class AdministradorController {
	
	@Autowired
	private AdministradorService administradorService ;
	
	@PostMapping("/login")
	public ResponseEntity<Object> Logar(@RequestBody AdministradorDTO administradorDTO){
		if (administradorDTO == null) {
			return ResponseEntity.badRequest().body("nenhum administrador foi passado na requisição");
		}
		try {
			return ResponseEntity.ok(administradorService.logar(administradorDTO));
		} catch (RuntimeException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
		}
	}
	
	@PostMapping
	public ResponseEntity<Object> salvar(@RequestBody AdministradorDTO administradorDTO){
		try {
			return ResponseEntity.ok(administradorService.salvar(administradorDTO));
		} catch (RuntimeException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
		}
	}
}
