import { RatePipe } from './rate.pipe';


fdescribe('RatePipe', () => {
  it('create an instance', () => {
    const pipe = new RatePipe();

    expect(pipe).toBeTruthy();
  });


  fit('should return 90 euros earned after 1 hour', function () {
    const result = this.pipe.transform('3600000', 90);

    expect(result).toEqual(90.00);
  });


  it('should return 0 when mandatory rate argument is not given', function () {
    const result = this.pipe.transform('3234');

    expect(result).toEqual(90.00);
  });
});
