-- Para atualizar sempre preciso usar o where para filtrar. Caso eu não faça isso irei alterar TODA A BASE DE DADOS

UPDATE estados
SET nome = 'Maranhão'
WHERE sigla = 'MA'

-- Forma 1
select nome from estados where sigla = 'MA'

-- Forma 2
select nome from estados where sigla = "MA"

-- Forma 3
select `nome` from estados where sigla = "MA"

-- Forma 4
select estados.`nome` from estados where sigla = "MA"

-- Forma 5
select est.`nome` from estados est where sigla = "MA"

-- Forma 6
select est.nome from estados est where sigla = "MA"

update estados
set nome = 'Paraná',
    populacao = 11.32
where sigla = 'PR'

select est.nome, sigla, populacao from estados est
where sigla = 'PR'