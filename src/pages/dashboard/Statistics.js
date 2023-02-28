import { Link } from 'react-router-dom';
import ScreenHeader from '../../components/ScreenHeader';
import Wrapper from './Wrapper';

const Statistics = () => {
  return (
    <Wrapper>
      <ScreenHeader>
        <Link to="/dashboard/sales-report" className="btn-dark">
          <i className="bi bi-arrow-left-short"></i> Product Updates :
        </Link>
      </ScreenHeader>
      <>
        <div className="stats p-3  ">
          <div>
            <article>
              <div className="w-full bg-gray-900 rounded-md overflow-x:auto;">
                <iframe
                  className="text-center"
                  title="product-monitoring"
                  style={{
                    background: ' #212121, rgb(33, 33, 33)',
                    border: 'none',
                    boxShadow: ' 0 2px 10px 0 rgba(70, 76, 79, .2)',
                    borderRadius: '3px',
                    width: '100%',
                    height: '350px',
                  }}
                  src="https://charts.mongodb.com/charts-online-ordering-system-hhvqg/embed/charts?id=63f00d35-5123-457a-8d4c-7f4712c9d68c&maxDataAge=3600&theme=dark&autoRefresh=true"></iframe>
              </div>
            </article>
          </div>
        </div>
        <div className="mothtly-sales p-3">
          <div>
            <article>
              <div className="w-full bg-gray-900 rounded-md overflow-x:auto">
                <iframe
                  className="text-center"
                  title="product-monitoring"
                  style={{
                    background: 'bg-gray-900',
                    border: 'none',
                    boxShadow: '0 2px 10px 0 rgba(70, 76, 79,  .2)',
                    borderRadius: '2px',
                    width: '100%',
                    height: '350px',
                  }}
                  src="https://charts.mongodb.com/charts-online-ordering-system-hhvqg/embed/charts?id=63fd2b45-276b-411c-8567-76a6e811d518&maxDataAge=3600&theme=dark&autoRefresh=true"></iframe>
              </div>
            </article>
          </div>
        </div>
        <div className="yearly-orders p-3  overflow-x:auto">
          <div>
            <article>
              <div className=" w-full bg-gray-900 rounded-md ">
                <iframe
                  className="text-center"
                  title="product-monitoring"
                  style={{
                    background: 'bg-gray-900',
                    border: 'none',
                    boxShadow: '0 2px 10px 0 rgba(70, 76, 79,  .2)',
                    borderRadius: '2px',
                    width: '100%',
                    height: '350px',
                  }}
                  src="https://charts.mongodb.com/charts-online-ordering-system-hhvqg/embed/charts?id=63fd2390-e03b-4a65-8750-994e2684bd89&maxDataAge=300&theme=dark&autoRefresh=true"></iframe>
              </div>
            </article>
          </div>
        </div>
      </>
    </Wrapper>
  );
};

export default Statistics;
