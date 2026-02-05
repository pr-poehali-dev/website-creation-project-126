import json
import os
from urllib import request, parse

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
        
        telegram_token = os.environ.get('TELEGRAM_BOT_TOKEN')
        telegram_chat_id = os.environ.get('TELEGRAM_ADMIN_CHAT_ID')
        
        if telegram_token and telegram_chat_id:
            message = f"""🏊 Новая заявка с сайта ПЛЮХбург!

👤 Родитель: {parent_name}
👶 Ребёнок: {child_name}
🎂 Возраст: {child_age}
📱 Телефон: {phone}"""
            
            telegram_url = f'https://api.telegram.org/bot{telegram_token}/sendMessage'
            telegram_data = parse.urlencode({
                'chat_id': telegram_chat_id,
                'text': message,
                'parse_mode': 'HTML'
            }).encode()
            
            try:
                req = request.Request(telegram_url, data=telegram_data)
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
