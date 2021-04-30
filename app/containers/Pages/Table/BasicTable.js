import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import { PapperBlock, EmptyData } from 'enl-components';
import StrippedTable from './StrippedTable';

function BasicTable() {
  const title = brand.name + ' - Table';
  const description = brand.desc;
  return (
    <div>
      <Helmet>
        {/* <title>{title}</title> */}
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
      </Helmet>
      <PapperBlock title="" whiteBg icon="table_chart" desc="You are able to create activities on Wannasport, that will be exposed and people can sign up for">
        <div>
          <StrippedTable />
        </div>
      </PapperBlock>
   
    </div>
  );
}

export default BasicTable;
