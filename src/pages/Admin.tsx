import { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import Icon from '@/components/ui/icon';

interface Application {
  id: number;
  parent_name: string;
  child_name: string;
  child_age: string;
  phone: string;
  email: string;
  message: string;
  created_at: string;
}

const Admin = () => {
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchApplications = async () => {
    setLoading(true);
    setError('');
    
    try {
      const response = await fetch('https://functions.poehali.dev/1fadb972-9250-46df-8d44-016675c84023');
      const data = await response.json();
      
      if (data.success) {
        setApplications(data.applications);
      } else {
        setError('Ошибка загрузки заявок');
      }
    } catch (err) {
      setError('Ошибка связи с сервером');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-black uppercase" style={{fontFamily: 'Oswald, Arial, sans-serif'}}>
            Заявки с сайта
          </h1>
          <button
            onClick={fetchApplications}
            className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-bold transition"
          >
            <Icon name="RefreshCw" size={20} />
            Обновить
          </button>
        </div>

        {loading && (
          <div className="text-center py-12">
            <Icon name="Loader2" size={48} className="animate-spin text-primary mx-auto" />
            <p className="mt-4 text-muted-foreground">Загрузка заявок...</p>
          </div>
        )}

        {error && (
          <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6 text-center">
            <Icon name="AlertCircle" size={48} className="text-red-500 mx-auto mb-3" />
            <p className="text-red-600 font-semibold">{error}</p>
          </div>
        )}

        {!loading && !error && applications.length === 0 && (
          <div className="bg-gray-50 border-2 border-gray-200 rounded-xl p-12 text-center">
            <Icon name="Inbox" size={64} className="text-gray-300 mx-auto mb-4" />
            <p className="text-xl text-muted-foreground">Пока нет заявок</p>
          </div>
        )}

        {!loading && !error && applications.length > 0 && (
          <div className="bg-white rounded-xl shadow-lg border-2 border-black overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-black hover:bg-black">
                  <TableHead className="text-white font-bold">Дата</TableHead>
                  <TableHead className="text-white font-bold">Имя родителя</TableHead>
                  <TableHead className="text-white font-bold">Имя ребёнка</TableHead>
                  <TableHead className="text-white font-bold">Возраст</TableHead>
                  <TableHead className="text-white font-bold">Телефон</TableHead>
                  <TableHead className="text-white font-bold">Email</TableHead>
                  <TableHead className="text-white font-bold">Сообщение</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {applications.map((app) => (
                  <TableRow key={app.id}>
                    <TableCell className="font-medium whitespace-nowrap">
                      {formatDate(app.created_at)}
                    </TableCell>
                    <TableCell className="font-semibold">{app.parent_name}</TableCell>
                    <TableCell>{app.child_name}</TableCell>
                    <TableCell>{app.child_age}</TableCell>
                    <TableCell>
                      <a href={`tel:${app.phone}`} className="text-primary hover:underline font-medium">
                        {app.phone}
                      </a>
                    </TableCell>
                    <TableCell>
                      <a href={`mailto:${app.email}`} className="text-primary hover:underline">
                        {app.email}
                      </a>
                    </TableCell>
                    <TableCell className="max-w-xs">
                      <div className="text-sm text-muted-foreground line-clamp-2">
                        {app.message}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Всего заявок: <span className="font-bold text-black">{applications.length}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Admin;
