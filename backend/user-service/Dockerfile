FROM python:3.11

ENV PYTHONUNBUFFERED=1

WORKDIR /user-service

RUN python -m venv /venv

ENV PATH="/venv/bin:$PATH"

COPY requirements.txt requirements.txt

RUN pip install --no-cache-dir -r requirements.txt

COPY . .

RUN python manage.py makemigrations

RUN python manage.py migrate

EXPOSE 8000

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]

RUN rm -rf /root/.cache