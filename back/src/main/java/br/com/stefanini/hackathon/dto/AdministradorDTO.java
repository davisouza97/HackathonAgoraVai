package br.com.stefanini.hackathon.dto;

import java.io.Serializable;

import br.com.stefanini.hackathon.model.Administrador;

public class AdministradorDTO implements Serializable {

	private static final long serialVersionUID = 1L;
	private Long id;
	private String nome;
	private String email;
	private String senha;

	public AdministradorDTO() {
		super();
	}

	public AdministradorDTO(Long id, String nome, String email, String senha) {
		super();
		this.id = id;
		this.nome = nome;
		this.email = email;
		this.senha = senha;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}
	
	public Administrador converterParaEntidade() {
		return new Administrador(this.id, this.nome, this.email, this.senha);
	}

}
