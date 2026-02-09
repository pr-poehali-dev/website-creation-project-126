import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import psycopg2
import urllib.request
from datetime import datetime


def handler(event: dict, context) -> dict:
    '''Отправка email уведомлений через Mail.ru SMTP'''
    method = event.get('httpMethod', 'POST')

    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type'
            },
            'body': ''
        }

    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'})
        }

    try:
        # Парсим данные
        body = json.loads(event.get('body', '{}'))
        name = body.get('name', '')
        phone = body.get('phone', '')
        email = body.get('email', '')
        message = body.get('message', '')
        
        # Извлекаем имя и возраст ребёнка из message
        child_name = ''
        child_age = ''
        if message:
            parts = message.split('\n')
            for part in parts:
                if 'Имя ребёнка:' in part:
                    child_name = part.split('Имя ребёнка:')[1].split(',')[0].strip()
                if 'Возраст:' in part:
                    child_age = part.split('Возраст:')[1].strip()
        
        # Сохраняем заявку в базу данных
        db_url = os.environ.get('DATABASE_URL', '')
        if db_url:
            conn = psycopg2.connect(db_url)
            cur = conn.cursor()
            cur.execute(
                "INSERT INTO applications (parent_name, child_name, child_age, phone, email, message) VALUES (%s, %s, %s, %s, %s, %s)",
                (name, child_name, child_age, phone, email, message)
            )
            conn.commit()
            cur.close()
            conn.close()

        # Получаем настройки SMTP для Gmail
        smtp_server = 'smtp.gmail.com'
        smtp_port = 587
        smtp_username = 'shatalova.alina91@gmail.com'
        smtp_password = os.environ.get('GMAIL_APP_PASSWORD', '')
        email_to = 'shatalova.alina91@gmail.com'

        if not smtp_password:
            return {
                'statusCode': 500,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({
                    'error': 'GMAIL_APP_PASSWORD not configured',
                    'message': 'Добавьте пароль приложения Gmail в настройках проекта'
                })
            }

        # Формируем письмо
        msg = MIMEMultipart()
        msg['From'] = smtp_username
        msg['To'] = email_to
        msg['Subject'] = f'Новая заявка от {name}'

        email_body = f'''
Новая заявка с сайта:

Имя: {name}
Телефон: {phone}
Email: {email}

Сообщение:
{message}
'''
        msg.attach(MIMEText(email_body, 'plain', 'utf-8'))

        # Отправляем через Gmail SMTP
        with smtplib.SMTP(smtp_server, smtp_port) as server:
            server.starttls()
            server.login(smtp_username, smtp_password)
            server.send_message(msg)
        
        # Отправляем в Google Таблицы
        google_webhook = os.environ.get('GOOGLE_SHEETS_WEBHOOK_URL', '')
        if google_webhook:
            try:
                google_data = {
                    'Дата': datetime.now().strftime('%Y-%m-%d %H:%M:%S'),
                    'Имя родителя': name,
                    'Имя ребёнка': child_name,
                    'Возраст ребёнка': child_age,
                    'Телефон': phone,
                    'Email': email,
                    'Сообщение': message
                }
                req = urllib.request.Request(
                    google_webhook,
                    data=json.dumps(google_data).encode('utf-8'),
                    headers={'Content-Type': 'application/json'}
                )
                urllib.request.urlopen(req)
            except Exception as e:
                pass

        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({
                'success': True,
                'message': 'Письмо отправлено успешно'
            })
        }

    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({
                'error': str(e),
                'message': 'Ошибка отправки письма'
            })
        }