FROM python:3.11

ENV PYTHONUNBUFFERED=1

WORKDIR /user-service

RUN python -m venv /venv

ENV PATH="/venv/bin:$PATH"

COPY requirements.txt requirements.txt

RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 8000

CMD ["gunicorn", "djangoService.wsgi"]

RUN rm -rf /root/.cache