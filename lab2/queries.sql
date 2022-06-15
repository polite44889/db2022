-- Лабораторна робота № 2
-- З дисципліни Бази даних та інформаційні системи
-- Студента групи МІТ-31 Ярощук Назар Юрійович


-- 1. select all fruits 
Select * from Fruits_to_departued 
-- 2. Get  fuit Fruits_to_departued from the  using alias name “Fruits”.
Select fruit as Fruits from Fruits_to_departued
-- 3. Get fruit, weight from the Fruits_to_departued table
Select fruit, weight from Fruits_to_departued
-- 4. Select fruit details for id “2” from Fruit.
Select * from Fruit where id = '2'
-- 5. Get fruit from Fruits_to_departued in upper case.
Select upper(fruit) from Fruits_to_departued
-- 6. Get fruit from Fruits_to_departued in lower case.
Select lower(fruit) from Fruits_to_departued
-- 7. Get unique country from Fruit table.
Select distinct(country) from Fruit
-- 8. Write a query to combine Country and price and display it as “Information”.
Select country +' '+ price As "Information" from Fruit
-- 9. Get all fruit details from Fruits_to_departued whose “fruit” contains ‘a’.
Select * from Fruits_to_departued where fruit like '%A%'
-- 10. Get all fruit details from Fruits_to_departued whose “fruit” start with latter ‘b’
Select * from Fruits_to_departued where fruit like 'B%'
-- 11. Get all fruit details from Fruits_to_departued whose “fruit” end with ‘a’.
Select * from Fruits_to_departued where fruit like '%a'
-- 12. List all fruits whose contry and categories start with ‘Ba’ or ‘Ap’.
SELECT country, caetegories, FROM Fruit WHERE country LIKE '%Ba%' OR caetegories LIKE '%Ap%'
-- 13. Get fruit details from the Fruits_to_departued table order by weight Ascending.
Select * from Fruits_to_departued order by weight asc
-- 14. Get fruit details from the Fruits_to_departued table order by weight Descending.
Select * from Fruits_to_departued order by weight desc
-- 15. Get all fruit details from the Fruits_to_departued table order by weight Ascending and fruit descending.
Select * from Fruits_to_departued order by weight asc, fruit desc
-- 16. Get position of ‘n’ in fruit ‘Banana’ from Fruits_to_departued.
Select CHARINDEX('n', fruit,0) from Fruits_to_departued where fruit = 'Banana'
-- 17. Select country from Fruit with ‘Country’ prefix.
select 'Country ' + contry from Fruit
-- 18. Get fruit from Fruits_to_departued after removing white spaces from right side.
Select RTRIM(fruit) from Fruits_to_departued
-- 19. Get fruit from Fruits_to_departued after removing white spaces from left side.
Select LTRIM(fruit) from Fruits_to_departued
-- 20. Get length of fruit from Fruits_to_departued
Select len(fruit) from Fruits_to_departued
 -- 21. Get fruit from Fruits_to_departued table after replacing ‘a’ with ‘$’.
 Select REPLACE(fruit,'a','$') from Fruits_to_departued
 -- 22. Get all fruit details from Fruits_to_departued whose fruit starts with ‘b’ and name contains 4 letters.
 Select * from Fruits_to_departued where fruit like 'b___'
 -- 23. Get all fruit details from Fruits_to_departued whose fruit ends with ‘a’ and name contains 4 letters.
 Select * from Fruits_to_departued where fruit like '___a'
 -- 24. Get fristname from Fruits_to_departued not start with any single character between a-p.
 select * from Fruits_to_departued where fruit like '[^a-p]%'
 -- 25. select with <
 Select * from fruit where weight < 1000
 -- 26. select with >
 Select * from fruit where weight > 1000
 -- 27. Get database date.
 select getdate()
 -- 28. Get UTC date.
 select GETUTCDATE()
 -- 29. Select TOP weight from Fruits_to_departued  table
 select top 1 * from Fruits_to_departued
 -- 30.  Select second highest weifht from “Fruits_to_departued” table.
Select TOP 1 weight from (Select TOP 2 weight from Fruits_to_departued
order by weight DESC) T Order By weight ASC
-- 31. Select TOP 2 weight from Fruits_to_departued table
select top 2 * from Fruits_to_departued order by weight desc
-- 32. Select Highest weight from Fruits_to_departue table.
Select Max(weight) from (select top 6 * from Fruits_to_departued) A
-- 33. Select Minimum weight from Fruits_to_departue table.
Select Min(weight) from (select top 6 * from Fruits_to_departued) A
-- 34. Select country, categories from Fruit table in singal column.
select country from Fruit union select categories from Fruit
-- 35. Get fruits details from “Fruits_to_departue” table whose weight in between 10000 and 15000.
Select * from Fruits_to_departue where weight between 10000 and 15000
-- 36. count fruits
Select count(*) from Fruits_to_departue;
-- 37. count fruit whose name starts on A
Select count(*) from Fruits_to_departue where fruit like "A%";
-- 38. count fruits whose fruit consist of 5 simbols
Select count(*) from Fruits_to_departue where fruit like "_____";
-- 39. show first 5 fruits
Select * from Fruits_to_departue limit 5;
-- 40. 10% of fruits
Select top .10 from Fruits_to_departue;
-- 41. all fruit that are private
Select * from Fruit where type="private";
-- 42. average
Select avg(weight) from Fruits_to_departue;
-- 43. summ
Select sum(weight) from Fruits_to_departue;
-- 44. combined queries 
Select sum(weight) + avg(weight) from Fruits_to_departue;
-- 45. random record from table
Select top 1 * from Fruits_to_departure order by NEWID();
-- 46. clone a table without Create, will be created in same database
Select Top 6 * INTO Fruits_to_departure _clone from Fruits_to_departure 
-- 47. sort by number with null-values after others
Select id from Fruits_to_departure order by id NULLS LAST
-- 48) sort by number with null-values before every other
Select id from Fruits_to_departure order by id NULLS first;
-- 49) sort from higher to lower values, nulls after lowest
Select id from Fruits_to_departures order by id desc NULLS last;
-- 50. from lowest values to highest, nulls before
Select id from Fruits_to_departures order by id asc NULLS first;
-- 51. select all country from Fruits WHERE NOT category berries
SELECT country FROM Fruits WHERE NOT category = 'berries'

