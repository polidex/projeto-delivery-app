import DetailsOrderCart from '../components/DetailsOrder';
import Menu from '../components/Menu';
import AddressCard from '../components/AddressCard';

function Checkout() {
  return (
    <div>
      <Menu />
      <DetailsOrderCart />
      <AddressCard />
    </div>
  );
}

export default Checkout;
