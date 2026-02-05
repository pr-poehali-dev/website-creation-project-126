import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from urllib import request, parse
from datetime import datetime

def handler(event: dict, context) -> dict:
    '''API для приёма заявок на занятия'''
    method = event.get('httpMethod', 'GET')

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

    if method == 'POST':
        data = json.loads(event.get('body', '{}'))
        
        parent_name = data.get('parentName', '')
        child_name = data.get('childName', '')
        child_age = data.get('childAge', '')
        phone = data.get('phone', '')
        
        if not all([parent_name, child_name, child_age, phone]):
            return {
                'statusCode': 400,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'error': 'Заполните все поля'})
            }
        
        google_sheets_url = os.environ.get('GOOGLE_SHEETS_WEBHOOK_URL')
        email_to = os.environ.get('EMAIL_TO')
        
        print(f"GOOGLE_SHEETS_WEBHOOK_URL: {google_sheets_url}")
        
        if google_sheets_url:
            sheet_data = json.dumps({
                'Дата': datetime.now().strftime('%d.%m.%Y %H:%M'),
                'Родитель': parent_name,
                'Ребёнок': child_name,
                'Возраст': child_age,
                'Телефон': phone
            }).encode()
            
            print(f"Отправляю данные в Google Sheets: {sheet_data}")
            
            try:
                req = request.Request(
                    google_sheets_url,
                    data=sheet_data,
                    headers={'Content-Type': 'application/json'}
                )
                response = request.urlopen(req)
                print(f"Ответ от Google Sheets: {response.read()}")
            except Exception as e:
                print(f"Ошибка отправки в Google Sheets: {str(e)}")
        else:
            print("GOOGLE_SHEETS_WEBHOOK_URL не настроен!")
        
        if email_to:
            try:
                msg = MIMEMultipart('alternative')
                msg['Subject'] = f'🏊 Новая заявка на занятия - {child_name}'
                msg['From'] = 'noreply@poehali.dev'
                msg['To'] = email_to
                
                html = f"""
                <html>
                  <body style="font-family: Arial, sans-serif; line-height: 1.6;">
                    <h2 style="color: #3b82f6;">🏊 Новая заявка на занятия в бассейне</h2>
                    <table style="border-collapse: collapse; width: 100%; max-width: 500px;">
                      <tr>
                        <td style="padding: 10px; border: 1px solid #ddd; background: #f9fafb;"><strong>Дата и время:</strong></td>
                        <td style="padding: 10px; border: 1px solid #ddd;">{datetime.now().strftime('%d.%m.%Y %H:%M')}</td>
                      </tr>
                      <tr>
                        <td style="padding: 10px; border: 1px solid #ddd; background: #f9fafb;"><strong>Родитель:</strong></td>
                        <td style="padding: 10px; border: 1px solid #ddd;">{parent_name}</td>
                      </tr>
                      <tr>
                        <td style="padding: 10px; border: 1px solid #ddd; background: #f9fafb;"><strong>Ребёнок:</strong></td>
                        <td style="padding: 10px; border: 1px solid #ddd;">{child_name}</td>
                      </tr>
                      <tr>
                        <td style="padding: 10px; border: 1px solid #ddd; background: #f9fafb;"><strong>Возраст:</strong></td>
                        <td style="padding: 10px; border: 1px solid #ddd;">{child_age}</td>
                      </tr>
                      <tr>
                        <td style="padding: 10px; border: 1px solid #ddd; background: #f9fafb;"><strong>Телефон:</strong></td>
                        <td style="padding: 10px; border: 1px solid #ddd;"><a href="tel:{phone}" style="color: #3b82f6;">{phone}</a></td>
                      </tr>
                    </table>
                    <p style="margin-top: 20px; color: #6b7280;">Свяжитесь с клиентом в ближайшее время!</p>
                  </body>
                </html>
                """
                
                msg.attach(MIMEText(html, 'html'))
                
                with smtplib.SMTP('smtp.yandex.ru', 587) as server:
                    server.starttls()
                    server.login('noreply@poehali.dev', os.environ.get('SMTP_PASSWORD', ''))
                    server.send_message(msg)
                
                print(f"Email отправлен на {email_to}")
            except Exception as e:
                print(f"Ошибка отправки email: {str(e)}")
        
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({
                'success': True,
                'message': 'Заявка отправлена! Мы свяжемся с вами в ближайшее время.'
            })
        }

    return {
        'statusCode': 405,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'body': json.dumps({'error': 'Метод не поддерживается'})
    }