import React from 'react';
import { Image, Header } from 'semantic-ui-react';

const FrontPostcardComponent = () =>
  <div>
    {/* <Header as="h1">Checkout</Header> */}
    <Header sub textAlign="left">
      PostCard Preview
    </Header>
    <Image
      src="https://www.ncl.com/sites/default/files/Hawaii.Tip2016_4.jpg"
      size="big"
    />;
  </div>;
export default FrontPostcardComponent;
