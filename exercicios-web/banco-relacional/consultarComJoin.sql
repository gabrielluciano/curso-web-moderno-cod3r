SELECT * FROM estados e, cidades c
WHERE e.id = c.estado_id;

-- Como nome está nas duas cidades preciso usar o alias (apelido) ou o nome do tabela
SELECT 
    e.nome as Estado,
    c.nome as Cidade,
    regiao as Região
FROM estados e, cidades c
WHERE e.id = c.estado_id;

SELECT
    c.nome as Cidade,
    e.nome as Estado,
    regiao as Região
FROM estados e
INNER JOIN cidades c ON e.id = c.estado_id;