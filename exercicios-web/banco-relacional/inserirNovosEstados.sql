INSERT INTO estados (id, nome, sigla, regiao, populacao)
VALUES (1000, 'Novo', 'NV', 'Sul', 2.54)

SELECT * FROM estados

-- Vai inserir depois do valor do último ID
INSERT into estados (nome, sigla, regiao, populacao)
VALUES ('Mais Novo', 'MN', 'Norte', 2.51)

INSERT INTO estados (id, nome, sigla, regiao, populacao)
VALUES (700, 'Novo2', 'N2', 'Nordeste', 1.78)