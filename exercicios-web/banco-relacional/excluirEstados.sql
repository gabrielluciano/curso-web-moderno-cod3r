-- Novamente é necessário o where para que a tabela inteira não seja excluida

DELETE from estados
where sigla = 'NV'

SELECT * FROM estados

DELETE FROM ESTADOS
where id >= 1000