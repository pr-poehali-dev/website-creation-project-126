import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

interface BookingFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingForm = ({ isOpen, onClose }: BookingFormProps) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Заявка:", { name, phone });
    setName("");
    setPhone("");
    onClose();
  };

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/50 z-50 transition-opacity"
        onClick={onClose}
      />
      <div className="fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white z-50 shadow-2xl transform transition-transform">
        <div className="p-6 h-full flex flex-col">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-black transition-colors"
          >
            <Icon name="X" size={24} />
          </button>

          <h2 className="text-2xl font-black uppercase mb-2 mt-8" style={{fontFamily: 'Oswald, Arial, sans-serif'}}>
            Запишитесь на пробное занятие
          </h2>
          <p className="text-gray-600 mb-6">Оставьте заявку и мы свяжемся с вами</p>

          <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
            <div className="space-y-4 flex-1">
              <div>
                <label className="block text-sm font-medium mb-2">Ваше имя</label>
                <Input 
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Введите имя"
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Телефон</label>
                <Input 
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+7 (___) ___-__-__"
                  required
                  className="w-full"
                />
              </div>

              <div className="bg-primary/10 p-4 rounded-lg">
                <p className="text-sm text-primary font-bold mb-2">🎁 Специальное предложение:</p>
                <p className="text-sm">Скидка -60% на первое занятие при записи через форму!</p>
              </div>
            </div>

            <Button 
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-6 text-lg mt-6"
            >
              Отправить заявку
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingForm;
