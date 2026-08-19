import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

describe("landing page — ajustes da oferta e responsividade", () => {
  const source = readFileSync(resolve(process.cwd(), "client/src/pages/Home.tsx"), "utf8");
  const appSource = readFileSync(resolve(process.cwd(), "client/src/App.tsx"), "utf8");

  it("mantém a copy e os materiais solicitados", () => {
    expect(source).toContain("Casamento Inteligente - Método CASAR+: Aprenda a negociar com fornecedores");
    expect(source).toContain("Guia Casamento Sem Golpes");
    expect(source).toContain("Organize orçamento, pagamentos e compromissos para saber quanto você ainda pode gastar.");
    expect(source).toContain('style={{ paddingRight: "7px" }}');
    expect(source).not.toContain("Checklists e calculadora");
    expect(source).not.toContain("Guia de negociação");
    expect(source).not.toContain("Objeções comuns");
  });

  it("inicia a calculadora em R$ 80.000 e destaca o parcelamento", () => {
    expect(source).toContain('useState("80000")');
    expect(source).toContain("10x");
    expect(source).toContain("49");
    expect(source).toContain(",70");
    expect(source).toContain("Sem juros · R$ 497,00 à vista");
  });

  it("distribui a calculadora nas onze categorias solicitadas", () => {
    const categories = ["Espaço", "Alimentação e Bebidas", "Fotografia e Filmagem", "Música", "Decoração", "Vestuário", "Alianças", "Convites e Papelaria", "Lembrancinhas", "Lua de Mel", "Site do Casamento"];
    categories.forEach((category) => expect(source).toContain(`"${category}"`));
    expect(source).toContain('["Espaço", 0.20]');
    expect(source).toContain('["Alimentação e Bebidas", 0.28]');
    expect(source).toContain('["Lua de Mel", 0.09]');
  });

  it("posiciona CTAs adicionais após preço, FAQ de pagamento e frase final", () => {
    expect(source).toContain('openCheckout("offer_price")');
    expect(source).toContain('openCheckout("faq_payment")');
    expect(source).toContain('openCheckout("final_clarity")');
    expect(source).toContain("Comece por entender o método. Depois, decidam com mais clareza.");
  });

  it("identifica todos os CTAs da Hotmart por localização sem alterar seus destinos", () => {
    const locations = ["header", "hero", "metodo", "ferramentas", "objecoes", "oferta_preco", "oferta_conteudo", "faq_pagamento", "final"];
    expect(source.match(/data-cta-location=/g)).toHaveLength(locations.length);
    locations.forEach((location) => expect(source).toContain(`data-cta-location="${location}"`));
    expect(source.match(/href=\{CHECKOUT_URL\}/g)).toHaveLength(5);
    expect(source.match(/openCheckout\("/g)).toHaveLength(4);
  });

  it("mantém o contato oficial apenas na oferta e no rodapé", () => {
    expect(source).toContain("Ainda ficou com alguma dúvida?");
    expect(source).toContain("Fale com o Casamento Inteligente");
    expect(source).toContain("Dúvidas sobre o Método CASAR+? Entre em contato pelo e-mail:");
    expect(source.match(/mailto:contato@casamento-inteligente\.com/g)).toHaveLength(2);
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

  it("mantém a rota pública do método", () => {
    expect(appSource).toContain('path={"/metodo-casarmais"}');
    expect(appSource).toContain('component={Home}');
    expect(source).toContain('https://pay.hotmart.com/U107190056A');
    expect(source).toContain('href="#inicio"');
    expect(source).toContain('href="#conteudo-principal"');
  });

  it("remove os elementos marcados para exclusão pelo editor visual", () => {
    expect(source).not.toContain('data-analytics-label="mobile_sticky"');
    expect(source).not.toContain("Pagamento seguro pelo checkout oficial da Hotmart.");
  });
});
