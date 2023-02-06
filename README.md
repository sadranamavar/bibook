# bibook

a small online library 

## run bibook in development mode:

1. install docker 
2. clone the project ```git clone https://github.com/sadranamavar/bibook.git```
3. ```mv backend/core/core/settings.py.sample backend/core/core/settings.py```
4. ```mv backend/dbs/redis/redis.conf.sample backend/dbs/redis/redis.conf```
5. ```docker compose build ```
6. ```docker compose exec -it backend ./manage.py makemigrations account bibook comment```
7. ```docker compose exec -it backend ./manage.py migrate```

## run test 
- ```docker compose exec -it backend ./manage.py pytest .```
