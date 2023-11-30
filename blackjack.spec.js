describe('dealerShouldDraw function of blackjack game', function() {
    const two = { val: 2, displayVal: '2', suit: 'clubs' };
    const four = { val: 4, displayVal: '4', suit: 'clubs' };
    const five = { val: 5, displayVal: '5', suit: 'clubs' };
    const six = { val: 6, displayVal: '6', suit: 'clubs' };
    const nine = { val: 9, displayVal: '9', suit: 'clubs' };
    const ten = { val: 10, displayVal: '10', suit: 'clubs' };
    const ace = { val: 11, displayVal: 'Ace', suit: 'clubs' };
    
    describe('Case 10,9', function() {
        it('should return false', function() {
          expect(dealerShouldDraw([ten, nine])).toEqual(false);
        });
    })

    describe('Case Ace,6', function() {
        it('should return true', function() {
          expect(dealerShouldDraw([ace, six])).toEqual(true);
        });
    })

    describe('Case 10,6,Ace', function() {
        it('should return false', function() {
          expect(dealerShouldDraw([ten, six, ace])).toEqual(false);
        });
    })

    describe('Case 2,4,2,5', function() {
        it('should return true', function() {
          expect(dealerShouldDraw([two, four, two, five])).toEqual(true);
        });
    })

})