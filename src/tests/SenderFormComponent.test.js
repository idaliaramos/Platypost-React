import React from 'react';
import { shallow, mount } from 'enzyme';
import { Image } from 'semantic-ui-react';
import SenderAddressComponent from '../SenderAddressComponent';

describe('SenderAddressComponent shallowWrapper test', () => {
  const shallowWrapper = shallow(
    <SenderAddressComponent getSenderAddress={getSenderAddress} />
  );

  it('Should have a next button', () => {
    expect(shallowWrapper.find('.next')).toHaveLength(1);
  });
  it('Should have a back button', () => {
    expect(shallowWrapper.find('.back')).toHaveLength(1);
  });

  it('Should have an Image element', () => {
    expect(shallowWrapper.contains(<Image src={mail.imageUrl} />)).toBe(true);
  });

  it('Should fire getSenderAddress when button is clicked', () => {
    shallowWrapper.find('.getSenderAddressButton').simulate('click', {
      preventDefault: () => {}
    });

    expect(getSenderAddress).toBeCalled();
  });

  it('Should pass snapshot test', () => {
    expect(shallowWrapper).toMatchSnapshot();
  });
});

describe('ClothingItemComponent full render tests', () => {
  const fullWrapper = mount(
    <SenderAddressComponent getSenderAddress={getSenderAddress} />
  );

  it('Should test item prop', () => {
    expect(fullWrapper.props().item).toEqual(item);
  });
});
