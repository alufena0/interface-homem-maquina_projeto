/* Catálogo demonstrativo Aurá. Preços transcritos da página 9 do PDF do Figma;
   todos permanecem identificados como sugestões, não como tabela aprovada.
   Durações são estimativas exclusivamente para simulação e devem ser validadas. */
(function () {
  const rows = [
    // CABELOS — 49 serviços em seis grupos
    ['corte-feminino','Cabelos','Cortes e finalizações','Corte feminino personalizado',120,60,'Corte personalizado conforme estilo e avaliação.'],
    ['corte-bordado','Cabelos','Cortes e finalizações','Corte bordado',100,45,'Acabamento dos fios.'],
    ['consultoria-visagismo','Cabelos','Cortes e finalizações','Consultoria de visagismo',180,60,'Orientação de imagem e harmonia.'],
    ['escova-modelada','Cabelos','Cortes e finalizações','Escova modelada',70,45,'Finalização modelada.'],
    ['escova-lisa','Cabelos','Cortes e finalizações','Escova lisa',60,45,'Finalização lisa.'],
    ['escova-volume','Cabelos','Cortes e finalizações','Escova com volume',75,45,'Finalização com volume.'],
    ['babyliss','Cabelos','Cortes e finalizações','Babyliss e ondas naturais',100,60,'Ondas e modelagem.'],
    ['penteado-festa','Cabelos','Cortes e finalizações','Penteados para festas e eventos',220,90,'Penteado para ocasião especial.'],
    ['penteado-noiva','Cabelos','Cortes e finalizações','Penteados para noivas',650,150,'Penteado para noiva.'],
    ['coloracao-completa','Cabelos','Coloração e transformação','Coloração completa',220,120,'Exige avaliação prévia.'],
    ['cobertura-brancos','Cabelos','Coloração e transformação','Cobertura de fios brancos',150,90,'Exige avaliação prévia.'],
    ['mechas-tradicionais','Cabelos','Coloração e transformação','Mechas tradicionais',380,180,'Exige avaliação prévia.'],
    ['balayage','Cabelos','Coloração e transformação','Balayage',550,210,'Exige avaliação prévia.'],
    ['luzes-reflexos','Cabelos','Coloração e transformação','Luzes e reflexos',400,180,'Exige avaliação prévia.'],
    ['morena-iluminada','Cabelos','Coloração e transformação','Morena iluminada',450,180,'Exige avaliação prévia.'],
    ['loiro-platinado','Cabelos','Coloração e transformação','Loiro platinado',750,240,'Exige avaliação prévia.'],
    ['tonalizacao','Cabelos','Coloração e transformação','Tonalização',140,75,'Avaliação conforme histórico químico.'],
    ['correcao-cor','Cabelos','Coloração e transformação','Correção de cor',500,210,'Exige avaliação prévia.'],
    ['banho-brilho','Cabelos','Coloração e transformação','Banho de brilho',110,60,'Brilho e tonalização leve.'],
    ['hidratacao-profunda','Cabelos','Tratamentos capilares','Hidratação profunda',100,60,'Tratamento capilar.'],
    ['nutricao-capilar','Cabelos','Tratamentos capilares','Nutrição capilar',120,60,'Tratamento capilar.'],
    ['reconstrucao-fios','Cabelos','Tratamentos capilares','Reconstrução dos fios',160,75,'Tratamento capilar.'],
    ['cauterizacao','Cabelos','Tratamentos capilares','Cauterização capilar',180,90,'Tratamento capilar.'],
    ['terapia-capilar','Cabelos','Tratamentos capilares','Terapia capilar',180,75,'Tratamento capilar.'],
    ['detox-couro','Cabelos','Tratamentos capilares','Detox do couro cabeludo',130,60,'Tratamento capilar.'],
    ['cronograma-capilar','Cabelos','Tratamentos capilares','Cronograma capilar personalizado',420,60,'Pacote demonstrado com 3 sessões; condições a validar.'],
    ['danificados','Cabelos','Tratamentos capilares','Tratamento para cabelos danificados',180,75,'Tratamento capilar.'],
    ['quimicamente-tratados','Cabelos','Tratamentos capilares','Tratamento para cabelos quimicamente tratados',190,75,'Avaliar histórico químico.'],
    ['spa-capilar','Cabelos','Tratamentos capilares','Spa capilar',200,90,'Ritual capilar.'],
    ['progressiva','Cabelos','Alisamentos e procedimentos químicos','Escova progressiva',280,150,'Exige avaliação prévia.'],
    ['selagem','Cabelos','Alisamentos e procedimentos químicos','Selagem capilar',230,120,'Exige avaliação prévia.'],
    ['relaxamento','Cabelos','Alisamentos e procedimentos químicos','Relaxamento',200,120,'Exige avaliação prévia.'],
    ['permanente','Cabelos','Alisamentos e procedimentos químicos','Permanente',250,150,'Exige avaliação prévia.'],
    ['reducao-volume','Cabelos','Alisamentos e procedimentos químicos','Redução de volume',220,120,'Exige avaliação prévia.'],
    ['alisamento-definitivo','Cabelos','Alisamentos e procedimentos químicos','Alisamento definitivo',450,210,'Exige avaliação prévia.'],
    ['mega-hair','Cabelos','Extensões e alongamentos','Mega hair',900,240,'Aplicação; cabelo natural e materiais cobrados à parte, conforme orçamento.'],
    ['fita-adesiva','Cabelos','Extensões e alongamentos','Alongamento com fita adesiva',700,180,'Aplicação inicial; materiais conforme orçamento.'],
    ['queratina','Cabelos','Extensões e alongamentos','Alongamento com queratina',950,240,'Aplicação inicial; materiais conforme orçamento.'],
    ['microlinks','Cabelos','Extensões e alongamentos','Alongamento com microlinks',800,210,'Aplicação inicial; materiais conforme orçamento.'],
    ['manutencao-extensoes','Cabelos','Extensões e alongamentos','Manutenção de extensões',280,90,'Manutenção.'],
    ['aplicacao-cabelos','Cabelos','Extensões e alongamentos','Aplicação de cabelos naturais',650,180,'Aplicação; cabelo natural e materiais conforme orçamento.'],
    ['diagnostico-capilar','Cabelos','Serviços exclusivos e premium','Diagnóstico capilar personalizado',100,45,'Avaliação individual.'],
    ['analise-couro','Cabelos','Serviços exclusivos e premium','Análise do couro cabeludo',120,45,'Avaliação individual.'],
    ['spa-cabelos','Cabelos','Serviços exclusivos e premium','Spa dos cabelos — ritual premium',280,90,'Ritual premium.'],
    ['aromaterapia-capilar','Cabelos','Serviços exclusivos e premium','Aromaterapia capilar',90,45,'Serviço complementar.'],
    ['massagem-couro','Cabelos','Serviços exclusivos e premium','Massagem relaxante no couro cabeludo',60,30,'Serviço complementar.'],
    ['produtos-luxo','Cabelos','Serviços exclusivos e premium','Tratamentos com produtos profissionais de luxo',300,90,'Tratamento premium.'],
    ['consultoria-imagem','Cabelos','Serviços exclusivos e premium','Consultoria de imagem e estilo',350,90,'Consultoria.'],
    ['atendimento-vip','Cabelos','Serviços exclusivos e premium','Atendimento VIP e experiência personalizada',250,60,'Adicional aos serviços escolhidos.'],
    // UNHAS E PÉS — 16 serviços
    ['esmalte-pes','Unhas e pés','Cuidados e esmaltação','Esmaltação para os pés',35,30,'Preço sugerido.'],
    ['esmalte-maos','Unhas e pés','Cuidados e esmaltação','Esmaltação para as mãos',30,30,'Preço sugerido.'],
    ['esmalte-maos-pes','Unhas e pés','Cuidados e esmaltação','Esmaltação para os pés e mãos',60,60,'Preço sugerido.'],
    ['waterless','Unhas e pés','Cuidados e esmaltação','Manicure sem corte / hidratação de cutículas (Waterless)',45,45,'Preço sugerido.'],
    ['gel-maos-pes','Unhas e pés','Cuidados e esmaltação','Esmaltação em gel (mãos e pés)',120,75,'Serviço consolidado em um único item.'],
    ['podologia','Unhas e pés','Cuidados e esmaltação','Serviço de podologia',160,60,'Avaliação prévia em casos críticos.'],
    ['spa-maos-pes','Unhas e pés','Rituais de cuidado','Spa das mãos e pés (Luxury Ritual)',150,75,'Esfoliação, hidratação intensiva e cuidado de cutículas e calosidades.'],
    ['plasticas-pes','Unhas e pés','Rituais de cuidado','Plástica dos pés / podologia estética',130,60,'Cuidado estético para ressecamento e asperezas dos pés.'],
    ['unha-gel','Unhas e pés','Estrutura e recuperação','Unha em gel',180,90,'Preço inicial sugerido.'],
    ['blindagem','Unhas e pés','Estrutura e recuperação','Blindagem / banho de gel',100,60,'Preço inicial sugerido.'],
    ['fibra-vidro','Unhas e pés','Estrutura e recuperação','Alongamento natural — fibra de vidro',220,120,'Aplicação inicial.'],
    ['molde-f1','Unhas e pés','Estrutura e recuperação','Alongamento natural — molde F1',180,100,'Aplicação inicial.'],
    ['gel-tip','Unhas e pés','Estrutura e recuperação','Alongamento natural — gel na tip',160,90,'Aplicação inicial.'],
    ['terapia-unhas','Unhas e pés','Estrutura e recuperação','Terapia de fortalecimento e recuperação',90,45,'Para unhas fracas, descamando ou pós-remoção.'],
    ['ritual-noiva-nails','Unhas e pés','Noivas e atendimento express','Ritual Noiva Bridal Nails',280,90,'Preparação, esmaltação e ritual de cuidado para mãos e pés.'],
    ['combo-maos-pes','Unhas e pés','Noivas e atendimento express','Combo mãos + pés simultâneos',85,45,'Atendimento express com duas profissionais; esmaltação tradicional.'],
    // ROSTO — 6 serviços
    ['skin-prep','Rosto','Preparação e maquiagem','Preparação de pele (Skin Prep)',80,45,'Higienização, hidratação e preparação para maquiagem.'],
    ['make-express','Rosto','Preparação e maquiagem','Maquiagem Express / Executiva',130,60,'Produção leve e prática.'],
    ['make-glam','Rosto','Preparação e maquiagem','Maquiagem Social Glam',220,75,'Produção elaborada para festas e eventos.'],
    ['airbrush','Rosto','Técnicas especiais e noivas','Maquiagem Airbrush',300,90,'Aplicação com aerógrafo.'],
    ['automake-vip','Rosto','Técnicas especiais e noivas','Automaquiagem VIP / Visagismo',350,90,'Aula individual com orientação de técnicas.'],
    ['pacote-noiva','Rosto','Técnicas especiais e noivas','Pacote Noiva Completo (Teste + Dia)',900,120,'Maquiagem com teste prévio e atendimento no dia; sem penteado.'],
    // ESTÉTICA — 12 serviços
    ['limpeza-profunda','Corpo e bem-estar','Estética facial','Limpeza de pele profunda',180,60,'Remoção de cravos e impurezas; avaliação conforme necessidade.'],
    ['revitalizacao-facial','Corpo e bem-estar','Estética facial','Revitalização e hidratação facial',150,45,'Máscaras e ativos para nutrição, oleosidade e viço.'],
    ['peeling-ultrassonico','Corpo e bem-estar','Estética facial','Peeling ultrassônico',180,45,'Renovação superficial da pele, conforme avaliação.'],
    ['fototerapia-led','Corpo e bem-estar','Estética facial','Fototerapia LED',100,30,'Protocolo conforme avaliação: acne, manchas e estímulo de colágeno.'],
    ['gordura-localizada','Corpo e bem-estar','Tratamentos corporais','Protocolo para gordura localizada',220,60,'Técnicas e recursos definidos em avaliação.'],
    ['flacidez','Corpo e bem-estar','Tratamentos corporais','Protocolo para flacidez',200,60,'Eletroterapia ou cosmetologia, conforme indicação.'],
    ['celulite','Corpo e bem-estar','Tratamentos corporais','Protocolo para celulite',180,60,'Combinação de técnicas manuais e ativos cosméticos.'],
    ['estrias','Corpo e bem-estar','Tratamentos corporais','Protocolo para estrias',200,60,'Plano individual de cuidado e melhora do aspecto da pele.'],
    ['depilacao','Corpo e bem-estar','Corpo e bem-estar','Depilação',40,30,'Por área; valores iniciais sugeridos: buço R$ 40, axilas R$ 50, meia perna R$ 70.'],
    ['massagem-relaxante','Corpo e bem-estar','Corpo e bem-estar','Massagem relaxante',140,60,'Sessão de 60 minutos.'],
    ['drenagem','Corpo e bem-estar','Corpo e bem-estar','Drenagem linfática',160,60,'Sessão de 60 minutos.'],
    ['sobrancelhas','Corpo e bem-estar','Cuidados complementares','Design de sobrancelhas',60,30,'Mapeamento e modelagem conforme harmonia do rosto.']
  ];

  const evalIds = new Set([
    'coloracao-completa','cobertura-brancos','mechas-tradicionais','balayage','luzes-reflexos','morena-iluminada','loiro-platinado','tonalizacao','correcao-cor','progressiva','selagem','relaxamento','permanente','reducao-volume','alisamento-definitivo','podologia','limpeza-profunda','revitalizacao-facial','peeling-ultrassonico','fototerapia-led','gordura-localizada','flacidez','celulite','estrias'
  ]);
  const categoryMeta = [
    {id:'Cabelos',label:'Cabelo',icon:'✂',description:'Cortes, finalizações, coloração, tratamentos e extensões.'},
    {id:'Unhas e pés',label:'Unhas e pés',icon:'✧',description:'Manicure, pedicure, podologia, rituais e alongamentos.'},
    {id:'Rosto',label:'Rosto',icon:'◌',description:'Preparação, maquiagem e atendimento para noivas.'},
    {id:'Corpo e bem-estar',label:'Estética',icon:'❋',description:'Estética facial e corporal, depilação e bem-estar.'}
  ];
  const services = rows.map((r) => ({
    id:r[0], category:r[1], group:r[2], name:r[3], price:r[4], duration:r[5], description:r[6],
    evaluation:evalIds.has(r[0]), startsAt:['depilacao','mega-hair','fita-adesiva','queratina','microlinks','aplicacao-cabelos','unha-gel','blindagem','fibra-vidro','molde-f1','gel-tip','pacote-noiva'].includes(r[0]),
    active:true, priceApproved:false, durationApproved:false
  }));
  window.AURA_CATALOG = {
    categories:categoryMeta,
    services,
    counts:{'Cabelos':49,'Unhas e pés':16,'Rosto':6,'Corpo e bem-estar':12,total:83},
    unpublished:[{name:'Remoção de pontas duplas',category:'Cabelos',reason:'A linha aparece na tela de referência do Figma, mas não tem preço legível/definido no material recebido; manter como item pendente de validação.'}]
  };
})();
