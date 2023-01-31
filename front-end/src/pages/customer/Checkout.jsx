import DetailsOrderCart from '../../components/customer/DetailsOrderCart';
import Menu from '../../components/Menu';
import AddressCard from '../../components/customer/AddressCard';

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
