SELECT * FROM estados

-- Aqui estou precisando passar o id de forma manual
INSERT INTO cidades (nome, area, estado_id)
VALUES ('Campinas', 795, 28)
-- Aqui também
INSERT INTO cidades (nome, area, estado_id)
VALUES ('Niterói', 133.9, 22)

-- Agora pegando o ID de forma automática
INSERT INTO cidades (
    nome,
    area,
    estado_id
)
VALUES (
    'Caruaru',
    920.6,
    (SELECT id FROM estados WHERE sigla = 'PE')
)

INSERT INTO cidades
    (nome, area, estado_id)
VALUES (
    'Juazeiro do Norte',
    248.2,
    (SELECT id FROM estados WHERE sigla = 'CE')
)

SELECT * FROM cidades