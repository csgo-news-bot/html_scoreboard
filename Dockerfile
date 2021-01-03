FROM python:3.8.7-slim

ARG APP_PATH=/home/app
RUN mkdir -p ${APP_PATH}
COPY . ${APP_PATH}
WORKDIR ${APP_PATH}

RUN pip install pipenv
RUN pipenv install --deploy --system --ignore-pipfile

RUN apt update -y -qq
RUN apt install wkhtmltopdf -y -qq

CMD ["python", "main.py"]