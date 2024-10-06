import { Link } from 'react-router-dom';

function PageB() {
  return (
    <>
      <div>PageB</div>
      <div>
        <Link to="/">move to PageA</Link>
      </div>
    </>
  );
}

export default PageB;
