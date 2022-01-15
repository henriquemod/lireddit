# Server side Lireddit

## Docker commands used in this project

For PostgreSQL

```text
docker run -d --name ps-lireddit -e POSTGRES_PASSWORD=123456 -e POSTGRES_DB=lireddit -p 5432:5432 postgres
```

For Redis

```text
docker run --name redis-litreddit -p 6379:6379 redis
```
