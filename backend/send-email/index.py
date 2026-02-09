import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


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

        # Получаем настройки SMTP
        smtp_server = os.environ.get('SMTP_SERVER', 'smtp.mail.ru')
        smtp_port = int(os.environ.get('SMTP_PORT', '465'))
        smtp_username = os.environ.get('SMTP_USERNAME', '')
        smtp_password = os.environ.get('SMTP_PASSWORD', '')
        email_to = os.environ.get('EMAIL_TO', 'pluhburg_2016@mail.ru')

        if not smtp_password:
            return {
                'statusCode': 500,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({
                    'error': 'SMTP_PASSWORD not configured',
                    'message': 'Добавьте пароль Mail.ru в настройках проекта'
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

        # Отправляем через SMTP
        with smtplib.SMTP_SSL(smtp_server, smtp_port) as server:
            server.login(smtp_username, smtp_password)
            server.send_message(msg)

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
