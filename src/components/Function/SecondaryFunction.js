export const totalPriceItems = order => order.count * order.price;

export const formatCurrency = value => value.toLocaleString('ru-Ru', 
    {
        style: 'currency', 
        currency: 'RUB', 
        minimumFractionDigits: 2,
        maximumFractionDigits: 2}); 