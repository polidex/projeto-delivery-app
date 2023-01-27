import DetailsOrder from '../components/DetailsOrder';
import Menu from '../components/Menu';
import AddressCard from '../components/AddressCard';

function Checkout() {
  return (
    <div>
      <Menu />
      <DetailsOrder removeBtn />
      <AddressCard />
    </div>
  );
}

export default Checkout;
