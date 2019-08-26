import { RtaModule } from './rta.module';

describe('RtaModule', () => {
  let rtaModule: RtaModule;

  beforeEach(() => {
    rtaModule = new RtaModule();
  });

  it('should create an instance', () => {
    expect(rtaModule).toBeTruthy();
  });
});
