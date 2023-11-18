import DeleteButton from './components/DeleteButton';
import EditButton from './components/EditButton';

export const StoreInformation = [
  {
    id: 1,
    name: 'Michael',
    address: '135 Northwood CA. ',
    storename: 'Michael Eateries ',
    contact: 6388212,
    min_price: 1000,
    editButton: <EditButton />,
    deleteButton: <DeleteButton />,
  },
  {
    id: 2,
    name: 'Kris',
    address: '164 Southwood Carolina. ',
    storename: 'Burger Kings',
    contact: 6388212,
    min_price: 1000,
    editButton: <EditButton />,
    deleteButton: <DeleteButton />,
  },
];
