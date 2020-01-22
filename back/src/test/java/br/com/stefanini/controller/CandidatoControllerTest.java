package br.com.stefanini.controller;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.springframework.http.ResponseEntity;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import br.com.stefanini.hackathon.controller.CandidatosController;
import br.com.stefanini.hackathon.dto.CandidatoDTO;
import br.com.stefanini.hackathon.service.CandidatoService;

class CandidatoControllerTest {

	@Mock
	private CandidatoService serviceMock;
	
	@InjectMocks
	private CandidatosController candidatosController;
	
	private MockMvc mockMvc;
	
	@BeforeAll
	static void setUpBeforeClass() throws Exception {
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
	}

	@BeforeEach
	void setUp() throws Exception {
		MockitoAnnotations.initMocks(this);
		mockMvc = MockMvcBuilders.standaloneSetup(candidatosController).build();
	}

	@AfterEach
	void tearDown() throws Exception {
	}

	@Test
	void test () {
		serviceMock = Mockito.mock(CandidatoService.class);	    
	    Mockito.when(serviceMock.buscar(1L)).thenReturn(new CandidatoDTO(1L, "nome", "cidade"));
	    assertEquals(ResponseEntity.ok(serviceMock.buscar(1L)) , new CandidatosController().buscar(1L) );	
	}

}
