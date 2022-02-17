ALTER TABLE empresas MODIFY cnpj VARCHAR(14);

INSERT INTO empresas
    (nome, cnpj)
VALUES
    ('Bradesco', 26421660000130),
    ('Vale', 97280395000165),
    ('Cielo', 01383608000142);

DESC empresas;
DESC prefeitos;

SELECT * FROM empresas;
SELECT * FROM cidades;

INSERT INTO empresas_unidades
    (empresa_id, cidade_id, sede)
VALUES
    (1, 1, 1),
    (1, 2, 0),
    (2, 1, 0),
    (2, 2, 1);