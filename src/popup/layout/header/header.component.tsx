

import * as React from 'react';
import { Tooltip } from 'react-tippy';

import NavigationComponent from './navigation/navigation.component';

import './header.component.scss';

export default class HeaderComponent extends React.Component<{}> {
  private closePopup() {
    window.close();
  }

  render() {
    return (
      <div className='layout__header'>
        <div className='header__logo'>
          <div className='header__logo__image' style={{ backgroundImage: 'url(./images/header.png)', }}></div>
          <div className='header__logo__image' style={{ backgroundImage: 'url(./images/header2.png)', }}></div>
          <NavigationComponent />
        </div>
        <div className='header__close-button' onClick={this.closePopup}>
          <Tooltip title='Close popup' arrow={true} position='bottom'>
            <svg viewBox='0 0 24 24' preserveAspectRatio='xMidYMid meet' focusable='false'>
              <g>
                <path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z' />
              </g>
            </svg>
          </Tooltip>
        </div>
      </div>
    );
  }
}
