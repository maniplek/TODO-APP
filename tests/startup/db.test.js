var db = require('../../startup/db')
var  mongoose = require('mongoose');

jest.mock('mongoose');
describe('tests for db', () => {
    it('should call connect function', () => {
        const thenMock = jest.fn();
        jest.spyOn(mongoose, 'connect').mockReturnValueOnce({then: thenMock});
        db();
        expect(mongoose.connect).toHaveBeenCalledWith('mongodb://localhost/TODO');
        expect(thenMock).toHaveBeenCalled()
        // assert.equal(1,1);
    });
});