/**
 * @jest-environment jsdom
 */

import updateTimeComponent from './updateTimeUnits';

describe('updateTimeComponent', () => {
    let timeDom;
  
    beforeEach(() => {
      // Create a fresh timeDom element before each test
      timeDom = document.createElement('div');
      timeDom.innerHTML = `
        <span class="milliseconds"></span>
        <span class="seconds"></span>
        <span class="minutes"></span>
      `;
    });
  
    it('should update milliseconds correctly', () => {
      // Arrange
      const time = { milliseconds: 500 };
  
      // Act
      updateTimeComponent(timeDom, time);
  
      // Assert
      expect(timeDom.querySelector('.milliseconds').innerHTML).toEqual('500');
    });
  
    it('should update seconds correctly', () => {
      // Arrange
      const time = { seconds: 30 };
  
      // Act
      updateTimeComponent(timeDom, time);
  
      // Assert
      expect(timeDom.querySelector('.seconds').innerHTML).toEqual('30');
    });
  
    it('should update minutes correctly', () => {
      // Arrange
      const time = { minutes: 15 };
  
      // Act
      updateTimeComponent(timeDom, time);
  
      // Assert
      expect(timeDom.querySelector('.minutes').innerHTML).toEqual('15');
    });
  });