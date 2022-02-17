-- Agrupa as colunas por região e retorna a coluna com a regiao e uma com a soma das populações de cada região. Lista ordenada em ordem decrescente
SELECT
    regiao as 'Região',
    sum(populacao) as Total
FROM estados
GROUP BY regiao
ORDER BY Total desc

-- Soma das populações de todos os estados
SELECT
    sum(populacao) as Total
FROM estados

-- Média das populações de todos os estados
SELECT
    avg(populacao) as Total
FROM estados