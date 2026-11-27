# Aurá — simulação navegável para GitHub Pages

Projeto estático em HTML, CSS e JavaScript puro, sem instalação, servidor, back-end, banco externo ou bibliotecas obrigatórias. Foi reconstruído a partir dos três pacotes HTML enviados, do PDF de telas do Figma, do levantamento de requisitos, das notas de IHM e do histórico do grupo.

## Publicar no GitHub Pages

1. Baixe e extraia este ZIP.
2. Abra a pasta extraída. **Selecione o conteúdo que está dentro dela** (`index.html`, `admin/`, `assets/` e `README.md`).
3. No repositório `alufena0/interface-homem-maquina_projeto`, abra a aba **Code**.
4. Envie os arquivos para a raiz do repositório (não envie a pasta externa `aura-github-pages-visual-2.0` como uma subpasta). Substitua os arquivos antigos quando o GitHub perguntar.
5. Faça commit na branch `main`.
6. Em **Settings → Pages**, confira se a publicação está configurada para `Deploy from a branch`, branch `main`, pasta `/ (root)`. Se já estiver assim, não altere.
7. Aguarde o GitHub Pages concluir o deploy. O endereço permanece:
   `https://alufena0.github.io/interface-homem-maquina_projeto/`

A página pública do cliente abre em `index.html`. A equipe entra por **Acesso da equipe** ou diretamente em:
`https://alufena0.github.io/interface-homem-maquina_projeto/admin/login.html`

## Atualização visual Aurá 2.0

- Identidade visual refinada com uma linguagem editorial premium: ameixa profundo, rosé, marfim e detalhes quentes.
- Página inicial com fotografia original criada por IA, categorias ilustradas e faixa editorial de bem-estar.
- Fotografias ilustrativas locais para cabelo, unhas, rosto e corpo; ficam dentro de `assets/images/` e não dependem de links externos.
- Tipografia, espaçamento, tamanhos de texto, cartões, botões, formulários e tabelas ampliados para leitura mais confortável.
- Microinterações, entrada suave de telas, animações dos cartões, movimento decorativo discreto e spinner durante navegação.
- Preferência `prefers-reduced-motion` respeitada para pessoas que reduzem animações no sistema operacional.
- No celular, a navegação do cliente e a navegação administrativa ficam em barras fixas na parte inferior, com alvos de toque maiores; em desktop, permanece a estrutura de site e painel administrativo.
- Painel administrativo com faixa visual de boas-vindas e ajustes de legibilidade.

As imagens são ilustrativas, geradas por IA e armazenadas localmente. As personagens são fictícias; não representam profissionais ou clientes reais.

## O que está incluído

- **Cliente:** catálogo por categoria, busca, seleção de vários serviços, preferência de profissional ou distribuição automática para quem tem menor agenda, calendário, horários de 15 minutos, cadastro obrigatório, pagamento simulado por Pix/cartão, crédito e minhas reservas/cancelamento.
- **Recepção:** agendamento no balcão, pagamento presencial simulado, check-in, fila presencial por ordem de chegada e registro manual de falta.
- **Profissional:** agenda diária e consulta de disponibilidade/alocação (sem mostrar ganho diário para CLT).
- **Gerência:** visão da agenda, equipe, ocupação e tratamento de ausência/substituição.
- **Marketing:** cadastro de pacotes com serviços, vigência, desconto e data de publicação.
- **Administração/TI:** catálogo, parâmetros, perfis, relatórios e integrações planejadas.
- **Catálogo:** 83 serviços de referência do Figma (49 cabelo, 16 unhas e pés, 6 rosto, 12 estética).

## Perfis demonstrativos

Na tela de login, escolha o perfil desejado. A senha de demonstração é `123456`; o campo de e-mail já vem preenchido. Para o perfil Profissional, escolha também o nome da pessoa.

## Observações sobre fidelidade aos documentos

- A identidade visual parte das telas Aurá do Figma: ameixa, rosé, fundo claro, tipografia editorial, navegação lateral administrativa e fluxo público em três etapas. A atualização 2.0 acrescenta fotografias ilustrativas, animações e adaptação de navegação para toque, mantendo os fluxos já implementados.
- Os preços do catálogo são transcritos da página 9 do Figma e estão marcados como **sugeridos, não aprovados**.
- As durações individuais são **estimativas da simulação**: o levantamento pergunta por duração, mas não oferece a tabela final de tempos por serviço.
- Higienização padrão de 15 minutos, com configuração de 10 ou 15 minutos, dentro do intervalo discutido em aula.
- A atribuição sem preferência segue a orientação da aula de 16/11: profissional da especialidade com menor agenda do dia. Ausência e substituição são decisões da gerência.
- A simulação exibe pendências que ainda precisam de validação do grupo: retenção do horário durante pagamento, regras completas de pacotes, encadeamento definitivo, cancelamento abaixo de 24 horas/exceções, detalhes dos meios de pagamento e conduta exata após a tolerância de atraso.
- O item “Remoção de pontas duplas” aparece na página de serviços do Figma sem preço legível e permanece como item pendente, não publicado com valor inventado.

## Importante: é um protótipo, não um sistema de produção

Não há back-end, autenticação segura, banco compartilhado entre dispositivos, gateway de pagamento, Pix real, envio de WhatsApp/e-mail/SMS, emissão de nota fiscal ou integração com Google Agenda. Os dados ficam somente no `localStorage` do navegador em que a demonstração foi aberta. Use exclusivamente dados fictícios. A tela de login apenas simula perfis e permissões; não é uma barreira de segurança real.

O botão **Reiniciar demonstração** restaura os dados fictícios iniciais (disponível no rodapé do espaço administrativo).
