SELECT * FROM estados;

select Sigla, nome as 'Nome do Estado' from estados
where regiao = 'sul';

-- "desc": ordem decrescente. Caso quisermos em ordem decrescente utilizamos sem desc
select nome, regiao, populacao from estados
where populacao >= 10
order by populacao desc;