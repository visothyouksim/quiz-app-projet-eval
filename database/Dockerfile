FROM postgres:17-alpine

COPY init.sql /docker-entrypoint-initdb.d/

EXPOSE 5432

ENV POSTGRES_DB=mydatabase
ENV POSTGRES_USER=myuser
ENV POSTGRES_PASSWORD=mypassword

CMD ["postgres"]
