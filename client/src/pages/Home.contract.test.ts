import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

describe("landing page — ajustes da oferta e responsividade", () => {
  const source = readFileSync(resolve(process.cwd(), "client/src/pages/Home.tsx"), "utf8");

  it("mantém a copy e os materiais solicitados", () => {
    expect(source).toContain("Casamento Inteligente - Método CASAR+: Aprenda a negociar com fornecedores");
    expect(source).toContain("Guia Casamento Sem Golpes");
    expect(source).not.toContain("Checklists e calculadora");
    expect(source).not.toContain("Guia de negociação");
    expect(source).not.toContain("Objeções comuns");
  });

  it("inicia a calculadora em R$ 80.000 e destaca o parcelamento", () => {
    expect(source).toContain('useState("80000")');
    expect(source).toContain("10x");
    expect(source).toContain("49");
    expect(source).toContain(",70");
    expect(source).toContain("total de R$ 497,00");
  });

  it("não usa largura mínima ou overflow horizontal na comparação", () => {
    const comparisonStart = source.indexOf("Exemplo prático de comparação");
    const comparisonEnd = source.indexOf("Antes e depois do método");
    const comparison = source.slice(comparisonStart, comparisonEnd);
    expect(comparison).not.toContain("overflow-x-auto");
    expect(comparison).not.toContain("min-w-[620px]");
    expect(comparison).toContain("sm:grid-cols-[1.25fr_.88fr_.88fr]");
    expect(comparison).toContain("A pergunta não é");
  });

  it("remove os elementos marcados para exclusão pelo editor visual", () => {
    expect(source).not.toContain('data-analytics-label="mobile_sticky"');
    expect(source).not.toContain("Pagamento seguro pelo checkout oficial da Hotmart.");
  });
});
