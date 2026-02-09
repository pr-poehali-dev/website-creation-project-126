import json
import os
import psycopg2


def handler(event: dict, context) -> dict:
    '''Получение списка заявок из базы данных'''
    method = event.get('httpMethod', 'GET')

    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type'
            },
            'body': ''
        }

    if method != 'GET':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'})
        }

    try:
        db_url = os.environ.get('DATABASE_URL', '')
        
        if not db_url:
            return {
                'statusCode': 500,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'error': 'DATABASE_URL not configured'})
            }

        conn = psycopg2.connect(db_url)
        cur = conn.cursor()
        
        cur.execute("""
            SELECT id, parent_name, child_name, child_age, phone, email, message, created_at
            FROM applications
            ORDER BY created_at DESC
        """)
        
        rows = cur.fetchall()
        
        applications = []
        for row in rows:
            applications.append({
                'id': row[0],
                'parent_name': row[1],
                'child_name': row[2],
                'child_age': row[3],
                'phone': row[4],
                'email': row[5],
                'message': row[6],
                'created_at': row[7].isoformat() if row[7] else None
            })
        
        cur.close()
        conn.close()

        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({
                'success': True,
                'applications': applications
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
                'message': 'Ошибка получения заявок'
            })
        }
