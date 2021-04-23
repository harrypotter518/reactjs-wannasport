import React , { useState } from 'react';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import { withStyles } from '@material-ui/core/styles';
import { PapperBlock } from 'enl-components';
import ReduxFormDemo from './ReduxFormDemo';

const styles = ({
  root: {
    flexGrow: 1,
  }
});

function ReduxForm (props){
  const [valueForm, setValueForm] = useState();
  const showResult = (values) => {
    setTimeout(() => {
      setValueForm(values);
    }, 500); // simulate server latency
  };


    const title = brand.name + ' - Form';
    const description = brand.desc;
    const { intl, classes } = props;
    return (
      <div >
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="twitter:title" content={title} />
          <meta property="twitter:description" content={description} />
        </Helmet>
        <PapperBlock title="Create Activity" icon="library_books" desc=" You are able to create activities on WannaSport, that will be exposed and people can sign up for ">
          <div>
            <ReduxFormDemo onSubmit={(values) => this.showResult(values)} />
          </div>
        </PapperBlock>
      </div>
    );
  
}

export default withStyles(styles)(ReduxForm);
