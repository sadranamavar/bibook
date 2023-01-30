FROM python:3.10-rc-alpine

WORKDIR /code

COPY requirements.txt /code/

EXPOSE 587

RUN ["pip", "install", "-r", "requirements.txt"]

