import json
import os
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
        
        if google_sheets_url:
            sheet_data = json.dumps({
                'Дата': datetime.now().strftime('%d.%m.%Y %H:%M'),
                'Родитель': parent_name,
                'Ребёнок': child_name,
                'Возраст': child_age,
                'Телефон': phone
            }).encode()
            
            try:
                req = request.Request(
                    google_sheets_url,
                    data=sheet_data,
                    headers={'Content-Type': 'application/json'}
                )
                request.urlopen(req)
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