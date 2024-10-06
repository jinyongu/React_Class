import { Link } from 'react-router-dom';

function PageA() {
  return (
    <>
      <div>PageA</div>
      <div>
        <Link to="/2">move to PageB</Link>
      </div>
    </>
  );
}

export default PageA;
