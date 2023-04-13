import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PensamentoComponent } from './pensamento.component';

describe('PensamentoComponent', () => {
  let component: PensamentoComponent;
  let fixture: ComponentFixture<PensamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PensamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PensamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#ngOnInit', () => {
    it('should initialize pensamento property', () => {
      const pensamento = { id: 1, conteudo: 'Teste', autoria: 'Autor1', modelo: 'modelo2' };
      component.pensamento = pensamento;
      component.ngOnInit();
      expect(component.pensamento).toEqual(pensamento);
    });
  });

  describe('#larguraPensamento', () => {
    it('should return "pensamento-p" if pensamento content length is less than 256 characters', () => {
      const pensamento = { id: 1, conteudo: 'Teste', autoria: 'Autor1', modelo: 'modelo2' };
      component.pensamento = pensamento;
      const result = component.larguraPensamento();
      expect(result).toBe('pensamento-p');
    });

    it('should return "pensamento-g" if pensamento content length is greater than or equal to 256 characters', () => {
      const pensamento = { id: 2, conteudo: 'a'.repeat(256), autoria: 'Autor2', modelo: 'modelo1' };
      component.pensamento = pensamento;
      const result = component.larguraPensamento();
      expect(result).toBe('pensamento-g');
    });
  });
});
