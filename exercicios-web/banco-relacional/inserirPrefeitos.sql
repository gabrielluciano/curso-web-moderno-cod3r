select * from cidades;

INSERT INTO prefeitos
    (nome, cidade_id)
VALUES
    ('Rodrigo Neves', 2),
    ('Raquel Lira', 3),
    ('Zenaldo Coutinho', null);

SELECT * FROM prefeitos;

-- Embora cidade_id seja do tipo unique key, ainda posso ter mais de uma linha com valor NULL
INSERT INTO prefeitos
    (nome, cidade_id)
VALUES
    ('Rafael Greca', null);

-- Entretanto não posso inserir mais de um prefeito para a cidade 3
INSERT INTO prefeitos
    (nome, cidade_id)
VALUES
    ('Rodrigo Pinheiro', 3);